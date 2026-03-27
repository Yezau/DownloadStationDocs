# 钢铁雄心4 控制台指令

## 源 Wiki

- `https://hoi4.paradoxwikis.com/Console_commands`

## 控制台打开方法

- 默认可通过 `~` 打开控制台。
- 仅非铁人模式可用。

## 使用说明

- 使用控制台会禁用当前存档的成就。
- 很多指令是开关型，再输入一次可关闭。
- 部分效果不会立即完全恢复，必要时需要重新读档或重启游戏。
- 部分指令会影响 AI。
- 不同版本与 DLC 会新增、移除或修改指令。
- MOD 会额外加入自定义指令与新的势力标签。

## ID 获取

### 调试模式

- 输入 `tdebug` 开关调试信息。
- 悬停在地图州、省份上，可查看州 ID、省份 ID、所属势力标签。
- 悬停在焦点树、理念、科技等内容上，可查看内部 ID。

### 本地化文件

- 可在游戏目录下的本地化文件中搜索显示文本，反查内部 ID。
- 常用路径：`Hearts of Iron IV/localisation/english/`

## 语法说明

- `command(alias)`：括号内表示别名，例如 `instantconstruction(ic)`。
- `[参数]`：可选参数。
- `<参数>`：必填参数。
- 某些 `eval_effect`、`eval_trigger` 指令需要直接输入脚本代码块。

## 常用指令

### 基础与调试

| 指令 | 作用 | 备注 |
|------|------|------|
| `help [command name]` | 显示全部指令或指定指令帮助 |  |
| `version` | 显示当前游戏版本 |  |
| `time` | 显示当前时间信息 |  |
| `tdebug` | 开关调试信息 | 查势力标签、州 ID、省份 ID 很常用 |
| `debug` | 开关调试模式 | Wiki 说明其作用不完全等同于启动参数中的 debug 模式 |

### 势力切换与观察

| 指令 | 作用 | 备注 |
|------|------|------|
| `tag <势力标签>` | 切换到指定势力 | 例如：`tag GER` |
| `observe` / `spectator` | 进入观察者模式 | 会影响 AI 表现 |

### 资源与数值

| 指令 | 作用 | 备注 |
|------|------|------|
| `pp` / `political_power [数值]` | 增加政治点 | 未填时默认 `100` |
| `manpower [数值]` | 增加人力 | 未填时默认 `100000` |
| `fuel [数值]` | 增加燃油 | 受储量上限影响 |
| `xp [数值]` | 增加陆军、海军、空军经验 | 一天只能使用一次 |
| `cp [数值]` | 增加指挥点 | 上限 100 |
| `st [数值]` | 增加稳定度 | 上限 100 |
| `add_war_support` / `ws [数值]` | 增加战争支持度 | 上限 100 |
| `threat [数值]` | 增减当前势力制造的世界紧张度 | 数值异常大时会导致异常结果，谨慎使用 |

### 装备与军队

| 指令 | 作用 | 备注 |
|------|------|------|
| `add_equipment` / `ae <数量> <装备名>` | 添加装备 | 只能添加已研发装备；不支持海军装备，`convoy_1` 例外 |
| `add_latest_equipment` / `ale <数量>` | 添加最新型号装备 |  |
| `instanttraining` / `it` | 瞬间训练师团和舰船 | 会影响 AI |
| `gain_xp <数值>` | 为当前选中的将领/海军将领增加经验 | 等级有上限 |
| `allowtraits` | 允许自由分配将领特质 |  |
| `teleport` / `tp` | 开启传送工具 | 选中单位后右键传送 |
| `moveunit <单位ID> <省份ID>` | 把指定单位移动到指定省份 |  |
| `deleteallunits` / `delall <势力标签>` | 删除指定势力全部陆军与舰队 |  |
| `deleteallunitsbut` / `delallbut <势力标签>` | 删除指定势力外的全部陆军与舰队 |  |
| `nuke [数量]` | 添加核弹 |  |

