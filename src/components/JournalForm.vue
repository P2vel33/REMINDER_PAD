<script setup>
import { ref } from "vue";
import MyButton from "./UI/MyButton.vue";

const inputData = ref("");

const addJournalItem = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  //   console.log(new FormData(e.target));
  //   console.log(formData);
  //   console.log(formProps);
};
</script>

<template>
  <form class="journal-form" @submit="addJournalItem">
    <input type="text" name="title" />
    <input type="date" name="date" />
    <input type="text" name="tag" v-model="inputData" />
    <textarea type="text" name="post" />
    <MyButton>Add</MyButton>
  </form>
</template>

<style lang="css" scoped>
.journal-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
