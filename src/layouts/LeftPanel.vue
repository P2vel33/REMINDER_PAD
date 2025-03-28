<script setup></script>

<template>
  <div class="left-panel">
    <slot></slot>
  </div>
</template>

<style lang="css" scoped>
.left-panel {
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
