# 文件位置速查

排查问题时经常要找到某个文件夹。下表中以 `%` 开头的路径可以直接使用：按 <kbd>Win</kbd> + <kbd>R</kbd>，粘贴路径，回车即可打开。

## 游戏目录

即你解压游戏本体的位置，建议放在纯英文路径下，例如 `D:\Games\Hearts of Iron IV`。

```txt
D:\Games\Hearts of Iron IV\
├─ launcher-installer-windows.msi    P 社启动器安装程序，首次运行前安装
├─ dowser.exe                        打开启动器
├─ hoi4.exe                          游戏主程序，可绕过启动器直接运行
└─ dlc\                              DLC 文件
```

十字军之王3 和维多利亚3 的游戏主程序位于 `binaries` 子目录中。

## 用户文档目录

存档、设置、MOD 和启动器数据库都在这里，**重装游戏不会删除它**：

```txt
文档\Paradox Interactive\<游戏名>\
├─ save games\           存档
├─ mod\                  本地 MOD 及其 .mod 描述文件
├─ logs\                 运行日志，含 error.log
├─ crashes\              崩溃记录
├─ pdx_settings.txt      画面等游戏设置（老版本为 settings.txt）
├─ launcher-v2.sqlite    启动器数据库
├─ mods_registry.json    MOD 注册信息
└─ dlc_load.json         启用的 DLC 与 MOD
```

快速打开「文档」：按 <kbd>Win</kbd> + <kbd>R</kbd>，输入 `shell:Personal`。如果路径中带有 `OneDrive`，请看 [OneDrive 接管了文档目录](/troubleshooting/documents-folder#onedrive)。

各游戏在 `Paradox Interactive` 下的文件夹名：

| 游戏 | 文件夹名 |
| --- | --- |
| 钢铁雄心4 | `Hearts of Iron IV` |
| 欧陆风云4 | `Europa Universalis IV` |
| 十字军之王3 | `Crusader Kings III` |
| 维多利亚3 | `Victoria 3` |
| 群星 | `Stellaris` |

## 启动器相关目录

| 用途 | 路径 |
| --- | --- |
| 启动器程序 | `%LOCALAPPDATA%\Programs\Paradox Interactive` |
| 启动器数据与日志 | `%LOCALAPPDATA%\Paradox Interactive\launcher-v2` |
| 启动器缓存 | `%APPDATA%\Paradox Interactive\launcher-v2` |

`AppData` 是隐藏文件夹，直接用上面的 `%` 路径打开最方便。彻底重装启动器时需要清理这几个目录，见 [启动器装不上或白屏](/troubleshooting/launcher#reinstall)。
