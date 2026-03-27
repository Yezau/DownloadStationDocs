# Stellaris 控制台指令

## 源 Wiki

- `https://stellaris.paradoxwikis.com/Console_commands`

## 控制台打开方法

- 默认可通过 `~` 打开控制台。
- 非铁人模式下可用。
- 使用控制台会禁用成就。

## ID 相关命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `debugtooltip` | 显示调试信息 | 可查看物种、领袖、帝国、舰船、人口等 ID |

## 常用资源与国家命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `cash [数量]` | 增加能量币 | 默认 `500` |
| `alloys [数量]` | 增加合金 | 默认 `500` |
| `minerals [数量]` | 增加矿物 | 默认 `500` |
| `food [数量]` | 增加食物 | 默认 `500` |
| `influence [数量]` | 增加影响力 | 默认 `500` |
| `unity [数量]` | 增加凝聚力 | 默认 `500` |
| `physics [数量]` | 增加物理研究点 | 默认 `500` |
| `society [数量]` | 增加社会研究点 | 默认 `500` |
| `engineering [数量]` | 增加工学研究点 | 默认 `500` |
| `resource [数量] [资源ID]` | 增加指定资源 | 例如 `resource consumer_goods 100` |
| `max_resources` | 填满全部资源储量 |  |
| `ai` | 开关 AI |  |
| `observe` | 进入观察者模式 |  |
| `play [帝国ID]` | 切换玩家控制目标 |  |
| `communications` | 与全部帝国、飞地和虚境建立联络 |  |
| `contact` | 与全部帝国开始初接触 |  |
| `intel` | 获得整张银河视野 |  |

## 科技、传统与政策命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `finish_research` | 完成全部当前研究与特殊项目 |  |
| `finish_special_projects` | 完成全部特殊项目 |  |
| `research_technology [科技ID]` | 立即研究指定科技 |  |
| `research_all_technologies [布尔] [重复科技次数]` | 研究全部非重复科技 | 可附带危机/太空生物科技与重复科技次数 |
| `techupdate` | 刷新当前科技备选项 |  |
| `activate_tradition [传统ID]` | 激活指定传统 |  |
| `activate_all_traditions` | 激活全部传统 |  |
| `activate_ascension_perk [飞升ID]` | 激活指定飞升 |  |
| `unlock_edicts` | 解锁全部法令 |  |
| `free_policies` | 开关政策与物种权利无条件修改 |  |
| `free_government` | 开关政府无条件修改 |  |

## 星球、舰队与对象命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `own [星球ID]` | 获取选中舰队、星港、星球的所有权；或获取指定星球 |  |
| `annex [目标帝国ID]` | 获取目标帝国全部星球和星港 |  |
| `force_integrate [目标帝国ID]` | 强制整合目标帝国 |  |
| `colonize [殖民者人口ID]` | 开始殖民选中的天体 |  |
| `create_megastructure [巨构ID]` | 在当前星系创建巨构 |  |
| `create_navy [比例]` | 按海军容量比例生成舰队 | `1` 表示 `100%` |
| `add_ship [设计名]` | 生成一支包含指定舰船的舰队 |  |
| `damage [数值]` | 让选中舰队受到船体伤害 |  |
| `planet_size [数值]` | 修改选中天体规模 |  |
| `planet_class [天体类别ID]` | 修改选中天体类型 |  |
| `planet_ascension_tier [数值]` | 修改行星飞升等级 |  |
| `planet_happiness [数值]` | 给选中星球添加幸福度修正 | 默认 `100` |
| `grow_pops` | 运行选中星球的人口增长/组装/衰减更新 |  |
| `add_pops [物种ID] [数量]` | 在选中天体上增加人口 | 不写物种 ID 时可列出全部人口 ID |

## 领袖、特质与外交命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `hire_all_leaders` | 雇佣全部领袖池领袖 |  |
| `update_leader_pool` | 刷新领袖池 |  |
| `add_trait_leader [领袖ID] [特质ID]` | 给领袖添加特质 |  |
| `remove_trait_leader [领袖ID] [特质ID或索引]` | 移除领袖特质 |  |
| `add_trait_species [物种ID] [特质ID]` | 给物种添加特质 |  |
| `remove_trait_species [物种ID] [特质ID]` | 移除物种特质 |  |
| `add_opinion [来源帝国] [目标帝国] [数量]` | 增加帝国好感 | 默认 `40` |
| `add_trust [来源帝国] [目标帝国] [数量]` | 增加信任 | 默认 `10` |
| `add_intel [目标帝国] [数量]` | 增加情报 | 默认 `10` |
| `add_loyalty [目标] [数量]` | 增加忠诚 | 默认 `10` |
| `add_spynetwork_value [目标] [数量]` | 增加渗透值 |  |
| `break_fleet_contract` | 让选中租借舰队回归原主 |  |

