<template>
  <div class="sampletext-mainbox">
    <b-tabs content-class="mt-3" v-model="tete" fill>
      <b-tab title="30秒" active> </b-tab>
      <b-tab title="60秒"> </b-tab>
      <b-tab title="カスタム">
        <span v-show="historyText !== ''">
          <b-btn @click="loadHistory" :disabled="historyText === textSample[2]">
            前回の入力を復元する
          </b-btn>
        </span>
      </b-tab>
    </b-tabs>
    <b-textarea
      rows="7"
      v-model="textSample[tete]"
      :style="{ 'background-color': color }"
      :disabled="tete !== 2"
      placeholder="ここに好きな文字を入力してください。"
      @change="
        saveHistory(textSample[2]);
        sendStringToParent(textSample[2]);
      "
    ></b-textarea>
    <table class="table">
      <tbody>
        <tr>
          <td>文字数：{{ textSample[tete].length }}文字</td>
          <td>読み上げ目安：{{ textSample[tete].length / 5 }}秒</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
  },
  watch: {
    tete() {
      this.sendStringToParent(this.textSample[this.tete]);
    },
  },
  data() {
    return {
      tete: 0,
      textSample: [
        "日本語でのスピーチを行う場合、話す速度として適切な文章量は、一分間に300文字程度だといわれています。\nまた、句点では１秒から２秒程度の間を取ることが好ましいとされています。\nこの例文はおおよそ150文字ですから、これを30秒程度かけて音読するくらいの速さが、適切なスピーチ速度だといえるでしょう。",
        "文章を書くときは、一文をなるべく短くするほうが好ましい、と言われています。文を短くすると、単語同士の関係が簡潔になり、内容が理解しやすくなります。目安として、一文の長さの平均は４０文字前後が好ましいとされています。\nもちろん、長くても理解しやすいよう書かれた文も、世の中にはたくさん存在します。実際、文豪が残した名作の多くは、現代文と比較して一文が長い傾向にあります。ですがこれは、文豪の技量があってのことでしょう。長くても理解しやすい一文を書くよりも、短い文を書くほうが、はるかに簡単です。\nスピーチをする際も、一文一文を短く区切ることを意識すれば、聞き手に理解してもらいやすくなるかもしれません。",
        "",
      ],
      historyText: "",
    };
  },
  methods: {
    // 親に読み上げ用文字列を送る
    sendStringToParent(text) {
      this.$emit("getString", text);
    },
    saveHistory(text) {
      localStorage.setItem("historyText", text);
    },
    loadHistory() {
      this.$set(this.textSample, 2, this.historyText);
    },
  },
  mounted() {
    if (localStorage.getItem("historyText")) {
      this.historyText = localStorage.getItem("historyText");
    }
    this.sendStringToParent(this.textSample[this.tete]);
  },
};
</script>

<style scoped>
.sampletext-mainbox {
  padding: 1rem 0;
}
td {
  width: 50%;
  text-align: center;
}
</style>