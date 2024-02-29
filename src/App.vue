<script setup>
import { OnScreenKeyboard, useTouchKeyboard } from './index.js';
import {ref, watch} from 'vue';
const locale = ref("de")
watch(locale, (newVal) => {
  setLocalLayout(newVal);
})
const {toggleTouchKeyboard, keyboardEnabled, setLocalLayout} = useTouchKeyboard();
const toggle = () => {
  console.log(keyboardEnabled.value, !keyboardEnabled.value)
  toggleTouchKeyboard(!keyboardEnabled.value);
}


</script>

<template>
  <div>
    <div>
      <select v-model="locale">
        <option value="ar">ar</option>
        <option value="de">de</option>
        <option value="fr">fr</option>
      </select>
      <button @click="toggle">Toggle keyboard {{ keyboardEnabled }}</button>
      <fieldset>
        <legend>Normal layout</legend>
        <input id="text" class="input" type="text" placeholder="Text input" data-use-touch-keyboard
          data-layout="normal"  />
      </fieldset>
      
      <fieldset data-layout="numeric" data-use-touch-keyboard>
        <legend>Normal layout  parent set test</legend>
        <input id="text" class="input" type="text" placeholder="Text input"/>
      </fieldset>

      <fieldset>
        <legend>Compact layout</legend>
        <input class="input" type="text" placeholder="Text input"
          maxlength="5" />
      </fieldset>
      <fieldset>
        <legend>Normal layout</legend>
        <input id="text" class="input" type="text" placeholder="Text input" data-use-touch-keyboard
          data-layout="normal" />
      </fieldset>

      <fieldset>
        <legend>Compact layout</legend>
        <input class="input" type="text" placeholder="Text input" data-layout="compact" data-use-touch-keyboard
          maxlength="5" />
      </fieldset>
      <fieldset>
        <legend>Normal layout</legend>
        <input id="text" class="input" type="text" placeholder="Text input" data-use-touch-keyboard
          data-layout="normal" />
      </fieldset>

      <fieldset>
        <legend>Compact layout</legend>
        <input class="input" type="text" placeholder="Text input" data-layout="compact" data-use-touch-keyboard
          maxlength="5" />
      </fieldset>

      <fieldset>
        <legend>Numeric layout</legend>
        <input class="input" type="number" placeholder="Number input" number
          data-layout="numeric" />
      </fieldset>

      <fieldset>
        <legend>Password with compact layout</legend>
        <input class="input" type="password" placeholder="Password input"
          data-layout="compact" />
      </fieldset>
    </div>
    <OnScreenKeyboard />
  </div>
</template>
