# 按症状排查

从解压游戏到进入主菜单要经过几个阶段，**卡在哪一步，就看哪一步对应的页面**。不确定时，从第 1 步开始往下对照。

<div class="route">

1. **安装 P社启动器**：运行 `launcher-installer-windows.msi`
   - 双击没反应，提示 `2503` / `2502` 或 Windows Installer 错误 → [P社启动器装不上或白屏](./launcher)

2. **打开 P社启动器**：运行 `dowser.exe`
   - 白屏、黑屏、一直转圈 → [P社启动器装不上或白屏](./launcher)
   - 提示数据库错误，DLC 显示未生效 → [P社启动器数据库错误](./database-error-with-start-game)
   - 提示没有游戏数据目录的读写权限 → [文档目录与权限问题](./documents-folder)

3. **在启动器中启用 MOD**
   - MOD 列表里找不到、灰色无法勾选、带感叹号 → [安装 MOD 与 MOD 不生效](./install-mod)

4. **点击「开始游戏」**
   - 弹窗提示缺少 `MSVCP140.dll`、`d3dx9_43.dll` 等 → [启动崩溃与缺少运行库](./error-with-start-game)
   - 弹窗提示 `0xc000007b` → [0xc000007b](./error-with-start-game#0xc000007b)

5. **游戏加载**
   - 黑屏、卡在加载界面、没有提示直接退出 → [黑屏与无提示闪退](./error-with-start-game#black-screen)

6. **进入游戏后**
   - 设置和存档保存不了 → [文档目录与权限问题](./documents-folder)
   - 开启 MOD 后崩溃或卡顿 → [MOD 冲突与卡顿](./install-mod#mod-conflict)
   - 界面不是中文 → [关于汉化](/getting-started/localization)

</div>

## 快速对照表

| 症状 | 最可能的原因 | 去哪里看 |
| --- | --- | --- |
| 弹窗缺少某个 DLL | 运行库没装全 | [启动崩溃与缺少运行库](./error-with-start-game) |
| DLC 不显示或未生效 | 启动器数据库损坏 | [P社启动器数据库错误](./database-error-with-start-game) |
| 数据库报错反复出现 | 安全软件拦截写入 | [文档目录与权限问题](./documents-folder#allow-write) |
| 启动器打不开 | 启动器残留或损坏 | [P社启动器装不上或白屏](./launcher) |
| MOD 不生效 | `.mod` 文件路径错误 | [安装 MOD](./install-mod#path) |
| 文档路径带 OneDrive | 文档目录被同步 | [OneDrive 接管了文档目录](./documents-folder#onedrive) |
| 用户名是中文，老游戏闪退 | 路径不支持中文 | [用户名或路径包含中文](./documents-folder#non-ascii) |

## 通用排查习惯

- **一次只改一处**。每改一项就重新测试，才知道究竟是哪一步起了作用。
- **先去掉 MOD**。在启动器里新建一个空的播放集启动游戏，能正常运行就说明问题出在 MOD 上。
- **改动前先备份**。删除任何文件前，先备份文档目录中的 `save games` 和 `mod` 文件夹。
- **绕过启动器测试**。直接运行游戏主程序，可以快速判断问题出在启动器还是游戏本身，见 [绕过启动器直接运行游戏](./error-with-start-game#bypass-launcher)。

## 提问前准备

以上都无法解决时，加入 QQ 群 538887146。附上这些信息，能更快得到有效回复：

1. 游戏名称、版本号，是否启用了 MOD。
2. 报错弹窗或异常画面的完整截图。
3. 游戏日志：`文档\Paradox Interactive\<游戏名>\logs\error.log` 和 `crashes` 中最新的文件夹。
4. 启动器问题附上 `%LOCALAPPDATA%\Paradox Interactive\launcher-v2\logs\`。
5. 你已经尝试过哪些方法。

文档中没有覆盖的问题，也欢迎在群里反馈，或在页面底部点击「在 GitHub 上编辑此页」直接补充。
