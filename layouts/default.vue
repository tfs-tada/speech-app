<template>
  <div class="all-parent">
    <div class="header-parent"><Header /></div>
    <div class="nuxt-parent"><Nuxt /></div>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 12px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

h1 {
  font-size: 16px;
  text-align: center;
  padding: 1rem 2rem;
  margin: 1rem;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}

h2 {
  font-size: 14px;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #000;
  text-align: left;
}
h3 {
  font-size: 13px;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  text-align: left;
  background: #f4f4f4;
}
ul, ol {
  color: #1e366a;
  padding: 0.5em 0.5em 0.5em 2em;
}
ul li, ol li {
  line-height: 1.5;
  padding: 0.5em 0;
}
</style>
<style scoped>
.all-parent {
  margin: 1rem auto 1rem auto;
  max-width: 860px;
}
.header-parent {
  text-align: center;
}
</style>