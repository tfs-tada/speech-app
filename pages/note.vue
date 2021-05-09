<template>
  <div class="container">
    <h2>注意事項</h2>
    <h3 v-b-toggle.collapse-1>動作環境について</h3>
    <b-collapse id="collapse-1">
      <ul>
        <li>ブラウザ内の SpeechRecognition機能を用いて実装しています</li>
        <li><b>PC版chromeでの使用を強くお勧めします</b></li>
        <li>端末のマイク機能をオンにしないと使用できません</li>
        <li>端末のマイク性能によって結果が左右することがあります</li>
		<li>今後、ブラウザ SpeechRecognition の仕様が変わった場合、測定ができなくなる可能性があります</li>
      </ul>
    </b-collapse>
    <h3 v-b-toggle.collapse-2>計測結果について</h3>
    <b-collapse id="collapse-2">
      <ul>
        <li>計測結果は、あくまでも一つの目安としてお考え下さい</li>
      </ul>
    </b-collapse>
    <h3 v-b-toggle.collapse-3>その他</h3>
    <b-collapse id="collapse-3">
      <ul>
        <li>ページは予告なく削除することがあります</li>
      </ul>
    </b-collapse>
  </div>
</template>