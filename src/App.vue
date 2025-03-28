<script setup>
import { ref } from "vue";
import JournalItem from "./components/JournalItem.vue";
import MyButton from "./components/UI/MyButton.vue";
import MyCardButton from "./components/UI/MyCardButton.vue";

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
    <MyButton>Click</MyButton>
    <div v-for="data in dataArray" :key="data.date">
      <MyCardButton>
        <JournalItem :data="data"></JournalItem>
      </MyCardButton>
    </div>
  </div>
</template>

<style lang="css"></style>
