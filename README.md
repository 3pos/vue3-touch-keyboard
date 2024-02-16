# **Vue3 Touch Keyboard**

The **`Keyboard`** component from the **`vue3-touch-keyboard`** package is a customizable touch keyboard for Vue 3 applications. It can be used to provide a touch interface for text input fields.

## **Installation**

First, install the package using npm:

```bash
bashCopy code
npm install vue3-touch-keyboard

```

## **Usage**

Import the **`Keyboard`** component and use it in your Vue component:

```jsx
javascriptCopy code
import Keyboard from 'vue3-touch-keyboard';

export default {
  components: {
    Keyboard
  }
}

```

Then, use the **`Keyboard`** component in your template:

```
vueCopy code
<Keyboard :input="myInput" :layout="myLayout" />

```

## **Props**

The **`Keyboard`** component accepts the following props:

- **`input`** (HTMLInputElement|HTMLTextAreaElement): The input element to update with the keyboard input.
- **`layout`** (String|Object): The layout of the keyboard. Can be a string representing a predefined layout or an object defining a custom layout.
- **`defaultKeySet`** (String): The default key set to display on the keyboard. Default is 'default'.
- **`accept`** (Function): The function to call when the accept key is pressed.
- **`cancel`** (Function): The function to call when the cancel key is pressed.
- **`change`** (Function): The function to call when the input value changes.
- **`next`** (Function): The function to call when the next key is pressed.
- **`options`** (Object): Additional options for the keyboard.

## **Events**

The **`Keyboard`** component emits a custom event when a key with a function is pressed. The name of the event is the function name of the key.

## **Methods**

The **`Keyboard`** component provides several methods that can be used to interact with the keyboard:

- **`getLayout`**: Retrieves the layout object based on the layout prop.
- **`changeKeySet`**: Changes the current key set to the specified name.
- **`toggleKeySet`**: Toggles the current key set between the specified name and the default key set.
- **`getCaptionOfKey`**: Retrieves the caption of a key.
- **`getClassesOfKey`**: Retrieves the classes of a key.
- **`getKeyStyle`**: Retrieves the style of a key.
- **`supportsSelection`**: Checks if the input element supports text selection.
- **`getCaret`**: Retrieves the current caret position in the input element.
- **`backspace`**: Deletes the selected text or the character before the caret position.
- **`insertChar`**: Inserts a character at the caret position.
- **`mousedown`**: Handles the mousedown event on the keyboard.
- **`clickKey`**: Handles the click event on a key.
- **`setFocusToInput`**: Sets focus to the input element and updates the caret position.

## **Styles**

The **`Keyboard`** component uses scoped CSS, which means that the styles are applied only to this component. You can customize the appearance of the keyboard by overriding the CSS classes in your own styles. The component uses the following CSS classes:

- **`vue3-touch-keyboard`**: The main class for the keyboard component.
- **`keyboard`**: The class for the keyboard itself.
- **`line`**: The class for a line of keys.
- **`key`**: The class for a key.
- **`placeholder`**: The class for a placeholder key.
- **`activated`**: The class for an activated key.

## **Example**

Here's an example of how to use the **`Keyboard`** component:

```
vueCopy code
<template>
  <div>
    <input ref="myInput" type="text" />
    <Keyboard :input="myInput" layout="default" @accept="onAccept" @cancel="onCancel" />
  </div>
</template>

<script>
import Keyboard from 'vue3-touch-keyboard';

export default {
  components: {
    Keyboard
  },
  methods: {
    onAccept(text) {
      console.log('Accepted: ' + text);
    },
    onCancel() {
      console.log('Cancelled');
    }
  }
}
</script>

```

In this example, the **`Keyboard`** component is linked to an input field. When the accept key is pressed, the **`onAccept`** method is called with the current text of the input field. When the cancel key is pressed, the **`onCancel`** method is called.
# **Vue3 Touch Keyboard Composable Documentation**

This package provides a composable **`useTouchKeyboard`** for Vue 3 applications, allowing control over the **`Keyboard.vue`** component. This composable facilitates the integration of a touch keyboard into your Vue 3 application.

## **Installation**

