<template>
    <div id="vue3-touch-keyboard-element">
        <Keyboard v-if="options.visible" :layout="options.layout" :cancel="hideTouchKeyboard" :accept="hideTouchKeyboard"
        :input="options.input" :options="options.options" />
    </div>
</template>

<script setup>
import Keyboard from './Keyboard.vue';
import useTouchKeyboard from '../composables/useTouchKeyboard';
const { hideTouchKeyboard, options} = useTouchKeyboard();
</script>
<style>
@import '../assets/styles.css';
</style>