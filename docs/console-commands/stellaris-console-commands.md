# Stellaris 控制台指令

## 源 Wiki

- `https://stellaris.paradoxwikis.com/Console_commands`

## 建议直接参考中文WIKI

- 灰机WIKI：`https://qunxing.huijiwiki.com/`

## 控制台打开方法

- 默认可通过 `~` 打开控制台。
- 非铁人模式下可用。
- 使用控制台会禁用成就。

## 使用说明

- 本页优先收录官方 Wiki 已列出、可在控制台直接输入的命令。
- 很多命令支持按 `Tab` 自动补全 ID。
- 许多开关型命令再次输入即可关闭；少数情况下需要读档或重启游戏。
- 部分命令需要先选中星球、舰队、局势或在特定界面中选中目标，否则不会生效。

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
| `resource [数量] [资源ID]` | 增加指定资源 | 例如 `resource 100 consumer_goods` |
| `minor_artifacts [数量]` | 增加稀有文物 | 默认 `500` |
| `menace [数量]` | 增加天灾值 | 默认 `500`，需对应内容包 |
| `imperial_authority [数量]` | 增加帝国权威度 | 默认 `10`，需成为银河皇帝 |
| `astral_threads [数量]` | 增加星界丝缕 | 默认 `500`，需对应内容包 |
| `advanced_logic [数量]` | 增加 Advanced Logic | 默认 `500`，需对应内容包 |
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
| `activate_gateways` | 激活银河中全部星门 |  |
| `activate_relic [遗珍ID]` | 激活遗珍 triumph 效果 |  |
| `add_relic [遗珍ID]` | 获得遗珍 | `all` 可获得全部遗珍 |
| `advance_council_agenda [数量]` | 推进内阁议程进度 | 不写数量时会直接准备就绪 |
| `effect unlock_council_slots = 1` | 解锁一个内阁席位 | 直接输入整条命令 |

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
| `add_anomaly [异常ID]` | 给选中天体添加异常 |  |
| `finish_arc_stage` | 完成当前考古章节 | 需选中正在发掘的天体与科研船 |
| `finish_rift_stage` | 完成当前星界裂隙章节 |  |
| `set_completed_rifts [数量]` | 设置已完成的星界裂隙数量 | 需对应内容包 |
| `branchoffice` | 创建或接管选中世界上的分部 |  |
| `add_to_vivarium` | 将选中太空生物舰队复制到 Vivarium |  |
| `add_specimen [标本ID]` | 添加标本 | `random` 可随机 |
| `spawn_astral_rift [rift ID]` | 生成星界裂隙 | 不填时在当前或随机星系生成 |

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
| `add_subject_xp [目标] [数量]` | 增加特化附庸经验 | 默认 `10`，需对应内容包 |
| `add_spynetwork_value [目标] [数量]` | 增加渗透值 |  |
| `add_first_contact_clues [数量]` | 给当前打开的首次接触增加线索 | 默认 `10` |
| `break_fleet_contract` | 让选中租借舰队回归原主 |  |
| `skills [数量]` | 给玩家招募的全部领袖增加技能等级 | 默认 `1` |
| `random_ruler` | 替换当前帝国统治者 |  |
| `debug_yesmen` | 开关 AI 帝国总是同意玩家提议 |  |
| `debug_nomen` | 开关 AI 帝国总是拒绝玩家提议 |  |
| `create_patron_relation [赞助者ID]` | 与指定虚境赞助者建立联系 | 需对应内容包 |
| `max_patron_relation [赞助者ID]` | 与指定虚境赞助者直接缔结契约 | 需对应内容包 |

## 事件与效果命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `event [事件ID] [目标ID]` | 触发事件 |  |
| `effect ...` | 执行效果脚本 | 例如 `effect add_building = building_fe_dome` |
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
| `effect force_add_civic = [公民性ID]` | 给玩家帝国添加公民性 |  |
| `effect force_remove_civic = [公民性ID]` | 移除玩家帝国公民性 |  |
| `effect remove_modifier = [modifier ID]` | 移除修正 | 选中对象时作用于对象，否则作用于帝国 |
| `effect remove_deposit = [deposit ID]` | 移除资源沉积 / 行星特征 |  |
| `effect destroy_situation = this` | 结束选中局势 |  |
| `effect destroy_fleet = this` | 摧毁选中舰队 |  |
| `effect enrage_behemoth` | 让选中舰队、星港或世界对所有人敌对 6 个月 |  |
| `effect shift_ethic = [伦理ID]` | 将玩家帝国伦理偏向指定伦理 | 选中对象时不会生效 |
| `effect add_awareness = [数值]` | 增加前超光速文明认知度 | 需在外交界面选中目标 |
| `add_psionic_aura_intensity [数值]` | 调整当前星系的灵能光环强度 | 需对应内容包 |