### 建设、科研与焦点树

| 指令 | 作用 | 备注 |
|------|------|------|
| `instantconstruction` / `ic` | 开关瞬间建设 | 会影响 AI；舰船也会瞬间建造 |
| `research <科研槽ID>` | 完成指定科研槽中的科技 |  |
| `research all` | 研发全部科技 |  |
| `research_on_icon_click` / `roic` | 点击科技图标立即完成研发 | 可无视前置或互斥限制 |
| `toggle_hidden_techs` / `tht` | 显示/隐藏科技 |  |
| `Focus.AutoComplete` / `fa` | 焦点树立即完成 | 会影响 AI |
| `Focus.NoChecks` | 无视焦点树需求 | 会影响 AI |
| `Focus.IgnorePrerequisites` | 无视焦点树前置 | 可直接点中段或后段焦点 |
| `freefocuses` / `ff` | 自由启用任意焦点 | 等同于上面三项的组合效果 |
| `Decision.FastRemove` | 让决议计时缩短到 1 天 |  |
| `Decision.NoChecks` | 无视决议条件与花费 | 会影响 AI |
| `finish_decision <决议ID>` 或 `finish_decision all` | 立即完成限时任务/决议 |  |
| `instant_prepare` | 瞬间准备海军入侵 | 仅在 debug 模式下可用 |

### 外交与战争

| 指令 | 作用 | 备注 |
|------|------|------|
| `allowdiplo` / `adiplo` / `nocb` | 无视规则使用外交行动 | 可直接宣战等 |
| `instant_wargoal` | 立即正当化战争目标 |  |
| `ai_accept` | AI 接受所有外交提议 |  |
| `whitepeace` / `wp <势力标签>` | 与指定势力白和 | Wiki 为 country tags，文中统一写作势力标签 |
| `annex <势力标签>` / `annex all` | 吞并指定势力或全部势力 |  |
| `puppet <宗主势力标签> <目标势力标签>` | 让目标势力变为傀儡 |  |
| `add_opinion <势力标签>` | 双向增加 100 好感 | 数值为硬编码 |
| `reduce_opinion <势力标签>` | 降低关系 |  |
| `add_autonomy <目标势力标签> <数值>` | 改变自治度 |  |
| `civilwar <意识形态> <目标势力标签>` | 触发内战 | 常见意识形态：`fascism`、`communism`、`democratic`、`neutrality` |
| `add_party_popularity <意识形态> <数值>` | 增加意识形态支持度 | 原版也支持简写：`d`、`f`、`n`、`c` |
| `set_ruling_party <意识形态>` | 设置执政意识形态 | 同样支持 `d`、`f`、`n`、`c` |

### 州、省份与占领

| 指令 | 作用 | 备注 |
|------|------|------|
| `setowner <势力标签>` | 设置当前选中州的拥有者 | 现在需要先点选州，旧式州 ID 用法已不适用 |
| `setcontroller <势力标签> <省份ID>` | 设置省份控制者 |  |
| `add_core <州ID>` | 添加核心州 |  |
| `remove_core <州ID> <势力标签>` | 移除核心州 | Wiki 标注此命令不可用 |
| `resistance [数值]` | 提高当前选中省份的抵抗度 |  |
| `compliance [数值]` | 提高当前选中省份的顺从度 |  |
| `occupationpaint` / `op [势力标签]` | 占领涂色工具 | 带标签时会占领其拥有但未控制的土地 |

### 间谍与情报

| 指令 | 作用 | 备注 |
|------|------|------|
| `Agency.Instant` | 间谍机构相关全部瞬间完成 | 等同于多个情报相关瞬时命令的组合 |
| `Agency.InstantSlotUnlock` | 移除特工招募等待时间 |  |
| `Agency.Autocomplete` | 立即完成间谍机构升级 |  |
| `Operation.instant` | 立即完成全部行动 | 会影响 AI |
| `prevent_operative_detection` | 己方特工不会被发现 |  |
| `force_operative_detection` | 己方特工一定会被发现 |  |
| `add_intel <目标势力标签> ...` | 设置情报值 | 可设置 `civilian`、`army`、`navy`、`airforce` |

