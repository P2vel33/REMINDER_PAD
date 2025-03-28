<template>
  <!-- :class="{ 'journal-add': journalAdd }" -->
  <MyCardButton class="journal-add"> New memories </MyCardButton>
</template>

<script setup>
import { ref } from "vue";
import MyCardButton from "./MyCardButton.vue";
const journalAdd = ref(true);
</script>

<style lang="css" scoped>
.journal-add {
  color: red;
  padding: 10px;
  /* font-size: 25px; */
  text-align: center;
}
</style>
