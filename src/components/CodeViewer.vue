<template>
  <div>
    <prism-editor
      class="my-editor"
      v-model="code"
      :highlight="highlighter"
      readonly
      line-numbers
  ></prism-editor>
  </div>
</template>

<script>
import Vue from 'vue';
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core';
// https://github.com/PrismJS/prism/issues/1567#issuecomment-423611947
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
// import syntax highlighting styles
import 'prismjs/themes/prism-tomorrow.css';
import defaultCode from '@/data/cppDefaultCode';

export default Vue.extend({
  name: 'CodeViewer',
  components: {
    PrismEditor,
  },
  data() {
    return { code: defaultCode };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.cpp);
    },
  },
});
</script>

<style>
/* required class */
.my-editor {
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
