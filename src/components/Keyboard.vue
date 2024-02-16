/**
 * Keyboard component for touch input.
 *
 * This component renders a touch keyboard with customizable layouts.
 * It provides functionality for handling key presses and updating the input value accordingly.
 *
 * @component Keyboard
 * @props {HTMLInputElement|HTMLTextAreaElement} input - The input element to update with the keyboard input.
 * @props {String|Object} layout - The layout of the keyboard. Can be a string representing a predefined layout or an object defining a custom layout.
 * @props {String} defaultKeySet - The default key set to display on the keyboard.
 * @props {Function} accept - The function to call when the accept key is pressed.
 * @props {Function} cancel - The function to call when the cancel key is pressed.
 * @props {Function} change - The function to call when the input value changes.
 * @props {Function} next - The function to call when the next key is pressed.
 * @props {Object} options - Additional options for the keyboard.
 *
 * @emits {Function} [key.func] - Emits a custom event when a key with a function is pressed.
 *
 * @watch layout - Watches for changes in the layout prop and updates the currentKeySet accordingly.
 *
 * @method getLayout - Retrieves the layout object based on the layout prop.
 * @method changeKeySet - Changes the current key set to the specified name.
 * @method toggleKeySet - Toggles the current key set between the specified name and the default key set.
 * @method getCaptionOfKey - Retrieves the caption of a key.
 * @method getClassesOfKey - Retrieves the classes of a key.
 * @method getKeyStyle - Retrieves the style of a key.
 * @method supportsSelection - Checks if the input element supports text selection.
 * @method getCaret - Retrieves the current caret position in the input element.
 * @method backspace - Deletes the selected text or the character before the caret position.
 * @method insertChar - Inserts a character at the caret position.
 * @method mousedown - Handles the mousedown event on the keyboard.
 * @method clickKey - Handles the click event on a key.
 * @method setFocusToInput - Sets focus to the input element and updates the caret position.
 */
<template>
    <div class="vue3-touch-keyboard">
        <div class="keyboard">
            <div v-for="(line, index) in keySet" :key="index" class="line">
                <span
                    v-for="(key, index) in line"
                    :key="index"
                    :class="getClassesOfKey(key)"
                    @click="e => clickKey(e, key)"
                    @mousedown="mousedown"
                    :style="getKeyStyle(key)"
                >
                    {{ getCaptionOfKey(key) }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, computed, watch } from 'vue';
import Layouts from './layouts/default';
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';

const props = defineProps({
    input: [HTMLInputElement, HTMLTextAreaElement],
    layout: [String, Object],
    defaultKeySet: {
        type: String,
        default: 'default',
    },
    accept: Function,
    cancel: Function,
    change: Function,
    next: Function,
    options: {
        type: Object,
        default() {
            return {};
        },
    },
});

const currentKeySet = ref(props.defaultKeySet);
const inputScrollLeft = ref(0);

const keySet = computed(() => {
    let layout = getLayout();
    if (!layout) return;

    let keySet = layout[currentKeySet.value];
    if (!keySet) return;

    let res = [];

    let meta = layout['_meta'] || {};

    keySet.forEach((line) => {
        let row = [];
        line.split(' ').forEach((item) => {
            if (isObject(item)) {
                row.push(item);
            } else if (isString(item)) {
                if (item.length > 2 && item[0] == '{' && item[item.length - 1] == '}') {
                    let name = item.substring(1, item.length - 1);
                    if (meta[name]) row.push(meta[name]);
                    else console.warn('Missing named key from meta: ' + name);
                } else {
                    if (item == '') {
                        // Placeholder
                        row.push({
                            placeholder: true,
                        });
                    } else {
                        // Normal key
                        row.push({
                            key: item,
                            text: item,
                        });
                    }
                }
            }
        });
        res.push(row);
    });

    return res;
});

watch(
    () => props.layout,
    () => {
        currentKeySet.value = 'default';
    }
);

function getLayout() {
    if (isString(props.layout)) return Layouts[props.layout];

    return props.layout;
}

