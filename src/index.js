import Keyboard from './components/Keyboard.vue';
import OnScreenKeyboard from './components/OnScreenKeyboard.vue';
import useTouchKeyboard from './composables/useTouchKeyboard.js';

import './assets/styles.css';

const install = (app) => {
  app.component('Keyboard', Keyboard);
  app.component('OnScreenKeyboard', OnScreenKeyboard);
  app.provide('useTouchKeyboard', useTouchKeyboard);
};

export {
  install,
  Keyboard,
  OnScreenKeyboard,
  useTouchKeyboard
};

export default {
  install,
  Keyboard,
  OnScreenKeyboard,
  useTouchKeyboard
};
