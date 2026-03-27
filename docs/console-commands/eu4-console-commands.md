# Europa Universalis IV 控制台指令

## 源 Wiki

- `https://eu4.paradoxwikis.com/Console_commands`

## 控制台打开方法

- 默认可通过 `~` 打开控制台。
- 非铁人模式下可用。

## 使用说明

- 本页优先收录官方 Wiki 已列出的直接输入命令。
- 按 `Tab` 可自动补全命令前缀与部分参数。
- 很多开关命令再次输入即可关闭；部分旧命令来自较早版本，使用前建议先用 `help [命令]` 复核。

## 常用资源与国家命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `cash [数量] [国家tag]` | 增加金钱 | 默认 `500` |
| `manpower [数量] [国家tag]` | 增加人力 | 以 `100 × 数量` 计 |
| `sailors [数量] [国家tag]` | 增加水手 | 默认 `500` |
| `adm [数量] [国家tag]` | 增加行政点 | 默认 `999` |
| `dip [数量] [国家tag]` | 增加外交点 | 默认 `999` |
| `mil [数量] [国家tag]` | 增加军事点 | 默认 `999` |
| `powerpoints [数量] [国家tag]` | 增加全部君主点 |  |
| `prestige [数量] [国家tag]` | 修改威望 | 默认 `+6` |
| `legitimacy [数量] [国家tag]` | 设置合法性 |  |
| `stability [数量] [国家tag]` | 修改稳定度 |  |
| `army_tradition [数量] [国家tag]` | 增加陆军传统 | 默认 `50` |
| `navy_tradition [数量] [国家tag]` | 增加海军传统 |  |
| `inflation [数量] [国家tag]` | 修改通胀 |  |
| `corrupt [数量] [国家tag]` | 设置腐败 |  |
| `absolutism [数量] [国家tag]` | 增加专制度 |  |
| `splendor [数量] [国家tag]` | 增加时代辉煌度 | 默认 `100` |
| `innovativeness [数量] [国家tag]` | 增加创新度 | 默认 `100` |
| `government_power [数量]` | 增加政府能力点 | 不写时直接加满 |

## 国家、外交与战争命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `tag [国家tag]` | 切换控制国家 |  |
| `yesman` | AI 外交总是同意 |  |
| `ai [国家tag]` | 开关 AI |  |
| `annex [目标tag] [执行tag]` | 吞并目标国家 | 不加核心 |
| `annex_all` | 以当前国家吞并全世界 |  |
| `integrate [目标tag] [执行tag]` | 整合目标国家 | 会加核心 |
| `vassalize [目标tag] [执行tag]` | 让目标成为附庸 |  |
| `form_union [目标tag] [执行tag]` | 建立共主联邦 |  |
| `make_subject [tag] [宗主tag] [附庸类型]` | 使国家成为附庸 |  |
| `create_march [目标tag] [执行tag]` | 让目标成为边区 |  |
| `remove_march [目标tag] [执行tag]` | 移除边区身份 |  |
| `declare_war [进攻tag] [防守tag] [是否召盟友]` | 宣战 | 无 CB |
| `add_opinion [执行tag] [目标tag]` | 增加好感 |  |
| `trust [目标tag] [数量]` | 增加信任 |  |
| `spynetwork [目标tag] [数量]` | 增加间谍网 |  |
| `remove_rival [国家tag]` | 移除宿敌 |  |
| `add_cb [CB ID] [目标tag] [执行tag]` | 添加宣战理由 |  |
| `remove_cb [CB ID] [目标tag] [执行tag]` | 移除宣战理由 |  |
| `favors [目标tag] [数量]` | 增加人情 | 需对应 DLC |

## 省份、文化、宗教与核心命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `own [省份ID] [国家tag]` | 修改所有者 |  |
| `own_core [省份ID] [国家tag]` | 修改所有者并添加核心 |  |
| `control [省份ID] [国家tag]` | 修改控制者 |  |
| `add_core [省份ID] [国家tag]` | 添加核心 |  |
| `remove_core [省份ID] [国家tag]` | 移除核心 |  |
| `add_claim [省份ID] [国家tag]` | 添加宣称 |  |
| `remove_claim [省份ID] [国家tag]` | 移除宣称 |  |
| `add_permanent_claim [省份ID] [国家tag]` | 添加永久宣称 |  |
| `culture [省份ID]` | 把省份文化改为主文化 |  |
| `change_religion [省份ID/国家tag] [宗教]` | 修改宗教 |  |
| `change_culture_court [对象] [文化]` | 修改宫廷成员文化 |  |
| `change_religion_court [对象] [宗教]` | 修改宫廷成员宗教 |  |
| `set_base_tax [省份ID] [数值]` | 设置基础税收 |  |
| `set_base_production [省份ID] [数值]` | 设置基础生产 |  |
| `set_base_manpower [省份ID] [数值]` | 设置基础人力 |  |
| `add_devastation [省份ID] [数值]` | 增加破坏度 |  |
| `add_prosperity [省份ID] [数值]` | 增加州繁荣度 |  |
| `add_local_autonomy [省份ID] [数值]` | 增加地方自治度 |  |
| `center_of_trade [等级] [省份ID]` | 创建或调整贸易中心等级 | 命令别名 `cot` |
| `institution [省份ID] [制度ID] [数量]` | 给省份增加制度接受度 | 不写数量默认 `100` |
| `embrace [省份ID] [制度ID]` | 在省份拥抱制度 | 不写时可拥抱全部 |

## 地图、战争迷雾与观察命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `fow [省份ID]` | 开关战争迷雾 |  |
| `ti` / `debug_ti` | 开关未知地形 |  |
| `debug_mode` | 显示省份 ID、国家 tag 等调试信息 |  |
| `observe` / `spectator` | 进入观察者模式 |  |
| `mapmode [类型]` | 切换地图模式 |  |
| `gamespeed [0-5]` | 设置游戏速度 | `0` 为暂停 |

## 事件、测试与工具命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `event [事件ID] [目标tag] [选项ID]` | 执行事件 |  |
| `testevent [事件ID] [角色ID]` | 测试事件 |  |
| `help [命令名]` | 输出帮助 |  |
| `helplog` | 输出全部控制台命令到 `game.log` |  |
| `findcommands [字符串]` | 搜索控制台命令 |  |
| `reload [文件名]` | 重载 GUI 或 lua 文件 |  |
| `reloadinterface` | 重载整个界面 |  |
| `reloadfx [参数]` | 重载着色器 |  |
| `debug_info` | 开关调试信息 |  |
| `debug_nogui` | 开关 GUI |  |
| `collision` / `debug_collision` | 开关碰撞显示 |  |
| `rendertype` | 输出渲染后端 |  |
| `savegame` | 立即保存游戏 |  |
| `run` | 运行效果文件 |  |
| `run_commands` | 运行命令列表文件 |  |
| `clear` | 清空控制台 |  |
| `date [yyyy.mm.dd]` | 修改当前日期 |  |
| `reloadloc` | 重载本地化 |  |

## 其他常见命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `assimilate [省份] [tag]` | 修改所有权、核心、文化与宗教 |  |
| `add_idea_group [理念组key] [国家tag]` | 添加理念组 |  |
| `technology [数量]` | 提升全部科技等级 | 命令名为 `tech` |
| `reformprogress [数量] [tag]` | 增加政府改革进度 | 默认 `500` |
| `winwars` | 给当前国家全部战争最大战争分数 |  |
| `fast_colonize` | 开关快速殖民 | 也会影响 AI |
| `god` | 开关 god mode | 战斗首日后会直接胜利 |

## 相关页面

- [控制台命令索引](./index.md)