function changeKeySet(name) {
    let layout = getLayout();
    if (layout[name] != null) currentKeySet.value = name;
}

function toggleKeySet(name) {
    currentKeySet.value = currentKeySet.value == name ? 'default' : name;
}

function getCaptionOfKey(key) {
    return key.text || key.key || '';
}

function getClassesOfKey(key) {
    if (key.placeholder) return 'placeholder';
    else {
        let classes = 'key ' + (key.func || '') + ' ' + (key.classes || '');
        if (key.keySet && currentKeySet.value == key.keySet) classes += ' activated';

        return classes;
    }
}

function getKeyStyle(key) {
    if (key.width) return { flex: key.width };
}

function supportsSelection() {
    return /text|password|search|tel|url/.test(props.input.type);
}

function getCaret() {
    if (supportsSelection()) {
        let pos = {
            start: props.input.selectionStart || 0,
            end: props.input.selectionEnd || 0,
        };

        if (pos.end < pos.start) pos.end = pos.start;

        return pos;
    } else {
        let val = props.input.value;
        return {
            start: val.length,
            end: val.length,
        };
    }
}

function backspace(caret, text) {
    if (caret.start < caret.end) {
        text = text.substring(0, caret.start) + text.substring(caret.end);
    } else {
        text = text.substring(0, caret.start - 1) + text.substring(caret.start);
        caret.start -= 1;
    }
    caret.end = caret.start;
    return text;
}

function insertChar(caret, text, ch) {
    if (caret.start < caret.end) {
        text = text.substring(0, caret.start) + ch.toString() + text.substring(caret.end);
    } else {
        text = text.substr(0, caret.start) + ch.toString() + text.substr(caret.start);
    }
    caret.start += ch.length;
    caret.end = caret.start;
    return text;
}

function mousedown(e) {
    if (!props.input) return;
    if (props.options.preventClickEvent) e.preventDefault();

    inputScrollLeft.value = props.input.scrollLeft;
}

function clickKey(e, key) {
    if (!props.input) return;
    if (props.options.preventClickEvent) e.preventDefault();

    let caret = getCaret();
    let text = props.input.value;

    let addChar = null;
    if (typeof key == 'object') {
        if (key.keySet) {
            toggleKeySet(key.keySet);
        } else if (key.func) {
            switch (key.func) {
                case 'backspace': {
                    text = backspace(caret, text);
                    break;
                }

                case 'accept': {
                    if (props.accept) props.accept(text);
                    return;
                }

                case 'cancel': {
                    if (props.cancel) props.cancel();
                    return;
                }

                case 'next': {
                    if (props.next) props.next();
                    return;
                }

                default: {
                    // Emit custom event
                    // this.$emit(key.func);
                }
            }
        } else {
            addChar = key.key;
        }
    } else {
        addChar = key;
    }

    if (addChar) {
        if (props.input.maxLength <= 0 || text.length < props.input.maxLength) {
            if (props.options.useKbEvents) {
                let e = document.createEvent('Event');
                e.initEvent('keydown', true, true);
                e.which = e.keyCode = addChar.charCodeAt();
                if (props.input.dispatchEvent(e)) {
                    text = insertChar(caret, text, addChar);
                }
            } else {
                text = insertChar(caret, text, addChar);
            }
        }

        if (currentKeySet.value == 'shifted') changeKeySet('default');
    }

    props.input.value = text;
    setFocusToInput(caret);

    if (props.change) props.change(text, addChar);

    if (props.input.maxLength > 0 && text.length >= props.input.maxLength) {
        // The value reached the maxLength
        if (props.next) props.next();
    }

    // trigger 'input' Event
    props.input.dispatchEvent(new Event('input', { bubbles: true }));
}

function setFocusToInput(caret) {
    props.input.focus();
    if (caret && supportsSelection()) {
        props.input.selectionStart = caret.start;
        props.input.selectionEnd = caret.end;
    }
}
</script>
<style scoped>
@import '../assets/styles.css';
</style>