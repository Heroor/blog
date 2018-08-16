"use strict";

const md = require("markdown-it")();
// const loaderUtils = require("loader-utils");

module.exports = function (markdown) {
    var reg = /{({(.|\s|\n)*?})}/g
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
