"use strict";

const md = require("markdown-it")();
// const loaderUtils = require("loader-utils");

module.exports = function (markdown) {
    var reg = /\{(\{[\s\u4e00-\u9fa5\w\d\-=~!@#$%^&*()+`\/\.\[\]\{\}\\\|;':",.<>\?]*\})\}/g
    // var reg = /\{(\{(.|\n)*\})\}/g
    var info, infoMatch
    // merge params and default config
    // const options = loaderUtils.getOptions(this);

    this.cacheable();
    markdown = markdown || ''
    infoMatch = reg.exec(markdown)

    markdown = markdown.replace(reg, '')
    console.log(infoMatch)
    info = (infoMatch && infoMatch[1]) || "{}"

    // marked.setOptions(options);
    return "module.exports = {info: " + info + ", content: `" + md.render(markdown) + "`}";
}