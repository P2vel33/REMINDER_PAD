<script setup>
import { ref } from "vue";
import JournalItem from "./components/JournalItem.vue";
import MyButton from "./components/UI/MyButton.vue";

const dataArray = ref([
  {
    title: "Preparing for course renewal",
    text: "Mountain hiking reveals amazing natural landscapes",
    date: Date.now(),
  },
  {
    title: "Mountain hiking",
    text: "Had think about time very much",
    date: Date.now() + 1,
  },
]);
console.log(dataArray.value);
</script>

<template>
  <div>
    <h1>Header</h1>
    <MyButton />
    <JournalItem
      v-for="data in dataArray"
      :key="data.date"
      :data="data"
    ></JournalItem>
  </div>
</template>

<style lang="css"></style>
