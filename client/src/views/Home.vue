<template>
  <div class="d-flex flex-wrap">
    <v-card v-for="(item, i) in 3" :key="i"
            class="pa-2 ma-2"
            max-width="300"
            shaped
            raised>
      <v-img src="../assets/logo.png" alt="Vue logo"/>
      <div class="text-center pb-2">This is card {{++i}}</div>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'home'
  };
</script>

<style lang='scss' scoped>
</style>
