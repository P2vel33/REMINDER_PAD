<script setup></script>

<template>
  <button class="card-button">
    <slot></slot>
  </button>
</template>

<style lang="css" scoped>
.card-button {
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.03);
  color: #fff;
  padding: 20px;
  border: none;
  text-align: start;
  display: block;
}
.card-button:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
