<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import {App} from 'ant-design-vue';
import { useTestStore } from '../common/store/test.store';

const {message, notification, modal} = App.useApp();

console.log(message, notification, modal)

const { appContext } = getCurrentInstance()!;

const { $test } = appContext.config.globalProperties;

console.log($test, $test());

// defineProps<{ msg: string }>()

const count = ref(0)

console.log(import.meta.env)

const test = useTestStore();
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->

  <div class="card">
    <!-- <button type="button" @click="count++">count is {{ count }}</button> -->
    <a-button type="primary" @click="test.increment()" class="m-1">Primry Button count is {{ test.count }}</a-button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <p>
    mode %MODE%
    test %VITE_TEST%
  </p>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
