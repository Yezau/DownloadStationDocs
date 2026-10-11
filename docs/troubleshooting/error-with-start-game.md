# 启动崩溃与缺少运行库

双击游戏后弹出错误窗口，或者一闪而过直接退出，绝大多数是因为电脑缺少游戏依赖的**运行库**（Visual C++、DirectX）。先看弹窗里写了什么，再对号入座。

![游戏崩溃错误截图](https://img.alloy.eu.org/1751550242-da5b099314c4db21-a2fbf71d-d23b-48a8-b3e2-c680cd6c33a4.png)

## 先对号入座

| 弹窗里出现的内容 | 原因 | 处理 |
| --- | --- | --- |
| `MSVCP140.dll`、`VCRUNTIME140.dll`、`VCRUNTIME140_1.dll`、`MSVCP140_1.dll` | 缺少 VC++ 2015–2022 运行库 | [安装 VC++ 运行库](#vcredist) |
| `MSVCR100.dll`、`MSVCR110.dll`、`MSVCR120.dll` | 缺少旧版 VC++（2010 / 2012 / 2013） | [安装 VC++ 运行库](#vcredist) |
| `d3dx9_43.dll`、`xinput1_3.dll`、`D3DCompiler_43.dll`、`XAPOFX1_5.dll` | 缺少 DirectX 9.0c 扩展组件 | [修复 DirectX](#directx) |
| 应用程序无法正常启动 `(0xc000007b)` | 运行库缺失、损坏，或 32 / 64 位混用 | [0xc000007b](#0xc000007b) |
| 没有弹窗，黑屏、卡加载或直接退出 | 画面设置、显卡驱动、覆盖层软件 | [黑屏与无提示闪退](#black-screen) |

::: warning 不要单独下载 DLL
「xxx.dll 免费下载」一类网站提供的单个 DLL，版本和位数往往对不上，还可能夹带恶意程序。缺哪个 DLL，就安装它所属的完整运行库。
:::

## 安装 VC++ 运行库 {#vcredist}

<WinDialog title="hoi4.exe - 系统错误">由于找不到 MSVCP140.dll，无法继续执行代码。重新安装程序可能会解决此问题。</WinDialog>

1. 在下载站下载 **运行库合集**（包含 VC++ 2005–2022 各版本），一次装齐。
   也可以从微软官方单独下载 VC++ 2015–2022：[x64 版](https://aka.ms/vs/17/release/vc_redist.x64.exe)、[x86 版](https://aka.ms/vs/17/release/vc_redist.x86.exe)。
2. **x64 和 x86 两个版本都要装**，即使系统是 64 位。游戏的部分组件和启动器是 32 位程序。
3. 安装程序提示「已安装另一个版本」时，选择 **修复**。
4. 全部装完后 **重启电脑**，再启动游戏。

## 修复 DirectX {#directx}

<WinDialog title="eu4.exe - 系统错误">由于找不到 d3dx9_43.dll，无法继续执行代码。重新安装程序可能会解决此问题。</WinDialog>

Windows 10 / 11 自带 DirectX 12，但**不包含**老游戏依赖的 DirectX 9.0c 扩展组件（`d3dx9_*.dll`、`xinput1_3.dll` 等），需要另外补装。欧陆风云4 这类较老的游戏最常遇到。

1. 在下载站下载 **DirectX Repair**，右键 **以管理员身份运行**，点击「检测并修复」，等待完成。
2. 也可以使用微软官方的 [DirectX 最终用户运行时 Web 安装程序](https://www.microsoft.com/zh-cn/download/details.aspx?id=35)。
3. 修复完成后重启电脑。

## 0xc000007b {#0xc000007b}

<WinDialog title="hoi4.exe - 应用程序错误">应用程序无法正常启动(0xc000007b)。请单击“确定”关闭应用程序。</WinDialog>

这个代码表示程序加载到了**位数不对或已损坏**的 DLL，常见于运行库只装了一半，或者有人手动往游戏目录、`System32` 里复制过 DLL。按顺序处理：

1. [安装 VC++ 运行库](#vcredist)，x64 和 x86 都装，已安装的选「修复」。
2. [修复 DirectX](#directx)。
3. 检查游戏根目录里有没有自己放进去的 `msvcp*.dll`、`vcruntime*.dll`、`d3dx9*.dll`，有就删掉（游戏原本自带的不要动，不确定时先移到别处备份）。
4. 仍然报错时执行下面的 [系统文件修复](#sfc)。

## 修复系统文件 {#sfc}

运行库都装了还是报错，可能是 Windows 自身的系统文件损坏。

1. 按 <kbd>Win</kbd> 键搜索「终端」或「cmd」，右键选择 **以管理员身份运行**。
2. 依次执行下面两条命令，每条都要等进度走完：

   ```powershell
   sfc /scannow
   DISM /Online /Cleanup-Image /RestoreHealth
   ```

3. 完成后重启电脑，再重新安装一次运行库。

## 黑屏、卡加载与无提示闪退 {#black-screen}

没有任何弹窗，但游戏黑屏、卡在加载界面或者直接退出，按下面的顺序逐项排查。

### 1. 重置画面设置

分辨率、刷新率或全屏模式与显示器不匹配时，最常见的表现就是黑屏。

1. 打开游戏的文档目录 `文档\Paradox Interactive\<游戏名>\`（[不知道在哪？](/getting-started/file-locations)）。
2. 找到 `pdx_settings.txt`（较新版本）或 `settings.txt`（较旧版本），改名为 `pdx_settings.txt.bak`。
3. 重新启动游戏，游戏会按默认设置生成新文件。
4. 仍然黑屏时，在启动器的游戏设置里把显示模式改为 **窗口** 或 **无边框窗口** 再试。

### 2. 更新显卡驱动

到显卡厂商官网（NVIDIA、AMD、Intel）下载最新驱动并安装。不要只依赖 Windows 更新自动装的驱动，它通常比较旧。

### 3. 笔记本：让游戏使用独立显卡

双显卡笔记本默认可能用核显运行游戏，导致崩溃或黑屏。

- Windows 11：<MenuPath path="设置 / 系统 / 屏幕 / 显示卡" />
- Windows 10：<MenuPath path="设置 / 系统 / 显示 / 图形设置" />

点击「浏览」，选中游戏程序（如 `hoi4.exe`），在「选项」中设为 **高性能**，保存后重启游戏。

### 4. 关闭覆盖层和安全软件

帧数显示、录屏、加速器悬浮窗等会注入游戏画面的软件，可能导致启动时崩溃，测试时先全部退出。安全软件拦截文件读写同样会引起闪退，处理方法见 [文档目录与权限问题](./documents-folder)。

### 5. 绕过启动器直接运行游戏 {#bypass-launcher}

用来判断问题出在启动器还是游戏本身：

| 游戏 | 程序位置（相对游戏根目录） |
| --- | --- |
| 钢铁雄心4 | `hoi4.exe` |
| 欧陆风云4 | `eu4.exe` |
| 群星 | `stellaris.exe` |
| 十字军之王3 | `binaries\ck3.exe` |
| 维多利亚3 | `binaries\victoria3.exe` |

- 直接运行能进游戏：问题在启动器，见 [P社启动器装不上或白屏](./launcher)。
- 直接运行也崩溃：问题在游戏或系统环境，继续查看下面的崩溃日志。

## 查看崩溃日志 {#logs}

游戏崩溃后会在文档目录里留下记录，求助时附上它们能大大缩短排查时间：

```txt
文档\Paradox Interactive\Hearts of Iron IV\
├─ crashes\          每次崩溃生成一个以时间命名的文件夹
└─ logs\
   ├─ error.log      运行中的报错
   ├─ system.log     硬件与驱动信息
   └─ game.log       游戏运行记录
```

不同游戏的文件名略有差异。把 `crashes` 里**最新**的文件夹和 `logs\error.log` 一起打包即可。

## 仍然无法解决？

加入 QQ 群 538887146，提问时请一并提供：

1. 游戏名称和版本号，是否安装了 MOD。
2. 报错弹窗的完整截图。
3. 上面提到的崩溃日志。
4. 你已经尝试过的步骤。

## 参考资料

- [Microsoft：最新受支持的 Visual C++ 可再发行程序包](https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist)
- [Microsoft：DirectX 最终用户运行时 Web 安装程序](https://www.microsoft.com/zh-cn/download/details.aspx?id=35)
- [Epic Games 帮助中心：修复 VCRUNTIME140.dll 缺失错误](https://www.epicgames.com/help/en-US/epic-games-store-c5719341124379/launcher-support-c5719357217435/how-do-i-fix-the-vcruntime140-dll-is-missing-or-vcomp110-dll-was-not-found-error-a5720252258587)
- [Paradox 支持：游戏崩溃后在哪里找日志](https://support.paradoxplaza.com/hc/en-us/articles/360003470154-My-game-crashed-where-can-I-find-the-logs)
- [Paradox 论坛：游戏卡在标题加载界面](https://admin-forum.paradoxplaza.com/forum/threads/game-stuck-on-title-loading-screen.1568284)
