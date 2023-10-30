<script setup lang="ts">
const response = ref('');
const requestTest = () => {
  const request = axios.create({
    timeout: 60000,
  });
  request.defaults.withCredentials = true;
  document.cookie = 'name=测试内容';
  request.get('/test').then((res) => {
    response.value = res.data;
  }).catch((err) => {
    response.value = err.response.data;
  });
};
</script>

<template>
  <a-button type="primary" @click="() => requestTest()">
    request '/test' api
  </a-button>
  <div>
    response is:
    <div>{{ response }}</div>
  </div>
</template>

<style scoped></style>
