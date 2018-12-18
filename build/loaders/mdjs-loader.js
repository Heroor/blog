"use strict";

const hljs = require('highlight.js');
const md = require("markdown-it")({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre><code class="hljs" lang="${lang}">${hljs.highlight(lang, str, true).value}</code></pre>`;
      } catch (__) {}
    }
    return `<pre><code>${md.utils.escapeHtml(str)}</code></pre>`;
  }
});
// const loaderUtils = require("loader-utils");

module.exports = function (markdown) {
  var reg = /\{(\{(?:.|\s|\n)+?\})\}/g
  var info, infoMatch
  // merge params and default config
  // const options = loaderUtils.getOptions(this);

  this.cacheable();
  markdown = markdown || ''
  infoMatch = reg.exec(markdown)

  markdown = markdown.replace(reg, '')
  info = (infoMatch && infoMatch[1].trim()) || "{title: '未知'}"

  return "module.exports = {info: " + info + ", content: `" + md.render(markdown) + "`}";
}