```bash
bashCopy code
npm install vue3-touch-keyboard

```

## **Usage**

1. **Import the composable**
    
    Import the **`useTouchKeyboard`** composable in your component.
    
    ```jsx
    javascriptCopy code
    import { useTouchKeyboard } from 'vue3-touch-keyboard';
    
    ```
    
2. **Call the composable in your `setup` function**
    
    Call the **`useTouchKeyboard`** function in your **`setup`** function.
    
    ```jsx
    javascriptCopy code
    setup() {
      const touchKeyboard = useTouchKeyboard();
      // ...
      return {
        // ...
        touchKeyboard,
      };
    }
    
    ```
    
    You can now use the returned object to control the touch keyboard.
    

## **API**

The **`useTouchKeyboard`** function returns an object with the following properties and methods:

- **`options`**: An object containing the current options for the touch keyboard.
- **`keyboardLocale`**: The current locale of the keyboard.
- **`layouts`**: An object containing the available keyboard layouts.
- **`keyboardEnabled`**: A boolean indicating whether the touch keyboard is enabled.
- **`setLocalLayout(locale)`**: A function to set the local layout based on the provided locale.
- **`toggleTouchKeyboard()`**: A function to toggle the visibility of the touch keyboard.
- **`showTouchKeyboardWithoutEvent()`**: A function to show the touch keyboard without any event.
- **`showTouchKeyboard(e)`**: A function to show the touch keyboard based on the provided event.
- **`hideTouchKeyboard()`**: A function to hide the touch keyboard.
- **`dismissOnScreenKeyboard(e)`**: A function to dismiss the on-screen keyboard based on the provided event.
- **`getKeyBoardLayout(locale, layout)`**: A function to get the keyboard layout based on the provided locale and layout.

## **Input Attributes**

To use the touch keyboard with an input element, add the **`data-use-touch-keyboard`** attribute to it.

```html
htmlCopy code
<input data-use-touch-keyboard>

```

To set a specific layout for the keyboard, use the **`data-layout`** attribute:

```html
htmlCopy code
<input data-use-touch-keyboard data-layout="normal">

```

The **`data-layout`** attribute can be set to any of the available layouts: 'normal', 'ar', 'fr', 'de', 'en'. If the specified layout does not exist, it will default to 'normal'.

# **Vue3 Touch Keyboard - OnScreenKeyboard Component**

The **`OnScreenKeyboard`** component from the **`vue3-touch-keyboard`** package is a wrapper around the **`Keyboard`** component. It uses  **`useTouchKeyboard`** composable to manage the state of the keyboard and provides an interface to show and hide the keyboard.
It is recommended to use this component as global as possible, as it handles all the inputs that enables the touch keyboard

## **Installation**

First, install the package using npm:

```bash
npm install vue3-touch-keyboard
```

## **Usage**

Import the **`OnScreenKeyboard`** component and use it in your Vue component:

```jsx
javascriptCopy code
import OnScreenKeyboard from 'vue3-touch-keyboard';

export default {
  components: {
    OnScreenKeyboard
  }
}

```

Then, use the **`OnScreenKeyboard`** component in your template:

```
vueCopy code
<OnScreenKeyboard />

```

## **Composable**

The **`OnScreenKeyboard`** component uses the **`useTouchKeyboard`** composable to manage the state of the keyboard. The composable provides the following reactive properties and methods:

- **`options`**: An object that contains the options for the keyboard. The options include:
    - **`visible`**: A boolean that determines whether the keyboard is visible.
    - **`layout`**: The layout of the keyboard.
    - **`input`**: The input element to update with the keyboard input.
    - **`options`**: Additional options for the keyboard.
- **`hideTouchKeyboard`**: A method that hides the keyboard.

## **Example**

Here's an example of how to use the **`OnScreenKeyboard`** component:

```
vueCopy code
<template>
  <div>
    <input ref="myInput" type="text" data-use-touch-keyboard data-layout="compact" />
    <OnScreenKeyboard />
  </div>
</template>

<script setup>
import OnScreenKeyboard from 'vue3-touch-keyboard';
</script>

```

In this example, the **`OnScreenKeyboard`** component is linked to an input field. When the input field is focused