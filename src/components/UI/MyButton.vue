<script setup></script>

<template>
  <button @click="changeText" class="button accent">
    <slot></slot>
  </button>
</template>

<style lang="css" scoped>
.button {
  border-radius: 6px;
  padding: 8px 30px;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.25s;
  font-size: 16px;
  border: none;
}
.accent:hover {
  background: #646cff;
}
.accent {
  background: #312eb5;
}
</style>