### AI 与显示

| 指令 | 作用 | 备注 |
|------|------|------|
| `ai [势力标签...]` | 开关 AI | 不带参数时全局切换；带参数时可作为例外名单 |
| `aiview` | 显示 AI 调试信息 |  |
| `human_ai` | 让 AI 接管当前玩家势力，同时玩家仍保留控制 | 会生成 AI 日志 |
| `ai_invasion` | 开关 AI 海军入侵 |  |
| `fow` / `debug_fow [省份ID]` | 开关战争迷雾 | 可指定局部省份 |
| `province_ids` / `pid` | 在地图上显示省份 ID |  |
| `goto_province <省份ID>` | 摄像机移动到指定省份 |  |
| `goto_state <州ID>` | 摄像机移动到指定州 |  |

## 其他官方 Wiki 已列出的命令

> 以下命令同样出现在官方 Wiki 中，但使用频率较低、偏机制研究、偏 DLC 或偏特定调试场景，因此集中列在这里。

### 理念、法案与势力外观

| 指令 | 作用 | 备注 |
|------|------|------|
| `add_ideas <理念ID>` | 添加理念 / 国家精神 |  |
| `remove_ideas <理念ID>` | 移除理念 / 国家精神 |  |
| `allowideas` | 允许选择不可用理念 | 会覆盖可见性与可用性触发，但不覆盖 allowed 触发 |
| `set_cosmetic_tag <势力标签> <外观标签>` | 修改势力名称与旗帜外观 | 例如把某势力切成另一套外观标签 |
| `add_legitimacy <势力标签> <数值>` | 为指定势力增加合法性 |  |
| `FI <数值>` | 增加 faction initiative | Wiki 以 `FI 5` 为示例 |

### 额外资源与经济机制

| 指令 | 作用 | 备注 |
|------|------|------|
| `energy_ratio` / `er <比率>` | 设置无煤消耗工厂的能量比率 | 数值范围为 `0` 到 `1` |
| `mastery <数值> [学说路线]` | 增加学说 mastery | 可全局增加，也可指定路线 |
| `add_mines` | 将选定海域中的己方水雷拉满 |  |

### 额外单位与环境命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `acclimization <气候类型> <百分比>` | 设置选中师的环境适应度 | `cold_climate` / `hot_climate` 互相会重置 |
| `add_latest_equipment <数量> <装备变体名>` | 给最新装备的指定命名变体 | Wiki 给出了按自定义名称添加变体的用法 |

### 势力关系、关注与释放

| 指令 | 作用 | 备注 |
|------|------|------|
| `release <势力标签>` | 释放可释放势力 | 例如 `release slv` |
| `add_interest <势力标签>` | 把指定势力加入关注列表 |  |
| `remove_interest <势力标签>` | 从关注列表移除指定势力 |  |
| `random_seed` | 重新随机化当前种子 | 会影响 AI 的决策走向 |

### 特殊项目与科学家扩展

| 指令 | 作用 | 备注 |
|------|------|------|
| `sp_add_mastermind` | 添加拥有全部专精且满技能的通用科学家 |  |
| `sp_prototype_reward` | 在项目中触发指定原型奖励 | 偏开发 / 测试用途 |

### 额外调试 / 统计 / 图形命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `debug_air_vs_land` / `dbg_cas` | 开关空对地战斗调试模式 |  |
| `debug_off_front_snap` / `dbg_fsnap` | 开关进攻前线吸附调试 |  |
| `flagsoutput [路径]` | 从内存中创建纹理图集文件 |  |
| `cityreload` | 重载城市 |  |
| `profilelog` | 将性能分析信息输出到 `time.log` |  |
| `weather` | 开关天气模拟 |  |
| `provtooltipdebug` | 省份提示调试信息 | Wiki 中与 `tdebug` 关联 |
| `3dstats` | 开关 3D 统计信息 |  |
| `filewatcher` | 开关文件监视器 |  |

