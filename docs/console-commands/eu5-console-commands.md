# Europa Universalis V 控制台指令

## 源 Wiki

- `https://eu5.paradoxwikis.com/Console_commands`

## 控制台打开方法

- 默认可通过 `~` 打开控制台。
- 需要先启用 `debug_mode`。

## 使用说明

- 本页优先收录官方 wiki 已列出的、可直接输入的命令。
- `EU5` wiki 目前仍偏预发布状态，部分命令后续版本可能增删或改名。
- 按 `Tab` 可补全命令与部分参数。

## 基础命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `help [命令名]` | 输出帮助 |  |
| `version` | 输出版本信息 | 也会写入日志 |
| `time` | 输出时间信息 |  |
| `save [文件名]` | 保存游戏 |  |
| `load [文件名]` | 读取存档 |  |
| `observe` / `ob` | 进入观察模式 |  |
| `tag [CountryTag]` | 切换玩家国家 |  |
| `t [国家名前缀]` | 按国家名前缀切换国家 |  |
| `ai [CountryTag]` | 创建或禁用 AI |  |
| `braindeadai [CountryTag]` | 开关无脑 AI |  |
| `event [eventid] [target]` | 触发事件 |  |
| `effect {effect script}` | 执行效果 |  |
| `trigger {trigger script}` | 测试触发器 |  |
| `run {effect file}` | 执行 `/run` 目录中的效果文件 |  |
| `clear` / `clr` | 清空控制台 |  |
| `Camera.Goto` / `goto [location]` | 移动镜头到地点 |  |

## 货币与 Cheat Mode 命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `Manpower` | 增加 Manpower |  |
| `Sailors` | 增加 Sailors |  |
| `cash` | 增加现金 |  |
| `Stability` | 增加 Stability |  |
| `WarExhaustion` | 增加 War Exhaustion |  |
| `Inflation` | 增加 Inflation |  |
| `Prestige` | 增加 Prestige |  |
| `ArmyTradition` | 增加 Army Tradition |  |
| `NavyTradition` | 增加 Navy Tradition |  |
| `GovernmentPower` | 增加 Government Power |  |
| `Karma` | 增加 Karma |  |
| `ReligiousInfluence` | 增加 Religious Influence |  |
| `Purity` | 增加 Purity |  |
| `Honor` | 增加 Honor |  |
| `Doom` | 增加 Doom |  |
| `RitePower` | 增加 RitePower |  |
| `Yanantin` | 增加 Yanantin |  |
| `Righteousness` | 增加 Righteousness |  |
| `Harmony` | 增加 Harmony |  |
| `SelfControl` | 增加 SelfControl |  |
| `YesMan` | 开关 YesMan |  |
| `NoMan` | 开关 NoMan |  |
| `InstantMove` | 开关瞬间移动 |  |
| `InstantSiege` | 开关瞬间围城 |  |
| `FastDiplo` | 开关快速外交处理 |  |
| `InstantWar` | 开关瞬间战争 |  |
| `InstantConstruction` | 开关瞬间建造 |  |
| `InstantCasusBelli` | 开关瞬间宣战理由 |  |
| `InstantMission` | 开关瞬间任务 |  |
| `RemoveFogOfWar` | 开关去除战争迷雾 |  |
| `ByPassRequirements` | 开关无视条件 |  |

## 国家、战争与外交命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `form_union [junior partner]` | 建立共主联邦 |  |
| `change_government` / `changeGov [Government Type]` | 修改政府类型 |  |
| `declarewar [CountryTag]` | 宣战 | 攻击者默认为玩家 |
| `war_on_player [CountryTag]` | 指定国家对玩家宣战 |  |
| `annex [CountryTag]` | 玩家吞并指定国家 |  |
| `make_subject [subject_type] [countrytag]` | 使国家成为附属国 |  |
| `create_pu [CountryTag]` | 建立共主联邦 |  |
| `cb` / `add_casus_belli` / `casus_belli [CountryTag]` | 添加宣战理由 |  |
| `spy` / `spies [CountryTag] [数量]` | 增加间谍网络 |  |
| `favor` / `favors [CountryTag] [数量]` | 增加 favors |  |
| `trust [CountryTag] [数量]` | 增加 trust |  |
| `opinion [CountryTag] [数量]` | 增加目标国家对玩家好感 |  |
| `imperial_authority [数量]` | 增加 HRE 帝国权威 |  |
| `start_annex [country-tag]` | 开始 annexation |  |
| `lose_to [country-tag]` | 让玩家输给目标国家 |  |
| `lend [CountryTag] [amount] [interest] [months]` | 向目标国家放贷 |  |

