# English Learning · 潮流英语学习平台

一个无需构建的静态英语学习项目，使用 HTML、CSS 和原生 JavaScript。唯一项目入口为 **[boat339/English-learning](https://github.com/boat339/English-learning)**。

## 功能

- 单词卡片：8 个示例词条，含音标、释义、例句、记忆提示及图片。
- 词汇练习：5 道示例选择题，答题反馈、解析和独立计分，每题 10 分。
- 场景对话：4 个双语场景，支持浏览器英语朗读。
- 单词闯关：随机释义选项、反馈、等级与独立游戏积分。

题库为内置演示内容，未核实为官方四六级或考研真题。分类标签仅用于内容组织。

## 本地运行

安装 Git 和 Python 3 后执行：

```bash
git clone https://github.com/boat339/English-learning.git
cd English-learning
python -m http.server 8000
```

打开 <http://localhost:8000>。也可直接用浏览器打开 `index.html`；建议通过 HTTP 服务保持一致的运行环境。运行应用不需要 Node.js、npm 安装或后端。

## 目录

| 路径 | 用途 |
| --- | --- |
| `index.html` | 页面结构与入口 |
| `assets/css/styles.css` | 页面样式与响应式布局 |
| `assets/js/data.js` | 单词、选择题、双语对话数据 |
| `assets/js/app.js` | 导航、交互、计分及朗读 |
| `scripts/check.mjs` | 无第三方依赖的结构与数据检查 |
| `.github/workflows/check.yml` | 推送及 PR 自动检查 |
| `docs/MAINTENANCE.md` | 修改方法与人工验收清单 |
| `docs/CONSOLIDATION.md` | 两仓库核对、格式恢复及验证记录 |
| `CHANGELOG.md` | 变更记录 |

## 检查

维护者安装 Node.js 22 后运行：

```bash
node scripts/check.mjs
```

该命令检查脚本语法、数据约束、页面 ID 及本地资源引用，不代替浏览器交互验收。

## 使用说明与限制

- 单词与场景循环显示；五题练习完成后进入新一轮并清空练习分数。
- 游戏重置仅清空游戏进度和积分。页面内切换保留已答题结果；刷新页面会重置全部状态。
- 朗读依赖浏览器 Web Speech API 和系统可用语音；无语音支持时不会播放。
- Google Fonts 和 Unsplash 图片需要联网；访问失败时核心文字内容和答题逻辑仍可使用。
- 当前没有账号、云同步、学习记录持久化、录音或发音评分。

## 静态托管

可将整个仓库作为静态目录部署。使用 GitHub Pages 时，在仓库 Settings → Pages 选择从 `main` 分支根目录发布；本文说明操作方法，不代表已启用部署。

## 贡献与许可

修改方法见 [维护说明](docs/MAINTENANCE.md)。提交前运行检查并完成相关交互验收。项目尚未声明开源许可证；第三方字体、图片的使用受各自条款约束。
