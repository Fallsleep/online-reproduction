<script setup lang="ts"></script>

<template>
  <div>
    click link below to show content
    <a-divider />
    <div>
      <router-link to="/">Return Home </router-link><br />
      <router-link to="/ModalTheme">Modal Theme </router-link>
      <router-link to="/ModalTheme">Api Test </router-link>
    </div>
    <a-divider />
    <div>
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
