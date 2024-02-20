// Import necessary dependencies from Vue
import { ref, reactive, onMounted, onUnmounted, nextTick } from "vue";

// Import keyboard layouts
import arLayout from '../components/layouts/ar.js';
import frLayout from '../components/layouts/fr.js';
import deLayout from '../components/layouts/de.js';
import enLayout from '../components/layouts/default.js';

// Define the shared state object using Vue's reactive function
const state = reactive({
    eventListenerAdded: false,
    options: {
        visible: false,
        layout: "normal",
        input: null,
        useKbEvents: false,
        preventClickEvent: false,
    },
    keyboardEnabled: false,
    keyboardLocale: "en",
    // other state variables...
});

// Export the useTouchKeyboard function as the default export
export default function useTouchKeyboard() {
    // ...

    // Define the available keyboard layouts
    const layouts = {
        ar: arLayout,
        fr: frLayout,
        de: deLayout,
        en: enLayout
        // add other layouts as needed
    };

    // Define a ref for storing the interval ID used for clearing timeouts
    const clearIntervalID = ref(null);

    // Function to set the local layout based on the provided locale
    const setLocalLayout = (locale) => {
        if (!layouts.hasOwnProperty(locale)) {
            console.error('Layout not found for locale: ' + locale);
            throw Error('Layout not found for locale: ' + locale);
        }
        
        localStorage.setItem('vue3-touch-keyboard-locale', locale)
        state.keyboardLocale = locale;
    };

    // Function to get the keyboard layout based on the provided locale and layout
    const getKeyBoardLayout = (locale = 'en', layout = 'normal') => {
        if (!layouts.hasOwnProperty(locale)) {
            console.warn(`Locale "${locale}" does not exist in layouts. Defaulting to 'en'.`);
            locale = 'en';
        }
    
        if (!layouts[locale].hasOwnProperty(layout)) {
            console.warn(`Layout "${layout}" does not exist in locale "${locale}". Defaulting to 'normal'.`);
            layout = 'normal';
        }
    
        return layouts[locale][layout];
    }

    // Function to toggle the visibility of the touch keyboard
    const toggleTouchKeyboard = () => {
        state.keyboardEnabled = !state.keyboardEnabled;
        localStorage.setItem('vue3-touch-keyboard-enabled', state.keyboardEnabled);
        if (!state.keyboardEnabled)
            hideTouchKeyboard();
    };

    // Function to show the touch keyboard without any event
    const showTouchKeyboardWithoutEvent = () => {
        if (!state.keyboardEnabled) return;

        clearIntervalID.value = setTimeout(() => {
            state.options.visible = true;
        }, 150);
    };

    // Function to show the touch keyboard based on the provided event
    const showTouchKeyboard = (e) => {
        if (!state.keyboardEnabled) return;
        state.options.visible = false; // Hide the keyboard first to prevent flickering
        state.options.input = e.target;
        // Check for data-layout attribute and use its value if it exists
        const layoutAttribute = e.target.dataset.layout || "normal";

        state.options.layout = getKeyBoardLayout(state.keyboardLocale,layoutAttribute); // use locale for layout selection
        
        if (!state.options.visible) {
            //TIMEOUT BECAUSE OUR OUTSIDE CLICK LISTENER IS CLOSING THE WINDOW INSTEAD
            clearIntervalID.value = setTimeout(() => {
                document.getElementById("app").classList.add('vue3-touch-keyboard-open');
                state.options.visible = true;
                nextTick(() => {
                    state.options.input.scrollIntoView();
                });
            }, 150);
        }
    };

    // Function to hide the touch keyboard
    const hideTouchKeyboard = () => {
        if (state.options.visible) {
            document.getElementById("app").classList.remove('vue3-touch-keyboard-open');
            state.options.visible = false;
        }
    };

    // Function to dismiss the on-screen keyboard based on the provided event
    const dismissOnScreenKeyboard = (e) => {
        if (!state.options.visible)
            return;
        if (state.keyboardEnabled && document.getElementById("vue3-touch-keyboard-element")) {
            if (e.target.closest("#vue3-touch-keyboard-element")) {
                // The click event originated from the keyboard, so don't hide it
                return;
            }
            if (e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
                hideTouchKeyboard();
            }
        }
    };

    // ...

    // Add event listeners when the component is mounted
    onMounted(() => {
        state.keyboardEnabled = Boolean(localStorage.getItem('vue3-touch-keyboard-enabled'));
        if (!state.eventListenerAdded) {
            document.getElementById('vue3-touch-keyboard-element').addEventListener('mousedown', function(event) {
                event.preventDefault();
            });
            document.addEventListener('click', dismissOnScreenKeyboard);
            // Add global focus event listener to show keyboard when input is focused
            document.addEventListener('focus', (e) => {
                if ((e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') && e.target.hasAttribute('data-use-touch-keyboard')) {
                    showTouchKeyboard(e);
                }else {
                    hideTouchKeyboard();
                }
            }, true);
            state.eventListenerAdded = true;
        }
    });

    // Remove event listeners when the component is unmounted
    onUnmounted(() => {
        clearInterval(clearIntervalID.value);
        document.getElementById('vue3-touch-keyboard-element').removeEventListener('mousedown', function(event) {
            event.preventDefault();
        });
        document.removeEventListener('click', dismissOnScreenKeyboard);
        // Remove global focus event listener
        document.removeEventListener('focus', (e) => {
            if ((e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') && e.target.hasAttribute('data-use-touch-keyboard')) {
                showTouchKeyboard(e);
            }else {
                hideTouchKeyboard();
            }
        }, true); // Use capture phase to detect focus events
        state.eventListenerAdded = false;
    });

    // Return the necessary properties and functions
    return {
        options: state.options,
        keyboardLocale: state.keyboardLocale,
        layouts,
        keyboardEnabled: state.keyboardEnabled,
        setLocalLayout,
        toggleTouchKeyboard,
        showTouchKeyboardWithoutEvent,
        showTouchKeyboard,
        hideTouchKeyboard,
        dismissOnScreenKeyboard,
        getKeyBoardLayout,
    };
}
