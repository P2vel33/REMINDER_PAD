<template>
  <!-- :class="{ 'journal-add': journalAdd }" -->

  <MyCardButton class="journal-add">
    <div class="div">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <path
          d="M10 4.96265V16.6293"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.16669 10.796H15.8334"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p>New memories</p>
    </div>
  </MyCardButton>
</template>

<script setup>
import { ref } from "vue";
import MyCardButton from "./MyCardButton.vue";
const journalAdd = ref(true);
</script>

<style lang="css" scoped>
.div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.journal-add {
  /* color: white; */
  padding: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
</style>
