import Keyboard from './components/Keyboard.vue';
import OnScreenKeyboard from './components/OnScreenKeyboard.vue';
import useTouchKeyboard from './composables/useTouchKeyboard.js';

import './assets/styles.css';

export { Keyboard, useTouchKeyboard, OnScreenKeyboard};

export default {
  install: (app) => {
    app.component('Keyboard', Keyboard);
    app.component('HelloWorld', HelloWorld);
    app.provide('useTouchKeyboard', useTouchKeyboard);
  },
};