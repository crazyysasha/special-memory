<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';
const counterStore = useCounterStore();
const { count, doubleCount, } = storeToRefs(counterStore);
const { increment, decrement } = useCounterStore();
</script>

<template>
  <main class="text-red-600">
    hello world

  </main>
  <button @click="increment">
    count is {{ count }}
  </button>
  <div>
    doubled count is {{ doubleCount }}
  </div>
  <button @click="decrement">decrement</button>
</template>
