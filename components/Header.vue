<template>
  <div class="main-header">
    <div class="title-box">
      <h1>話す速度を矯正したい人のためのページ</h1>
    </div>
    <div class="menu-box">
      <b-nav pills fill>
        <b-nav-item :active="isActive('/')" to="/"> 速度計測 </b-nav-item>
        <b-nav-item :active="isActive('/howto')" to="/howto">使い方</b-nav-item>
        <b-nav-item :active="isActive('/note')" to="/note">注意事項</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isActive(url) {
      return this.$route.path === url ? true : false;
    },
  },
};
</script>

<style scoped>
.main-header {
  margin: auto;
}
.menu-box {
  padding: 1rem 2rem;
  margin: 1rem 2rem;
}
</style>