## 建造、科研与战争开关

| 指令 | 作用 | 备注 |
|------|------|------|
| `instant_build` | 开关瞬间建造和升级 | 也会作用于 AI |
| `instant_specialization_conversion` | 开关附庸特化瞬间转换 |  |
| `invincible` | 玩家舰队无敌 |  |
| `survey` | 勘测全部天体 | 需要至少一艘科研船 |
| `finish_terraform` | 完成全部环境改造 |  |
| `complete_first_contact` | 完成选中的第一次接触 |  |
| `complete_focus_task [任务编号]` | 完成 empire focus task |  |
| `complete_focus_tasks` | 完成全部当前 empire focus tasks |  |
| `add_time [days/months/years] [数量]` | 增加时间 | 会影响领袖年龄 |
| `election` | 开始统治者选举 |  |
| `end_senate_session` | 通过 / 否决当前参议会议案 |  |
| `force_senate_vote` | 结束当前 senate recess |  |
| `federation_add_experience [数量]` | 增加联邦经验 | 默认 `100` |
| `federation_add_cohesion [数量]` | 增加联邦凝聚力 | 默认 `200` |
| `federation_add_cohesion_speed [数量]` | 增加联邦月凝聚速度 | 默认 `10` |
| `federation_examine_leader` | 触发联邦继承检查 |  |
| `skip_agreement_cooldowns` | 开关无视附庸协定冷却 |  |
| `skip_federation_cooldowns` | 开关无视联邦法律冷却 |  |
| `skip_galactic_community_cooldowns` | 开关无视银河共同体决议冷却 |  |
| `skip_accord_cooldowns` | 重置契约能力冷却 | 需对应内容包 |
| `skip_calling_cooldowns` | 重置 Calling 替换冷却 | 需对应内容包 |
| `skip_delve_cooldown` | 重置虚境探索冷却 | 仅特定内容包可用 |

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
| `filewatcher` | 开关文件监视器 |  |
| `human_ai` | 开关 Human countries AI |  |
| `info` | 显示渲染信息 |  |
| `lockcamera` | 锁定摄像机 |  |
| `nogui` | 开关 GUI |  |
| `nomouse` | 开关鼠标滚轮 |  |
| `particle_editor` | 打开粒子编辑器 |  |
| `rebuild_sectors` | 重建 sector 边界 |  |
| `reload_galaxy` | 开始新游戏 |  |
| `reload_graphical_map` | 重载图形地图 |  |
| `smooth` | 开关帧平滑 |  |
| `switchlanguage [语言]` | 重载本地化并切换语言 |  |
| `war [进攻国ID] [防守国ID] [战争目标]` | 宣战 |  |
| `window open/close [窗口名]` | 打开 / 关闭 GUI 窗口 |  |
| `wireframe` | 开关强制线框 |  |

## 重大事件 ID

### 改变银河局势

| 事件 ID | 作用 | 备注 |
|------|------|------|
| `galcom.16` | 创建或加入银河共同体 |  |
| `action.99` | 在首都星系建立银河市场 |  |
| `crisis.199` | 开始 Prethoryn 危机 |  |
| `crisis.100` | 开始 Unbidden 危机 |  |
| `crisis.200` | 开始 Contingency 危机 |  |
| `war_in_heaven.100` | 触发天堂之战 |  |
| `distar.11000` | 生成封闭的 L-Cluster |  |
| `distar.13000` | 生成 L-Drake 结局的 L-Cluster | 会同时开启全部 L-Gate |
| `graygoo.1` | L-Cluster：Gray Tempest |  |
| `graygoo.100` | L-Cluster：Dessanu Consonance |  |
| `crisis.110` | 开始 Aberrant 危机 |  |
| `crisis.120` | 开始 Vehement 危机 | 需先有 Unbidden |
| `crisis.4550` | 发射 Star-Eater |  |
| `precursor.98` | 生成 Vultaum 母星系 |  |
| `precursor.598` | 生成 Yuht 母星系 |  |
| `precursor.1098` | 生成 First League 母星系 |  |
| `precursor.1598` | 生成 Irassian 母星系 |  |
| `precursor.2098` | 生成 Cybrex 母星系 |  |

