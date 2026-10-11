# 启动器装不上或白屏

P 社游戏通过 **Paradox Launcher（P 社启动器）** 管理 DLC 和 MOD。游戏根目录里的 `launcher-installer-windows.msi` 负责安装启动器，`dowser.exe` 负责打开它，首次安装流程见 [启动游戏](/getting-started/start-game)。

## 安装程序报错或没有反应

常见表现：双击 `launcher-installer-windows.msi` 后没有反应，或者提示 `2503`、`2502`、「此 Windows Installer 软件包有问题」等错误。

<WinDialog title="Windows Installer">安装程序在安装此程序包时遇到意外错误。这可能表示此程序包有问题。错误代码是 2503。</WinDialog>

1. **结束残留的安装进程**。按 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> 打开任务管理器，结束所有 `Windows Installer (msiexec.exe)` 和 `Paradox Launcher` 进程，再重新安装。上一次没装完的安装程序会挡住新的安装。
2. **以管理员权限安装**。`.msi` 文件的右键菜单里没有「以管理员身份运行」，需要用管理员终端调用：

   ```powershell
   # 以管理员身份打开终端后执行，路径换成你的游戏目录
   msiexec /i "D:\Games\Hearts of Iron IV\launcher-installer-windows.msi"
   ```

3. **检查游戏路径**。游戏目录尽量放在纯英文、不含特殊符号的路径下，例如 `D:\Games\Hearts of Iron IV`。
4. 仍然失败时，按下面的 [彻底重装](#reinstall) 清理旧版本残留后再装。

## 启动器白屏、黑屏或一直转圈

1. 在任务管理器中结束所有 `Paradox Launcher` 进程，再重新运行 `dowser.exe`。
2. 暂时退出安全软件，或者把游戏目录和启动器加入信任区，参见 [文档目录与权限问题](./documents-folder)。
3. 删除启动器数据库 `launcher-v2.sqlite`，参见 [启动器数据库错误](./database-error-with-start-game)。
4. 以上无效时执行 [彻底重装](#reinstall)。

如果只是想先玩上游戏，可以 [绕过启动器直接运行游戏](./error-with-start-game#bypass-launcher)。

## 彻底重装启动器 {#reinstall}

只在应用列表里卸载并不会删掉启动器的缓存和数据，残留的旧文件会让新装的启动器继续出错。

1. 打开 <MenuPath path="设置 / 应用 / 已安装的应用" />，找到 **Paradox Launcher v2** 并卸载。
2. 按 <kbd>Win</kbd> + <kbd>R</kbd>，逐个粘贴下面的路径并回车，把打开的文件夹删除（不存在就跳过）：

   ```txt
   %LOCALAPPDATA%\Programs\Paradox Interactive
   %LOCALAPPDATA%\Paradox Interactive
   %APPDATA%\Paradox Interactive\launcher-v2
   ```

3. 重启电脑。
4. 回到游戏根目录，重新运行 `launcher-installer-windows.msi`，安装完成后运行 `dowser.exe`。

::: info 这些文件夹是什么
`Programs\Paradox Interactive` 是启动器程序本体；`Local\Paradox Interactive` 存放启动器数据和日志；`Roaming` 下的 `launcher-v2` 是缓存。它们都不包含游戏存档，存档在「文档」目录中，删除是安全的。
:::

## 收集启动器日志

向群里求助时，请附上启动器日志：

```txt
%LOCALAPPDATA%\Paradox Interactive\launcher-v2\logs\
```

用 <kbd>Win</kbd> + <kbd>R</kbd> 粘贴上面的路径即可打开，把里面最新的几个文件打包发送。

## 参考资料

- [Paradox 论坛：如何完全删除 Paradox Launcher](https://admin-forum.paradoxplaza.com/forum/threads/how-to-fully-delete-paradox-launcher.1435069)
- [Paradox 论坛：无法安装 Paradox Launcher v2](https://admin-forum.paradoxplaza.com/forum/threads/unable-to-install-paradox-launcher-v2.1628326)
- [Paradox 论坛：Launcher v2 cannot be installed](https://admin-forum.paradoxplaza.com/forum/threads/launcher-v2-cannot-be-installed.1563518)
- [Paradox 论坛：Paradox launcher keep loading](https://admin-forum.paradoxplaza.com/forum/threads/paradox-launcher-keep-loading.1697644)
