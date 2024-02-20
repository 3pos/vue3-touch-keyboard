<script setup>
import { OnScreenKeyboard, useTouchKeyboard } from './index.js';

const {toggleTouchKeyboard} = useTouchKeyboard();
toggleTouchKeyboard();
</script>

<template>
  <div>
    <div>
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