### 音频、界面与窗口命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `window open <窗口名>` / `window close <窗口名>` | 打开 / 关闭指定 GUI 窗口 |  |
| `browser <url>` | 打开浏览器窗口 |  |
| `browser_base_url <url>` | 设置浏览器基础 URL |  |
| `PostEffectVolumes.Default <name>` | 切换默认后处理配置 | 偏图形调试 |

### 存档、同步与测试

| 指令 | 作用 | 备注 |
|------|------|------|
| `savecheck` | 生成并校验两次测试存档 | 用于测试读写一致性 |
| `requestgamestate` | 向主机请求游戏状态 | 多用于联机调试 |
| `SetRandomCount [数值]` | 设置随机计数 |  |
| `PrintSynchStuff` | 打印随机计数与随机种子 |  |
| `resign` | 退出当前游戏 |  |
| `pause_in_hours` | 在指定小时数后暂停游戏 |  |

### 仅开发者 / 低实用价值命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `morehumans [数值]` | Adds more humans | 偏内部测试 |
| `tag_color` | 测试设置势力颜色 | 偏开发 |
| `hsv` | RGB 转 HSV | 偏底层工具 |

## MOD 与脚本调试常用指令

### 事件、效果、触发器

| 指令 | 作用 | 备注 |
|------|------|------|
| `event <事件ID> [目标势力标签]` | 执行事件 | 若事件有触发条件，控制台会显示哪些条件满足 |
| `testevent <事件ID> [角色ID]` | 测试事件但不正式触发 |  |
| `poll` | 轮询可触发事件 |  |
| `effect` / `e <脚本效果名>` | 执行脚本效果 | 在当前选中作用域内执行 |
| `eval_effect <效果代码块>` | 直接执行一段效果脚本 |  |
| `trigger <脚本触发器名>` | 检查脚本触发器结果 |  |
| `eval_trigger <触发器代码块>` | 检查一段触发器脚本真假 | 在当前作用域中判定 |
| `trigger_docs` / `effect_docs` / `scripting_docs` / `docs` | 输出触发器、效果、变量文档到日志 |  |

### 变量、旗标与列表

| 指令 | 作用 | 备注 |
|------|------|------|
| `set_var <变量名> <值>` | 设置变量值 |  |
| `get_var <变量名>` | 显示变量值 |  |
| `list_vars` | 列出当前作用域变量 |  |
| `set_country_flag <旗标名>` | 为当前玩家势力添加旗标 | Wiki 说明不能可靠地跨势力直接设置 |
| `set_global_flag <旗标名>` | 设置全局旗标 |  |
| `list_flags` | 列出当前作用域旗标 | 未选中对象时默认查看全局旗标 |
| `list_hidden_focuses` | 列出隐藏焦点 |  |
| `show_focuses` | 显示隐藏焦点 |  |

### 重载与热更新

| 指令 | 作用 | 备注 |
|------|------|------|
| `reload <type>` | 重载指定类型文件 | 例如：`reload loc`、`reload focus` |
| `reloadoob <势力标签>` | 重载战斗序列 |  |
| `reloadinterface` | 重载整个界面 |  |
| `reloadtechnologies` | 重载科技数据库 |  |
| `updateequipments` | 更新装备数据库 |  |
| `updatesubunits` | 更新子单位数据库 |  |
| `update_loc <本地化标签>` | 更新本地化标签文件 |  |
| `reloadweather [随机种子]` | 重载并重新生成天气 |  |
| `reloadfx <参数>` | 重载着色器 |  |

### GUI、日志与调试工具

| 指令 | 作用 | 备注 |
|------|------|------|
| `guibounds` / `gui` | 显示 GUI 边界调试 | 可帮助定位界面元素与贴图资源 |
| `imgui` | 控制 ImGui 调试界面 | `imgui show` 可列出子命令 |
| `error` | 打开错误日志文件 |  |
| `helplog` | 把全部控制台指令输出到 `game.log` |  |
| `profilelog` | 输出性能分析信息到 `time.log` |  |
| `run` | 运行指定命令文件 | 可用于批量调试 |

