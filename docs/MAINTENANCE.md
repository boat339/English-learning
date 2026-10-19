# 维护说明

## 内容修改

在 `assets/js/data.js` 中维护三个数组：

- `words`：唯一 `id`、`word`、`phonetic`、`meaning`、`example`、`mnemonic`、`image`、`difficulty`、`category`。
- `questions`：唯一 `id`、`type`、`question`、`options`、从 0 开始的 `answer`、`explanation`、`category`。
- `dialogues`：唯一 `id`、`scene`、`lines`；每句含 `speaker`（A/B）、`text`、`translation`。

保留至少 4 个不同释义的词条，供闯关生成干扰项。新增内容须核实释义、音标及题目来源。现有选择题和游戏选项使用 HTML 拼接，数据只能来自受信任的维护者；如引入用户输入或外部题库，应先改用 DOM/textContent 构造。

`data.js` 必须先于 `app.js` 加载；目前使用经典脚本以兼容直接打开 HTML。全局函数供页面按钮调用，改为模块时需同步迁移事件绑定。

## 工作流

1. 创建分支，修改相应数据、样式或逻辑。
2. 执行 `node scripts/check.mjs`。
3. 用 `python -m http.server 8000` 启动，完成相关人工验收。
4. 更新 `CHANGELOG.md`，提交有明确说明的 commit 或 PR。

## 浏览器验收清单

- 首页四个入口、返回按钮均正常，窄屏无横向滚动。
- 单词卡可翻面，连续切换 8 次后显示 `1 / 8`。
- 练习答对加 10 分，重复点击及返回重进不重复加分，五题后归零。
- 游戏积分不受练习影响，重置游戏不改变练习成绩。
- 四个对话场景正常，含 `Let's`、`I'm` 的句子也可点击朗读。
- 浏览器控制台无脚本异常。

字体、远程图片及语音可用性应在用户实际使用的浏览器与网络环境中检查。