## 地图、地点、人口与建筑命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `discover` / `ti [location key/all]` | 发现地点 |  |
| `discover_area` / `da [area key/all]` | 发现区域 |  |
| `change_devastation` / `chg_deva [location] [amount]` | 修改破坏度 | 范围 `0.0` 到 `1.0` |
| `change_control` / `chg_ctrl [location] [amount]` | 修改控制度 | 范围 `0.0` 到 `1.0` |
| `change_winter` / `chg_winter [location] [amount]` | 修改冬季等级 | 等级 `0` 到 `3` |
| `weather [location] [front/cyclone/tornado]` | 创建天气 |  |
| `colonize [location]` | 创建殖民地 |  |
| `colonize_and_finish [location]` | 创建并立即完成殖民地 |  |
| `finish_colony [location]` | 完成殖民地 |  |
| `finish_all_colonies` | 完成全部殖民地 |  |
| `population [location]` | 修改人口 |  |
| `finish_constructions [location]` | 完成地点全部建造 |  |
| `building` / `add_building [building_type] [location]` | 添加建筑 |  |
| `build_everything [location/id/country/tag/region/all]` | 在目标范围内建造全部可建内容 | 别名 `be` |
| `occupy_location [location_tag]` | 占领地点 |  |
| `occupy_country [countrytag]` | 占领国家 |  |
| `conquer_country [countrytag]` | 征服国家 |  |
| `conquer_location [location_tag]` | 征服地点 | 命令名为 `conquer` |

## 科技、制度与其他游戏命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `research [advance]` | 研究指定 advance |  |
| `research_all` | 研究全部 advances |  |
| `add_research` / `addresearch [数量]` | 增加研究进度 |  |
| `add_institution_progress` / `institution [institution_tag] [location_tag] [amount]` | 增加制度进度 |  |
| `embrace_all` | 接受全部活跃制度 |  |
| `change_date [year]` | 修改日期 |  |
| `age` / `change_age [age_tag]` | 修改时代 |  |
| `disaster` / `activate_disaster [disaster]` | 激活灾难 |  |
| `situation` / `activate_situation [situation]` | 激活 situation |  |
| `monthly_situation [situation]` | 推进 situation 一个月 |  |
| `tick_day [number of days]` | 推进指定天数 |  |
| `finish_current_religious_focus` | 完成当前宗教焦点进度 |  |

## 调试、编辑器与底层工具

| 指令 | 作用 | 备注 |
|------|------|------|
| `script_docs` / `script_documentation` | 输出脚本文档 |  |
| `explorer` | 打开对象浏览器 |  |
| `portrait_editor` / `pe` | 打开肖像编辑器 |  |
| `map_editor` | 开关地图编辑器 |  |
| `setup_editor` | 开关 setup editor |  |
| `pop_editor` | 开关 pop editor |  |
| `war_viewer` | 开关 war viewer |  |
| `ai_currency_viewer` | 开关 AI currency viewer |  |
| `tweak` | 打开 Tweaker GUI |  |
| `save_game_analyzer` | 打开存档分析器 |  |
| `textureviewer` | 打开纹理查看器 |  |
| `shader_editor` | 打开着色器编辑器 |  |
| `log_viewer` | 打开日志查看器 |  |
| `memory_stats` | 开关内存统计 |  |
| `net_stats` | 开关网络统计 |  |
| `3dstats` | 开关 3D 统计 |  |
| `CrashReporter.SimulateCrash` | 模拟崩溃 |  |
| `debug_mode` | 开关 debug mode |  |
| `release_mode` | 开关 release mode |  |
| `helplog` | 输出全部控制台命令到日志 |  |
| `error` | 显示日志错误 |  |
| `switchlanguage [language name]` | 重载本地化并切换语言 |  |

## 相关页面

- [控制台命令索引](./index.md)
