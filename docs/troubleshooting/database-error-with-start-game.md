# 启动器数据库错误

DLC 和 DLC 补丁都已装齐，进入启动器后 DLC 却显示未生效，同时提示数据库报错（英文界面常见为 `Database migration failed`，并要求删除或重命名 `launcher-v2.sqlite`）。

![数据库错误截图](https://img.alloy.eu.org/1751550307-6314970d40634023-073fa66b-ba9d-4f26-89dd-7952b3ae4489.png)

## 原因

P 社启动器把 DLC、MOD、播放集等状态记录在游戏文档目录下的一个本地数据库文件 `launcher-v2.sqlite` 里。出现以下情况时，启动器就读不出或写不进这个文件：

- 文件损坏，或者是由不同版本的启动器写入的，结构对不上。
- 安全软件的「勒索软件防护」或 Windows 的「受控文件夹访问」阻止了启动器写入文档目录。
- 文档目录被 OneDrive 同步，文件被占用或只保存在云端。

前两种最常见。**判断方法**：删掉数据库后第一次能正常打开，下次启动又报同样的错，基本可以确定是写入被拦截，直接看 [方法四](#allow-write)。

## 解决办法

从轻到重依次尝试，每一步做完都重新打开启动器验证。

### 方法一：删除启动器数据库

1. 完全关闭启动器（检查任务栏右下角托盘，右键退出）。
2. 打开游戏的文档目录（[不知道在哪？](/getting-started/file-locations)），删除或重命名下面高亮的文件：

   ```txt {3}
   文档\Paradox Interactive\Hearts of Iron IV\
   ├─ save games\
   ├─ launcher-v2.sqlite        删除或改名为 launcher-v2.sqlite.bak
   ├─ mods_registry.json
   └─ dlc_load.json
   ```

3. 重新运行游戏目录下的 `dowser.exe`，启动器会自动生成新的数据库。

::: tip
重建数据库后，启动器里的播放集和 MOD 启用状态会被清空，需要重新勾选，MOD 文件本身不会丢失。
:::

### 方法二：一并清理 MOD 注册信息 {#clean-mod-registry}

方法一无效，或者问题和 MOD 列表有关时，在方法一的基础上再删除 `mods_registry.json`（如存在）：

```txt {3,4}
文档\Paradox Interactive\Hearts of Iron IV\
├─ mod\                     保留，里面是你的 MOD
├─ launcher-v2.sqlite       删除
├─ mods_registry.json       删除
└─ save games\              保留
```

### 方法三：清空整个游戏文档目录

1. **先备份** `save games` 文件夹（存档）和 `mod` 文件夹（本地 MOD）。
2. 删除整个游戏文档文件夹，例如 `文档\Paradox Interactive\Hearts of Iron IV`，其他游戏同理（EU4、CK3、VIC3 等）。
3. 重新启动游戏，启动器会生成全新的目录，再把存档和 MOD 放回原位。

::: danger 删除前确认已备份
游戏文档目录里包含存档、MOD、游戏设置和自定义配置，删除后无法恢复。
:::

### 方法四：允许启动器写入文档目录 {#allow-write}

如果删掉数据库后问题反复出现，说明启动器的写入被拦截了：

- Windows 安全中心：<MenuPath path="病毒和威胁防护 / 勒索软件防护 / 受控文件夹访问" />，关闭它，或者把启动器和游戏加入允许列表。
- 第三方安全软件（火绒、360、腾讯电脑管家、卡巴斯基、Avast 等）：把游戏目录加入信任区，并在拦截弹窗出现时选择允许。
- 文档在 OneDrive 中：暂停同步，或取消备份「文档」文件夹。

详细步骤见 [文档目录与权限问题](./documents-folder)。

### 方法五：彻底重装启动器

以上都无效时，按 [启动器装不上或白屏](./launcher#reinstall) 中的步骤卸载启动器并清理残留，再重新安装。

## 仍然无法解决？

1. 确认游戏文件完整，没有在解压时报错或漏文件。
2. 收集启动器日志：`%LOCALAPPDATA%\Paradox Interactive\launcher-v2\logs\`。
3. 加入 QQ 群 538887146，附上报错截图和日志。

## 参考资料

- [Paradox 论坛：Database migration failure 的多种处理尝试](https://admin-forum.paradoxplaza.com/forum/threads/database-migration-failure-a-decently-sized-list-of-attempts-to-fix-it.1507226)
- [Paradox 论坛：Launcher database error, verify if you can access the file launcher-v2.sqlite](https://admin-forum.paradoxplaza.com/forum/threads/launcher-database-error-verify-if-you-can-access-the-file-launcher-v2-sqlite.1620246/)
- [Steam 社区：钢铁雄心4 启动器数据库报错讨论](https://steamcommunity.com/app/394360/discussions/0/4739473745771271276)
- [Steam 社区：群星 数据库报错反复出现的案例](https://steamcommunity.com/app/281990/discussions/0/3194742149939497457)
- [Paradox 支持：MOD 或播放集没有出现在启动器中](https://support.paradoxplaza.com/hc/en-us/articles/360020841079-My-Mods-or-Playsets-are-not-showing-up-in-the-Launcher)
