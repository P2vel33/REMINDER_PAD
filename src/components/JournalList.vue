<script setup></script>

<template>
  <div class="journal-list">
    <slot></slot>
  </div>
</template>

<style lang="css" scoped>
.journal-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
