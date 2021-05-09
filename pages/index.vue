<template>
  <div class="container">
    <h2>速度計測</h2>
    <div v-if="!showFlag">
      <h3>お使いのブラウザでは音声認識を使うことはできません</h3>
      <ul>
        <li>以下の機能を使うことができません。ご了承ください</li>
        <ul>
          <li>リアルタイムの速度計測</li>
          <li>一文ごとの読み上げ時間計測</li>
        </ul>
        <li>PC版chrome / PC版edgeなら音声認識に対応しています</li>
      </ul>
    </div>
    <Mike :canFlag="showFlag" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showFlag: true,
    };
  },
  mounted() {
    // ブラウザ判別：pc版chrome以外は没
    const ua = window.navigator.userAgent.toLowerCase();
    if (
      ua.indexOf("msie") != -1 ||
      ua.indexOf("trident") != -1 ||
      ua.indexOf("edge") != -1
    ) {
      this.showFlag = false;
    } else if (ua.indexOf("chrome") !== -1 || ua.indexOf("crios") !== -1) {
      if (ua.indexOf("windows nt") !== -1) {
      } else{
        this.showFlag = false;
      }
    } else {
      this.showFlag = false;
    }
  },
};
</script>