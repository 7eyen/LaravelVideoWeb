<template>
  <div id="app">
    <transition
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutLeft"
      style="position:absolute"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