### 解锁飞升路线

| 事件 ID | 作用 |
|------|------|
| `cyber.1505` | 解锁 Cybernetic |
| `synth.1505` | 解锁 Synthetic |
| `bio.170` | 解锁 Purity |
| `bio.175` | 解锁 Cloning |
| `bio.180` | 解锁 Mutation |
| `shroud.20` | 解锁 Psionic |

### 解锁法令

| 事件 ID | 作用 |
|------|------|
| `anomaly.4051` | 解锁 Improved Working Environment |
| `anomaly.4081` | 解锁 Extensive Sensor Searches |
| `anomaly.4105` | 解锁 Improved Energy Initiative |
| `anomaly.4136` | Grants Master's Teachings: The Greater Good |
| `anomaly.4141` | Grants Master's Teachings: Philosophical Mindset |
| `anomaly.4151` | Grants Master's Teachings: Diplomatic Trust |
| `anomaly.416` | Grants Master's Teachings: Warring States |
| `shroud.320` | Animatus |
| `shroud.3210` | Will of Temperance |
| `shroud.3220` | Will of Distraction |
| `shroud.3230` | Will of Endless |
| `shroud.3240` | Will of Rebirth |
| `shroud.3260` | Will of Order |
| `shroud.3270` | Will of Motion |

### 解锁传奇领袖

| 事件 ID | 作用 | 备注 |
|------|------|------|
| `galactic_features.303` | Tuborek | 需选中舰船 |
| `distar.156` | S875.1 Warform | 需选中舰船 |
| `distar.245` | Caretaker AX7-b | 需选中舰船 |
| `ancrel.4036` | Oracle |  |
| `paragon.1` | The Beholder |  |
| `paragon.228` | Astrocreator Azaryn |  |
| `paragon.3115` | Keides, Scion of Vagros |  |
| `leviathans.123` | XuraCorp paragon |  |
| `leviathans.124` | Riggan paragon |  |
| `leviathans.125` | Muutagan paragon |  |
| `leviathans.590` | Curator paragon |  |
| `enclave.710` | Shroud-Touched paragon |  |
| `astral_planes.310` | zadigal |  |
| `astral_planes.6105` | Mercedes Romero |  |
| `crisis.21125` | Nameless Apostate |  |
| `grand_archive.1070` | Ceriz t'Xal |  |
| `grand_archive.1080` | Ruuk Qabruuk |  |
| `grand_archive.8570` | Captain Ness |  |
| `extreme_frontiers.352` | Scru |  |
| `extreme_frontiers.132` | S.I.D.N.I. |  |
| `shroud.12010` | Ganthuata |  |
| `shroud.120` | Koborok'Ra |  |
| `shroud.12030` | Morr |  |
| `shroud.12040` | Kronen the Afflicted |  |
| `shroud.12050` | Zulyn the Listener |  |
| `shroud.12060` | Ouw'ron |  |

## Modifier 脚本命令

| 指令 | 作用 |
|------|------|
| `effect add_modifier = { modifier = fotd_triumviri multiplier = 999 }` | 无限 civic points |
| `effect add_modifier = { modifier = cyber_creed_no_creed_robot_points_modifier multiplier = 999 }` | 无限基因改造点数 |
| `effect add_modifier = { modifier = synthetic_dawn multiplier = 999 }` | 无限机械改造点数 |
| `effect add_modifier = { modifier = subterranean_expansion multiplier = 999 }` | 无限 district slots |
| `effect add_modifier = { modifier = the_eater_of_worlds_blessing multiplier = 999 }` | 无限指挥上限 |
| `effect add_modifier = { modifier = procedural_space_modifier multiplier = 4 }` | 解锁全部 branch office slots |

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