### 阵营与外交脚本操作

| 指令 | 作用 | 备注 |
|------|------|------|
| `eval_effect <势力标签> = { create_faction = "阵营名" }` | 创建阵营 | 该势力会成为阵营领袖 |
| `eval_effect <势力标签> = { dismantle_faction = yes }` | 解散阵营 |  |
| `eval_effect <势力标签> = { add_to_faction = <势力标签> }` | 让某势力加入阵营 | 第二个标签加入第一个标签所在阵营 |
| `eval_effect <势力标签> = { remove_from_faction = <势力标签> }` | 让某势力退出阵营 |  |
| `eval_effect <势力标签> = { set_faction_name = "阵营名" }` | 重命名阵营 |  |

## DLC / 新机制相关指令

### MIO 与国际市场

| 指令 | 作用 | 备注 |
|------|------|------|
| `addfunds` | 为全部 MIO 增加资金 | 默认每个 MIO 增加 `100` |
| `addTaskCapacity [数值]` | 为全部 MIO 增加任务容量 | 也可指定某个 MIO ID |
| `addSize [数值]` | 为全部 MIO 增加特质点 | 也可指定某个 MIO ID |
| `add_cic_bank [数值]` | 为玩家在国际市场增加经济产能结余 |  |
| `InternationalMarket.AddSubsidyForTags <产能> <装备> <势力标签>` | 添加国际市场补贴 |  |

### 特殊项目与科学家

| 指令 | 作用 | 备注 |
|------|------|------|
| `sp_breakthrough` / `sp_br` | 为设施增加特殊项目突破点 | 可指定专精方向 |
| `sp_fast` | 跳过原型阶段并推进迭代阶段 |  |
| `sp_instant` | 立即完成当前特殊项目 |  |
| `sp_available` | 解锁/锁定未满足科研前置的特殊项目 |  |
| `sp_unlock_all` | 所有特殊项目始终可见且可用 |  |
| `sp_research_all` / `sp_ra` | 研发全部特殊项目 | 如无科学家会自动创建 |
| `sp_prototype_reward` | 触发指定原型奖励 |  |
| `sp_add_scientist [等级] [专精]` | 添加通用科学家 |  |
| `sp_add_mastermind` | 添加全专精满级科学家 |  |
| `sp_set_selected_scientist_level <等级>` | 设置已选科学家等级 | 需要打开设施界面并选中对应科学家 |
| `sp_add_selected_scientist_trait <特质>` | 为已选科学家增加特质 |  |

## 开发者与底层调试指令

> 以下内容主要用于开发、排错、图形调试或机制研究。部分命令作用有限，或仅开发环境更有价值。

### 图形、界面与显示

| 指令 | 作用 | 备注 |
|------|------|------|
| `debug_smooth` | 开关帧平滑 | 某些机器上可显著提升速度 |
| `debug_assert` | 开关断言 |  |
| `debug_nomouse` | 开关鼠标滚轮 |  |
| `debug_terrain` | 开关地形显示 |  |
| `debug_cities` | 开关城市绘制模式 |  |
| `debug_water` | 开关水体显示 |  |
| `debug_fronts` | 开关前线调试显示 |  |
| `debug_borders` | 开关边界显示 |  |
| `debug_trees` | 开关树木显示 |  |
| `debug_rivers` | 开关河流显示 |  |
| `debug_postfx` | 开关后处理 |  |
| `debug_sky` | 开关天空显示 |  |
| `debug_bloom` | 开关 Bloom |  |
| `debug_tooltip` | 开关提示框 |  |
| `debug_nogui` | 开关 GUI |  |
| `debug_volume <变化值>` | 修改音乐音量 |  |
| `debug_lockcamera` | 开关锁定摄像机 |  |
| `debug_lines` | 开关调试线框 |  |
| `debug_entities` | 开关实体调试 |  |
| `debug_wireframe` | 开关强制线框模式 |  |
| `collision` / `debug_collision` | 显示法线、包围盒、碰撞 |  |
| `mapmode <类型>` | 切换地图模式 |  |
| `mapnames` | 开关地图名称显示 |  |
| `fronts` | 开关外国前线可见性 |  |
| `traderoutes` | 开关贸易路线显示 |  |
| `nomapicons` | 开关地图标 |  |
| `nopausetext` | 开关暂停横幅 | 截图时有用 |

