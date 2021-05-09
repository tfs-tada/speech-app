<template>
  <div class="container">
    <h2>使い方</h2>
    <h3 v-b-toggle.collapse-1>はじめに</h3>
    <b-collapse id="collapse-1">
      <ul>
        <li>スピーチ速度を計測できるアプリです</li>
        <li>
          つい早口になってしまう /
          適切な話速度が分からない、という悩みをお持ちの方のお力になれれば幸いです
        </li>
      </ul>
    </b-collapse>
    <h3 v-b-toggle.collapse-2>計測方法</h3>
    <b-collapse id="collapse-2">
      <ol>
        <li>
          モード選択
          <ul>
            <li>
              30秒モード・60秒モード・カスタムモードからいずれかを選択してください
            </li>
            <li>
              30秒・60秒モードでは、表示される例文を読み上げていただき、スピーチ速度を測定します
            </li>
            <li>
              カスタムモードでは、任意の台本を読み上げていただき、スピーチ速度を測定します（台本は100文字以上をお勧めします）
            </li>
          </ul>
        </li>
        <li>
          スピーチ測定
          <ul>
            <li>開始ボタンを押して、スピーチ測定を開始します</li>
            <li>
              10秒経過以降、入力されたスピーチの速度に応じて、<b>台本の色が変化します</b>(PC版chrome
              / PC版edge限定)
            </li>
            <li>緑背景になった場合は、スピーチ速度が標準より遅いです</li>
            <li>
              赤背景になった場合は、スピーチ速度が標準より早いです。台本領域が↓みたいに変色します
            </li>

            <b-textarea
              rows="3"
              v-model="textSample"
              style="background-color: rgb(255, 220, 220)"
              disabled
            ></b-textarea>
          </ul>
        </li>
        <li>
          結果確認
          <ul>
            <li>
              スピーチが終了したら、終了ボタンを押して測定を終えてください
            </li>
            <li>スピーチ速度等が表示されます。参考程度にどうぞ</li>
          </ul>
        </li>
      </ol>
    </b-collapse>
    <h3 v-b-toggle.collapse-3>計測結果</h3>
    <b-collapse id="collapse-3">
      <ul>
        <li>
          スピーチ速度を測定するアプリです。スピーチの品質を保証するものではないので、あくまでも参考程度にどうぞ
        </li>
        <li>以下は結果画面の例となります</li>
      </ul>
      <div class="ex-box">
        <table class="table">
          <tbody>
            <tr>
              <td>秒速5文字</td>
              <td>読み上げ済：100文字</td>
              <td>経過時間：20秒</td>
            </tr>
          </tbody>
        </table>
        <div>
          <b-table hover :items="results" :fields="['text', 'time']"></b-table>
        </div>
      </div>
      <ul>
        <li>
          <b>秒速</b
          >は、1秒あたりのスピーチ文字数を表しています。4.5~5.5文字が適正速度です
        </li>
        <li>
          <b>読み上げ済み</b
          >は、ユーザーが読み上げた文字数を表しています。漢字変換後でのカウントです
        </li>
        <li><b>経過時間</b>は、ユーザーが読み上げに掛けた時間を表しています</li>
        <li>
          TextとTimeのペアは、各文の読み上げにどれだけ時間がかかったかを表しています
        </li>
      </ul>
    </b-collapse>

    <h3 v-b-toggle.collapse-4>アプリのインストール</h3>
    <b-collapse id="collapse-4">
      <ul>
        <li>
          このアプリケーションはブラウザ上で動作しますが、アプリとしてpcや携帯端末に保存することも可能です。
        </li>
        <li>
          お使いのブラウザによってインストール方法が違います。大体の端末の場合は、アドレスバー右にあるインストールボタンからインストールが可能です
        </li>
        <li>詳しくは[pwa インストール]で検索してください</li>
      </ul>
    </b-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      results: [
        {
          text:
            "日本語でのスピーチを行う場合、話す速度として適切な文章量は一分間に300文字程度だといわれています",
          time: "4秒",
        },
        {
          text:
            "スピーチをする際も一文一文を短く区切ることを意識すれば聞き手に理解してもらいやすくなるかもしれませんな",
          time: "3秒",
        },
      ],
      textSample:
        "日本語でのスピーチを行う場合、話す速度として適切な文章量は、一分間に300文字程度だといわれています。\nまた、句点では１秒から２秒程度の間を取ることが好ましいとされています。",
    };
  },
};
</script>
<style scoped>
.ex-box {
  background-color: rgb(255, 255, 240);
  padding: 2rem;
}
</style>