<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <router-view />
</template>

<style lang="scss">
// 背景动态变色
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

:root {
  font-size: 15px;
}

body {
  font-family: 'Quicksand', sans-serif;
  margin: 0;
  min-height: 100vh;
  background-color: #250030;
  background-image: 
    radial-gradient(closest-side, rgb(107, 20, 3), rgba(235, 105, 78, 0)),
    radial-gradient(closest-side, rgb(103, 22, 76), rgba(243, 11, 164, 0)),
    radial-gradient(closest-side, rgb(84, 75, 30), rgba(254, 234, 131, 0)),
    radial-gradient(closest-side, rgb(103, 51, 246), rgba(170, 142, 245, 0)),
    radial-gradient(closest-side, rgb(179, 94, 29), rgba(219, 153, 98, 0));
  background-size: 
    130vmax 130vmax,
    80vmax 80vmax,
    90vmax 90vmax,
    110vmax 110vmax,
    90vmax 90vmax;
  background-position:
    -80vmax -80vmax,
    60vmax -30vmax,
    10vmax 10vmax,
    -30vmax -10vmax,
    40vmax 40vmax;
  background-repeat: no-repeat;
  animation: 10s movement linear infinite;
  // 禁用滚动条
  overflow: hidden;
}

body::after {
  content: '';
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

}

@keyframes movement {
  0%, 100% {
    background-size: 
      130vmax 130vmax,
      80vmax 80vmax,
      90vmax 90vmax,
      110vmax 110vmax,
      90vmax 90vmax;
    background-position:
      -80vmax -80vmax,
      60vmax -30vmax,
      10vmax 10vmax,
      -30vmax -10vmax,
      50vmax 50vmax;
  }
  25% {
    background-size: 
      100vmax 100vmax,
      90vmax 90vmax,
      100vmax 100vmax,
      90vmax 90vmax,
      60vmax 60vmax;
    background-position:
      -60vmax -90vmax,
      50vmax -40vmax,
      0vmax -20vmax,
      -40vmax -20vmax,
      40vmax 60vmax;
  }
  50% {
    background-size: 
      80vmax 80vmax,
      110vmax 110vmax,
      80vmax 80vmax,
      60vmax 60vmax,
      80vmax 80vmax;
    background-position:
      -50vmax -70vmax,
      40vmax -30vmax,
      10vmax 0vmax,
      20vmax 10vmax,
      30vmax 70vmax;
  }
  75% {
    background-size: 
      90vmax 90vmax,
      90vmax 90vmax,
      100vmax 100vmax,
      90vmax 90vmax,
      70vmax 70vmax;
    background-position:
      -50vmax -40vmax,
      50vmax -30vmax,
      20vmax 0vmax,
      -10vmax 10vmax,
      40vmax 60vmax;
  }
}
</style>