### 开发与错误分析

| 指令 | 作用 | 备注 |
|------|------|------|
| `debug_commands` | 把指令统计输出到日志 |  |
| `debug_events` | 开始统计事件 |  |
| `debug_dumpevents` | 把事件数据输出到日志 |  |
| `debug_diploactions` | 开始统计外交动作 |  |
| `debug_dumpdiploactions` | 把外交动作数据输出到日志 |  |
| `debug_show_event_ID` | 显示事件 ID |  |
| `debug_info` | 开关调试信息 |  |
| `debug_particle` | 开关粒子调试信息 |  |
| `debug_ai_budget [势力标签]` | 显示 AI 预算数据 |  |
| `debug_textures` | 把纹理信息写入调试日志 |  |
| `debug_texture` | 绘制纹理调试效果 |  |
| `ai_front_dump` / `aifrontdump` | 把 AI 前线数据写入日志 | 需要先选中单位 |
| `ai_pp_log` | 把 AI 政治点使用写入日志 |  |
| `ai_idea_desire_log` | 把 AI 对理念需求写入日志 | 仅当前势力 |
| `ai_force_template` | 强制 AI 只把陆军经验用在编制设计 |  |
| `ai_force_equipment` | 强制 AI 只把陆军经验用在装备设计 |  |
| `ai_front_id` | 获取已选集团军前线调试 ID |  |

### 其他开发者命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `savegame` | 立即保存游戏 |  |
| `savecheck` | 测试存档读写一致性 |  |
| `requestgamestate` | 向主机请求游戏状态 |  |
| `IP` | 显示 IP |  |
| `fullscreen` | 开关全屏 |  |
| `nextsong` | 切换下一首音乐 |  |
| `nudge` | 进入 nudge 工具 |  |
| `rendertype` | 报告当前渲染后端 |  |
| `tweakergui` | 打开 tweaker GUI |  |
| `particle_editor` | 打开粒子编辑器 |  |
| `reloadsupply` / `relsup` | 重新初始化补给系统 |  |
| `analyzetheatres` / `anth` | 分析战区错误 |  |
| `aircombat` / `airc ...` | 在指定地点生成空战 | 仅开发者用途明显 |
| `massconquer` / `massc` | 大规模征服工具 | Wiki 标注仅开发者 |
| `debug_crash` / `crash` | 让游戏崩溃 | 仅用于测试 |
| `debug_achievements_clear` | 清除全部成就与用户统计 | 仅开发者 |
| `gbreload` | 重载渐变边界 | Wiki 标注仅开发者 |
| `oos` | Out of Sync 调试 | Wiki 标注仅开发者 |
| `toggle_silhouette_portraits` | 开关剪影头像 | Wiki 标注仅开发者 |

## 已知失效或应谨慎看待的指令

| 指令 | 说明 |
|------|------|
| `debug_nuking` | 官方 Wiki 标注：自 `1.15.1` 起已不存在 |
| `winwars` | 官方 Wiki 标注：自 `1.9.1` 起已不存在 |
| `remove_core` | 官方 Wiki 标注：命令无效 |
| `night` | 官方 Wiki 说明其效果不可靠 |
| `airealism` | 官方 Wiki 说明其用途很低 |

## 相关页面

- [控制台命令索引](./index.md)
- [入门指南](../getting-started/index.md)
- [问题排查](../troubleshooting/index.md)