## 事件与效果命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `event [事件ID] [目标ID]` | 触发事件 |  |
| `effect ...` | 执行效果脚本 | 例如 `effect add_building = building_fe_dome` |
| `effect add_awareness = [数值]` | 给前超光速文明增加认知度 | 需在外交界面选中目标 |
| `effect add_building = [建筑ID]` | 在选中天体主区域添加建筑 |  |
| `effect add_deposit = [deposit ID]` | 给选中天体添加资源沉积/行星特征 |  |
| `effect add_planet_devastation = [数值]` | 增加选中天体破坏度 | 负值可减少 |
| `effect add_situation_progress = [数值]` | 增加选中局势进度 |  |
| `effect country_add_ethic = [伦理ID]` | 给玩家帝国添加伦理 |  |
| `effect country_remove_ethic = [伦理ID]` | 移除玩家帝国伦理 |  |
| `effect create_archaeological_site = [遗址ID]` | 在选中天体创建考古遗址 | `random` 可随机 |
| `effect destroy_colony` | 清除选中殖民地 |  |
| `effect remove_megastructure = this` | 移除选中巨构 |  |
| `effect set_origin = [起源ID]` | 修改玩家帝国起源 |  |

## 建造、科研与战争开关

| 指令 | 作用 | 备注 |
|------|------|------|
| `instant_build` | 开关瞬间建造和升级 | 也会作用于 AI |
| `instant_specialization_conversion` | 开关附庸特化瞬间转换 |  |
| `invincible` | 玩家舰队无敌 |  |
| `survey` | 勘测全部天体 | 需要至少一艘科研船 |
| `finish_terraform` | 完成全部环境改造 |  |
| `complete_first_contact` | 完成选中的第一次接触 |  |

## 调试与测试命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `help [命令名]` | 显示帮助 |  |
| `reload [文件名]` | 重载资源 |  |
| `run [文件名]` | 运行命令文件 | 文件需放在文档目录 Stellaris 根目录 |
| `trigger [脚本文件]` | 测试触发器脚本 |  |
| `trigger_docs` | 输出触发器与效果文档 |  |
| `script_profiler` | 开始/结束脚本性能分析 |  |
| `guibounds` | 显示悬停 UI 元素的文件位置 |  |
| `error` | 显示日志错误 |  |
| `crash` | 使游戏崩溃 |  |
| `reloadfx [参数]` | 重载着色器 |  |
| `rendertype` | 输出当前渲染后端 |  |
| `3dstats` | 开关 3D 统计信息 |  |
| `achievement_status` | 输出成就状态 |  |
| `check_save` | 检查存档读写一致性 |  |
| `debug_dumpevents` | 输出触发过的事件 |  |
| `debug_stats` | 显示性能统计 |  |
| `debug_traits_view` | 打开特质列表 |  |
| `debuglines` | 开关调试线 |  |
| `fullscreen` | 开关全屏 |  |
| `goto [x] [y]` | 摄像机移动到坐标 |  |
| `time` | 输出本地系统时间 |  |
| `version` | 复制游戏版本到剪贴板 |  |

## TweakerGUI 命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `tweakergui instant_move` | 开关瞬间移动 |  |
| `tweakergui instant_survey` | 开关瞬间勘测 |  |
| `tweakergui instant_colony` | 开关瞬间殖民 |  |
| `tweakergui instant_anomaly_research` | 开关异常现象瞬间研究 |  |
| `tweakergui ignore_truce` | 开关无视停战 |  |
| `tweakergui draw.hyperlanes` | 开关超空间航道显示 |  |
| `tweakergui draw.stars` | 开关恒星显示 |  |
| `tweakergui draw.names` | 开关名称显示 |  |
| `tweakergui draw.borders` | 开关边境和图标显示 |  |
| `tweakergui alerts.showall` | 开关全部 UI 警报显示 |  |

## 相关页面

- [控制台命令索引](./index.md)
