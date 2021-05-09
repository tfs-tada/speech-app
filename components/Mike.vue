<template>
  <div>
    <table class="table">
      <tbody>
        <th colspan="2">スピーチ速度目安</th>
        <tr>
          <td>秒速~3文字</td>
          <td>ゆっくり</td>
        </tr>
        <tr>
          <td>秒速3~4.5文字</td>
          <td>すこしゆっくり</td>
        </tr>
        <tr>
          <td>秒速4.5~5.5文字</td>
          <td>適切</td>
        </tr>
        <tr>
          <td>秒速5.5~7文字</td>
          <td>すこし早口</td>
        </tr>
        <tr>
          <td>秒速7文字~</td>
          <td>早口</td>
        </tr>
      </tbody>
    </table>
    <SampleText
      :color="getColor(Math.round((count / time) * 100) / 100)"
      @getString="getString"
    />
    <div class="btn-box">
      <b-button @click="startRecognation()" :disabled="timer !== null"
        >開始</b-button
      >
      <b-button @click="stopRecognation()" :disabled="!timer">終了</b-button>
    </div>
    <div>
      <table class="table">
        <tr>
          <td colspan="3">
            <div style="color: gray">
              <span v-show="text.length === 0">
                *開始ボタンを押して測定を開始します*
              </span>
              {{ text }}
            </div>
          </td>
        </tr>
        <tr v-if="canFlag">
          <td>秒速{{ Math.round((count / time) * 100) / 100 }}文字</td>
          <td>読み上げ済：{{ count }}文字</td>
          <td>経過時間：{{ time }}秒</td>
        </tr>
        <tr v-else>
          <td>経過時間：{{ time }}秒</td>
          <td v-if="count !== 0">
            秒速{{ Math.round((count / time) * 100) / 100 }}文字
          </td>
          <td v-else>健闘を祈ります</td>
        </tr>
      </table>
      <div v-show="canFlag">
        <b-table
          striped
          hover
          :items="results"
          :fields="['text', 'time']"
        ></b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    canFlag: Boolean,
  },
  data() {
    return {
      results: [
        {
          text: "*ここに入力済みの文が表示されます*",
        },
      ],
      count: 0,
      startTime: null,
      time: 0,
      text: "",
      timer: null,
      recognition: null,
      childText: "",
    };
  },
  methods: {
    // childから読み上げ用の文字列を受け取る
    // 音声認識がオフの場合のみ反映
    getString(sampleStr) {
      this.childText = sampleStr;
    },

    // 時間経過での背景色変化
    getColor(rate) {
      // chrome以外で動作時はこの機能をカット
      if (!this.canFlag) return `rgb(220,220,220)`;
      // 10秒経過していたら色変化開始
      return this.time > 10
        ? `rgb(${220 + 50 * (rate - 5)},220,220)`
        : `rgb(220,220,220)`;
    },

    // 計測スタート
    startRecognation() {
      this.startTime = new Date();
      this.timer = setInterval(() => {
        this.time = this.nowTime(this.startTime);
      }, 10);
      this.results = [];
      this.count = 0;
      this.text = "*測定中です。原稿を読み終えたら終了ボタンを押してください*";
      if (this.canFlag) this.recognition.start();
    },

    // 計測終了
    stopRecognation() {
      if (this.canFlag) this.recognition.stop();
      clearInterval(this.timer);
      this.timer = null;
      if (!this.canFlag) this.count = this.childText.length;
      const sp = Math.round((this.count / this.time) * 100) / 100;
      const ansdat =
        sp < 3
          ? "ゆっくり"
          : sp < 4.5
          ? "少しゆっくり"
          : sp < 5.5
          ? "理想的"
          : sp < 7
          ? "少し早口"
          : "早口";

      this.text = `*お疲れさまでした。貴方のスピーチ速度は${ansdat}かもしれません*`;
    },

    // 経過時間取得
    nowTime(time) {
      return Math.round((new Date() - time.getTime()) / 10) / 100;
    },
  },

  // SpeechRecognition初期設定
  mounted() {
    window.SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;

    // リアルタイム表示・複数文表示を有効
    this.recognition = new SpeechRecognition();
    this.recognition.lang = "ja-JP";
    this.recognition.interimResults = true;
    this.recognition.continuous = true;

    // 入力を受けたら発火
    // 入力された音声を処理
    let localCount = 0;
    let startTime = null;
    this.recognition.onresult = (event) => {
      if (!startTime) {
        startTime = new Date();
        localCount = 0;
      }
      for (let i = event.resultIndex; i < event.results.length; i++) {
        let transcript = event.results[i][0].transcript;

        this.count = localCount + transcript.length;
        if (event.results[i].isFinal) {
          const datTime = Math.round((new Date() - startTime) / 10) / 100;
          const newText = {
            text: transcript,
            time: datTime + "秒",
          };
          this.results.push(newText);
          startTime = null;
          localCount += transcript.length;
        } else {
          if (this.timer === null) return;
          this.text = transcript;
        }
      }
    };
  },
};
</script>
<style scoped>
td {
  width: 33%;
  padding-left: 1rem;
  text-align: left;
}
.btn-box {
  text-align: center;
  margin: 1rem;
}
</style>