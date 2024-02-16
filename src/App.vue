<script setup>
import ControlsComponent from './components/ControlsComponent.vue';
import OnScreenKeyboard from './components/OnScreenKeyboard.vue';
import useTouchKeyboard from './composables/useTouchKeyboard';
import OtherForms from './components/OtherForms.vue';

const { showTouchKeyboard} = useTouchKeyboard();
</script>

<template>
  <div>
    <ControlsComponent />
    <OtherForms />
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
