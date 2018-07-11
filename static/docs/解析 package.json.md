{{
    title: '解析 package.json',
    poster: '',
    date: '2018-07-06',
    id: '3',
    desc: '解析 package.json'
}}
# 解析 package.json

## 属性

> 当发布一个 `npm` 包时，`name` 和 `version` 字段是必填的。

1. name：当然就是这个 `npm` 包的名字。

    `name` 的命名不能以点或下划线开始，不能有大写字母，并且不能与 `node` 的核心模块相同（例如 `path`、`fs`）；要考虑到 `name` 作为一个 `npm` 包的名字，它可能会出现在 `url` 引用中、命令行参数中，或是一个文件夹名，所以有很多限制，非安全的字符是不能出现的，同时也要尽量保持简短。

    > 当你想要发布一个 `npm` 包时，最好先在[npm官网](https://www.npmjs.com/)搜索你的包名是否已经被占用了。

2. version：版本号，使用了 [node-semver](https://github.com/npm/node-semver) 管理。

    例如 `'1.0.4'`，`'12.4.5'`，版本号有三位数字，分别代表不同的含义：

    - `'X.0.0'`：表示 `主版本`，有较大变动，但是向下不兼容的

    - `'0.Y.0'`：表示 `次版本`，有新增功能，并且向下兼容

    - `'0.0.Z'`：表示 `补丁版本`，一般是修复了上个版本的bug

    > 当发布 `npm` 包的迭代时，版本号必需高于之前的版本。

3. description：对这个包的表述。有利于使用者快速了解这个包的作用，因为它会出现在 `npm` 搜索结果里，而 `README.md` 不会。

4. keywords：包的关键字。同样利于包出现在搜索结果里。

4. homepage：项目的主页的链接，例如 `GitHub` 地址。

5. bugs：跟踪或提出项目问题的途径，可以是 `GitHub` 的 `issues` 地址，或是你的邮箱:
    ```json
    "bugs": "https://github.com/ben/npm-program/issues"
    ```
    ```json
    "bugs": {
        "url" : "https://github.com/ben/npm-program/issues",
        "email" : "ben@gmail.com"
    }
    ```

6. license：许可类型。

    开源世界的软件并不都是可以自由使用的，不同的许可协议赋予了使用者不同的权利，`npm` 的许可类型多达300多种，通过 [OSI](https://opensource.org/about) 认证的只有80种，最广泛使用的开源许可是 `MIT` 协议，

    > 参考自：[《GitHub漫游指南》](https://github.phodal.com/)
7. main：指定程序的入口文件
