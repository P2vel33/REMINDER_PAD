<script setup>
import { ref } from "vue";
import JournalItem from "./components/JournalItem.vue";
import MyButton from "./components/UI/MyButton.vue";
import MyCardButton from "./components/UI/MyCardButton.vue";
import LeftPanel from "./layouts/LeftPanel.vue";
import Body from "./layouts/Body.vue";
import Header from "./components/Header.vue";
import JournalList from "./components/JournalList.vue";
import MyJournalItemAdd from "./components/UI/MyJournalItemAdd.vue";

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
  <div class="app">
    <LeftPanel>
      <Header />
      <MyJournalItemAdd />
      <JournalList>
        <div v-for="data in dataArray" :key="data.date">
          <MyCardButton>
            <JournalItem :data="data"></JournalItem>
          </MyCardButton>
        </div>
      </JournalList>
    </LeftPanel>
    <Body> Body </Body>
    <!-- <h1>Header</h1>
    <MyButton></MyButton> -->
  </div>
</template>

<style lang="css">
.app {
  display: flex;
  padding: 30px;
}
</style>
