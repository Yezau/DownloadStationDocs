# 文档目录与权限问题

P 社游戏把存档、设置、MOD 列表和启动器数据库都放在「文档」下的 `Paradox Interactive` 文件夹中。这个目录**读不到或写不进**时，会出现一系列看似无关的问题：

- 启动器数据库报错，删掉以后下次又出现。
- 启动器提示 `We don't have read/write access to the directory with game data`（没有游戏数据目录的读写权限）。
- 设置和存档保存不了，重新打开又恢复原样。
- MOD 在列表里找不到，或提示路径无效。
- 启动或存档时闪退。

## 先确认文档目录在哪

按 <kbd>Win</kbd> + <kbd>R</kbd>，输入 `shell:Personal` 回车，打开的就是系统当前使用的「文档」文件夹。点一下地址栏，看完整路径：

```txt {2,3}
C:\Users\<用户名>\Documents              正常
C:\Users\<用户名>\OneDrive\文档          被 OneDrive 接管，见下文
C:\Users\<用户名>\OneDrive\Documents     被 OneDrive 接管，见下文
```

如果 `<用户名>` 部分是中文，同时请看 [用户名或路径包含中文](#non-ascii)。

## OneDrive 接管了文档目录 {#onedrive}

Windows 11 登录微软账户后，OneDrive 常会默认「备份」桌面、文档和图片，实际效果是把文档目录搬进了 OneDrive。游戏文件夹随之被同步，可能出现文件被占用、只存在于云端、路径变化等情况，启动器和 MOD 都容易因此出错。钢铁雄心4 等游戏的着色器缓存也会被一并上传，占满 OneDrive 空间。

推荐的处理方式是让「文档」回到本地：

1. 点击任务栏右下角的 OneDrive 云朵图标，选择齿轮图标 → **设置**。
2. 进入 <MenuPath path="同步和备份 / 管理备份" />，关闭 **文档**，确认停止备份。
3. 停止备份后，文档目录会恢复为 `C:\Users\<用户名>\Documents`，但**已备份的文件仍留在 OneDrive 中**。把 `OneDrive\文档\Paradox Interactive` 整个文件夹复制回本地的 `Documents` 下。
4. 重新打开启动器。本地 MOD 的 `path` 如果还指向 OneDrive 路径，按 [安装 MOD](./install-mod#path) 改成新路径。

::: tip 不想关闭备份？
可以在玩游戏时暂停 OneDrive 同步（右键云朵图标 → 暂停同步），但这只能临时缓解，更新游戏或 MOD 后仍可能出错。
:::

## 受控文件夹访问与安全软件 {#allow-write}

Windows 安全中心的 **受控文件夹访问**（属于勒索软件防护）默认保护「文档」文件夹，开启后，没有被允许的程序无法写入。P 社启动器和游戏都需要往文档目录写文件，被拦截时就会报错或闪退。

### Windows 安全中心

1. 在开始菜单搜索并打开 **Windows 安全中心**。
2. 进入 <MenuPath path="病毒和威胁防护 / 勒索软件防护 / 管理勒索软件防护" />。
3. 如果「受控文件夹访问」处于开启状态，点击 **通过受控文件夹访问允许应用** → **添加允许的应用**：
   - 选择 **最近阻止的应用**，把列表中的游戏和启动器程序全部允许；
   - 或选择 **浏览所有应用**，手动添加下列程序。
4. 也可以直接关闭「受控文件夹访问」。

需要允许的程序：

| 程序 | 位置 |
| --- | --- |
| `dowser.exe` | 游戏根目录 |
| 游戏主程序，如 `hoi4.exe`、`eu4.exe` | 游戏根目录（CK3、VIC3 在 `binaries` 子目录） |
| `Paradox Launcher.exe` | `%LOCALAPPDATA%\Programs\Paradox Interactive\` 下以 `launcher-v` 开头的最新版本文件夹中 |

Windows 11 也可以在 <MenuPath path="Windows 安全中心 / 病毒和威胁防护 / 保护历史记录" /> 中找到被阻止的记录，展开后选择 **在设备上允许**。

### 第三方安全软件

火绒、360、腾讯电脑管家、卡巴斯基、Avast 等软件也带有类似的「勒索病毒防护」「文档保护」功能：

1. 把整个游戏目录和 `%LOCALAPPDATA%\Programs\Paradox Interactive` 加入 **信任区 / 白名单**。
2. 如果开启了文档保护类功能，同样需要放行上表中的程序。
3. 启动游戏时弹出拦截提示，选择 **允许** 并勾选记住。

::: info 为什么加了白名单还不行
有玩家反馈，只把启动器加入例外列表无效，需要在安全软件弹出「是否允许访问文档文件夹」时手动点允许才解决。如果不确定是不是安全软件的问题，可以先完全退出它测试一次。
:::

## 用户名或路径包含中文 {#non-ascii}

欧陆风云4 等较老的游戏，以及部分 MOD 工具，对含中文或特殊字符的路径支持不好，可能导致闪退、MOD 无法加载、存档失败。

**游戏安装路径含中文**：把游戏整个移动到纯英文路径下，例如 `D:\Games\Europa Universalis IV`，再重新运行 `dowser.exe`。

**Windows 用户名是中文**：文档路径 `C:\Users\<中文用户名>\Documents` 无法简单修改，有两个办法：

1. **最稳妥**：新建一个英文名的 Windows 本地账户，在该账户下玩游戏。
2. **进阶（社区方法）**：让游戏把用户数据存到别的位置。不同游戏和版本的支持程度不一，操作前先备份存档。
   1. 在游戏主程序所在的文件夹中新建文本文件，命名为 `userdir.txt`（注意不要变成 `userdir.txt.txt`）。
   2. 文件内容只写一行目标路径，例如：

      ```txt
      D:\PdxUser\Europa Universalis IV\
      ```

   3. 启动游戏，确认 `D:\PdxUser\Europa Universalis IV\` 下生成了 `logs`、`save games` 等文件夹，说明生效；没有生成则说明当前版本不支持，删除 `userdir.txt` 即可还原。
   4. 生效后，启动器仍会从旧位置读取 MOD 和数据库。可在游戏目录中找到 `launcher-settings.json`，把其中 `gameDataPath` 的值改为同一路径。游戏更新后该文件可能被还原，需要重新修改。

## 参考资料

- [Steam 社区：钢铁雄心4 启动器提示没有游戏数据目录读写权限，允许受控文件夹访问后解决](https://steamcommunity.com/app/394360/discussions/0/592889669725785821)
- [Steam 社区：钢铁雄心4 使用 userdir.txt 更改用户数据位置](https://steamcommunity.com/app/394360/discussions/0/4625854988055288359)
- [Steam 社区：群雄并起4 开发者关于 OneDrive 导致 MOD 无法加载的说明](https://steamcommunity.com/app/1669000/discussions/0/3828666283437576002/?ctp=4)
- [Paradox 论坛：数据库迁移失败与勒索软件防护](https://admin-forum.paradoxplaza.com/forum/threads/database-migration-failure-a-decently-sized-list-of-attempts-to-fix-it.1507226)
- [Paradox 论坛：着色器缓存占满 OneDrive 的讨论](https://admin-forum.paradoxplaza.com/forum/threads/can-we-get-an-option-to-store-shadercache-outside-the-documents-directory.1851023/post-30638434)
