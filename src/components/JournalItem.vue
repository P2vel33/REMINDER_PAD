<script setup>
import { ref } from "vue";

const { data } = defineProps({
  data: {
    type: Object,
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
});

const formatedDate = new Intl.DateTimeFormat("ru-RU").format(data.date);
</script>

<template>
  <div class="journal-item">
    <h2 class="journal-item__header">{{ data.title }}</h2>
    <h2 class="journal-item__body">
      <div class="journal-item__date">{{ formatedDate }}</div>
      <div class="journal-item__text">{{ data.text }}</div>
    </h2>
  </div>
</template>

<style lang="css" scoped>
.journal-item {
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.03);
  color: #fff;
  padding: 20px;
}

.journal-item__header {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
}

.journal-item__date {
  color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.journal-item__text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  overflow: hidden;
}

.journal-item__body {
  display: flex;
  gap: 10px;
}
</style>
