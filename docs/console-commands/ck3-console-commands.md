# Crusader Kings III 控制台指令

## 源 Wiki

- `https://ck3.paradoxwikis.com/Console_commands`

## 控制台打开方法

- 默认可通过 `~` 打开控制台。
- 需要先启用 `debug_mode`。

## 使用说明

- 本页优先收录官方 Wiki 已列出、可直接输入的控制台命令。
- 很多命令可按 `Tab` 补全参数、ID、特质或头衔键。
- 很多开关型命令再次输入即可关闭；少数情况下需要读档或重启。

## ID 与调试信息

| 指令 | 作用 | 备注 |
|------|------|------|
| `charinfo` | 显示角色调试信息 | 可查看角色 ID 等信息 |

## 常用角色与资源命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `gold [数量]` | 增加金币 | 默认 `100` |
| `add_prestige [数量]` | 增加威望 | 默认 `100` |
| `add_piety [数量]` | 增加虔诚 | 默认 `100` |
| `add_piety_no_experience [数量]` | 增加虔诚但不提高虔敬等级 | 默认 `100` |
| `dynasty_prestige [数量] [宗族ID]` | 增加宗族威望 | 默认 `100` |
| `add_influence [数量]` | 增加 influence | 默认 `100` |
| `change_treasury [数量]` | 增加 treasury | 负值可减少 |
| `change_provisions [数量]` | 增加 provisions | 负值可减少 |
| `add_merit [数量]` | 增加 merit | 默认 `100` |
| `barter_goods [数量]` | 增加 barter goods | 默认 `500` |
| `add_dread [数量] [角色ID]` | 增加恐惧值 | 负值可减少 |
| `set_dread [数量] [角色ID]` | 设置恐惧值 |  |
| `add_stress [数量] [角色ID]` | 增加压力 | 负值可减少 |
| `set_stress [数量] [角色ID]` | 设置压力 |  |
| `age [数量] [角色ID]` | 改变年龄 | 负值可减龄 |
| `kill [角色ID]` | 杀死角色 | 不写则默认为玩家角色 |
| `pregnancy [母亲ID] [父亲ID]` | 使角色怀孕 |  |

## 头衔、文化、信仰与法律命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `add_claim [头衔ID] [角色ID]` | 添加宣称 | 不写角色 ID 时默认玩家角色 |
| `give_title [头衔ID] [角色ID]` | 给予头衔 |  |
| `add_title_law [头衔ID] [法律ID]` | 给头衔添加继承法 |  |
| `clear_title_laws [头衔ID]` | 清除头衔继承法 |  |
| `set_culture [文化ID] [角色ID]` | 修改文化 |  |
| `change_culture [伯爵领ID] [文化ID]` | 修改伯爵领文化 |  |
| `set_faith [信仰ID] [角色ID]` | 修改信仰 | 信仰领袖无效 |
| `add_doctrine [教义ID] [信仰ID]` | 给信仰添加教义 |  |
| `remove_doctrine [教义ID] [信仰ID]` | 移除信仰教义 |  |
| `change_fervor [数量] [信仰ID]` | 增减狂热度 | 默认 `10` |
| `add_realm_law [法律ID] [角色ID]` | 通过领地法律 |  |
| `add_realm_law_skip_effects [法律ID] [角色ID]` | 添加领地法律但跳过效果 |  |

## 特质、生活方式与技能命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `add_trait [特质ID] [角色ID]` | 添加特质 |  |
| `remove_trait [特质ID] [角色ID]` | 移除特质 |  |
| `clear_traits [角色ID]` | 清空全部特质 |  |
| `add_perk [perk ID] [角色ID]` | 添加生活方式天赋 |  |
| `gain_all_perks [角色ID]` | 获取全部生活方式天赋 |  |
| `add_lifestyle_xp_all [数量] [角色ID]` | 增加全部生活方式经验 | 默认 `100` |
| `add_lifestyle_xp diplomacy_lifestyle [数量] [角色ID]` | 增加外交生活方式经验 | 默认 `100` |
| `add_lifestyle_xp martial_lifestyle [数量] [角色ID]` | 增加军事生活方式经验 | 默认 `100` |
| `add_lifestyle_xp stewardship_lifestyle [数量] [角色ID]` | 增加管理生活方式经验 | 默认 `100` |
| `add_lifestyle_xp intrigue_lifestyle [数量] [角色ID]` | 增加谋略生活方式经验 | 默认 `100` |
| `add_lifestyle_xp learning_lifestyle [数量] [角色ID]` | 增加学识生活方式经验 | 默认 `100` |
| `set_focus [重心ID] [角色ID]` | 设置生活方式重心 |  |
| `change_diplomacy [数量] [角色ID]` | 改变外交能力 |  |
| `change_martial [数量] [角色ID]` | 改变军事能力 |  |
| `change_stewardship [数量] [角色ID]` | 改变管理能力 |  |
| `change_intrigue [数量] [角色ID]` | 改变谋略能力 |  |
| `change_learning [数量] [角色ID]` | 改变学识能力 |  |
| `change_prowess [数量] [角色ID]` | 改变勇武能力 |  |
| `set_diplomacy [数量] [角色ID]` | 设置外交能力 |  |
| `set_martial [数量] [角色ID]` | 设置军事能力 |  |
| `set_stewardship [数量] [角色ID]` | 设置管理能力 |  |
| `set_intrigue [数量] [角色ID]` | 设置谋略能力 |  |
| `set_learning [数量] [角色ID]` | 设置学识能力 |  |
| `set_prowess [数量] [角色ID]` | 设置勇武能力 |  |
| `set_nick [昵称ID] [角色ID]` | 设置昵称 |  |
| `remove_nick [角色ID]` | 移除昵称 |  |
| `set_sexuality [取向ID] [角色ID]` | 修改性取向 |  |

## 关系、阴谋与政体命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `add_relation [关系ID] [角色ID]` | 添加关系 |  |
| `remove_relation [关系ID] [角色ID]` | 移除关系 |  |
| `add_secret [秘密ID] [角色ID]` | 添加秘密 |  |
| `complete_schemes [角色ID]` | 完成全部阴谋 |  |
| `end_schemes` | 放弃针对玩家的全部阴谋 |  |
| `know_schemes` | 揭示全部针对玩家的阴谋 |  |
| `change_house_unity_stage [等级名]` | 设置家族团结等级 |  |
| `add_house_unity_value [数量]` | 增减家族团结值 |  |
| `start_diarchy [角色ID]` | 开始共治 |  |
| `end_diarchy [角色ID]` | 结束共治 |  |
| `abort_travel_plan [角色ID]` | 取消当前旅行/活动计划 | 不写则默认玩家角色 |
| `skip_activity_phase [角色ID]` | 直接进入下一活动阶段 | 不写则默认玩家角色 |
| `yesmen` | AI 总是接受提议 | 再输入一次可关闭 |
| `yesmen_instant` | AI 立刻接受提议 | 再输入一次可关闭 |
| `nomen` | AI 总是拒绝提议 | 再输入一次可关闭 |
| `guaranteed_scheme_success` | 阴谋总是成功 | 再输入一次可关闭 |
| `guaranteed_scheme_secrecy_success` | 阴谋总是保密 | 再输入一次可关闭 |
| `guaranteed_scheme_failure` | 阴谋总是失败 | 再输入一次可关闭 |
| `guaranteed_scheme_secrecy_failure` | 阴谋总是不保密 | 再输入一次可关闭 |

## 军队、建造与地图命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `add_maa [兵种ID] [角色ID]` | 添加兵士军团 |  |
| `instabuild` | 开关瞬间建造和兵士补员 |  |
| `instamove` | 开关军队高速移动 | 也影响 AI |
| `instant_birth` | 开关怀孕仅持续一天 |  |
| `instant_culture_reformation` | 开关传统瞬间改革 |  |
| `instant_responses` | 开关角色立即响应玩家行动 |  |
| `instasiege` | 开关瞬间围城 |  |
| `fow` | 开关战争迷雾 |  |
| `play [角色ID]` | 切换玩家控制角色 |  |
| `observe` | 进入观察者模式 |  |
| `ai.disable [角色ID]` | 禁用 AI | 不写角色 ID 时可作用于全部角色 |
| `ai.enable [角色ID]` | 启用 AI | 不写角色 ID 时可作用于全部角色 |
| `set_is_ai [角色ID]` | 让 AI 控制指定角色 |  |
| `set_is_player [角色ID]` | 取消 AI 控制指定角色 |  |
| `bypass_requirements` | 无视大多数前置条件 | 再输入一次可关闭 |

## 科技、时代与事件命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `discover_all_eras [角色ID]` | 为文化解锁全部时代与创新 |  |
| `discover_era [时代ID]` | 解锁指定时代及其创新 |  |
| `discover_fascination [角色ID]` | 解锁当前迷思 |  |
| `discover_innovation [创新ID] [角色ID]` | 解锁指定创新 |  |
| `join_era [时代ID]` | 进入指定时代 |  |
| `gain_all_dynasty_perks [角色ID]` | 解锁宗族全部传承 | 不写则默认玩家角色宗族 |
| `merge_culture [文化ID] [文化ID]` | 把前者文化的全部伯爵领并入后者 | 直接按文化 ID 输入 |
| `event [事件ID] [角色ID]` | 触发事件 |  |
| `set_date [年.月.日]` | 设置日期 | 未写月日则默认为 1 月 1 日 |
| `start_struggle [struggle ID]` | 开始 struggle |  |
| `progress_struggle_phase [struggle ID] [phase ID] [数量]` | 推进 struggle 阶段 |  |
| `add_pending_court_event` | 添加待触发宫廷事件 |  |
| `effect change_current_court_grandeur = [数量]` | 增减宫廷庄严度 | 负值可减少 |

## 测试与脚本命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `clear` | 清空控制台历史 |  |
| `help [命令名]` | 输出帮助 |  |
| `reload [文件或目标]` | 重载文件 |  |
| `run [文件名]` | 运行命令文件 | 文件需放在 `Documents/Paradox Interactive/Crusader Kings III/run` |
| `effect ...` | 执行效果脚本 | 自 `1.18.0` 起不再支持 `effect = { ... }` 整体写法 |
| `script_docs` | 输出脚本文档到日志 |  |
| `map_editor` | 打开地图编辑器 |  |
| `portrait_editor` | 打开肖像编辑器 |  |
| `tick_development [数量]` | 给全部伯爵领增加发展度 |  |
| `set_is_ai [角色ID]` | 让 AI 控制指定角色 |  |
| `set_is_player [角色ID]` | 取消 AI 控制指定角色 |  |
| `dump_bookmark_portraits` | 导出书签角色肖像 | 输出到文档目录 |
| `faction_spawn [派系类型]` | 生成指定派系 |  |
| `generate_cadet_coa` | 为玩家族生成新纹章 |  |

## 转换与批量 effect 命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `effect every_held_title = { set_county_culture = root.culture }` | 将直辖伯爵领改为角色文化 |  |
| `effect every_sub_realm_county = { set_county_culture = root.culture }` | 将全部领地伯爵领改为角色文化 |  |
| `effect every_sub_realm_county = { set_county_faith = root.faith }` | 将全部领地伯爵领改为角色信仰 |  |
| `effect every_vassal_or_below = { set_culture = root.culture }` | 将全部封臣改为角色文化 |  |
| `effect every_vassal_or_below = { set_character_faith = root.faith }` | 将全部封臣改为角色信仰 |  |
| `effect every_courtier_or_guest = { set_culture = root.culture }` | 将全部廷臣与宾客改为角色文化 |  |
| `effect every_courtier_or_guest = { set_character_faith = root.faith }` | 将全部廷臣与宾客改为角色信仰 |  |
| `effect every_courtier_or_guest = { set_age = 20 }` | 将全部廷臣与宾客年龄设为指定值 | 数值可替换 |
| `effect every_vassal_or_below = { change_government = feudal_government }` | 将全部封臣改为指定政体 | 政体 ID 可替换 |
| `effect every_sub_realm_county = { change_development_level = 100 }` | 将全部领地发展度改为指定值 | 数值可替换 |

## 脚本命令示例

| 指令 | 作用 | 备注 |
|------|------|------|
| `effect spawn_army = { men_at_arms = { type = huscarl men = 500 } location = capital_province }` | 在首都生成特殊军队 | 兵种与数量可替换 |
| `effect add_trait_xp = { trait = lifestyle_blademaster value = 100 }` | 增加单路径可升级特质经验 |  |
| `effect add_trait_xp = { trait = lifestyle_hunter track=venator value=100 }` | 增加多路径可升级特质经验 |  |
| `effect root = { set_father = character:7627 }` | 设置父亲 | 需 historical ID |
| `effect root = { set_house = character:7627.house }` | 设置家族 | 需 historical ID |
| `effect title:k_egypt = { set_de_jure_liege_title = title:e_byzantium }` | 修改法理宗主头衔 |  |
| `effect title:e_byzantium = { set_capital_county = title:c_rome }` | 修改头衔首都伯爵领 |  |

## 历史宝物生成命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `effect create_artifact_excalibur_effect = { OWNER = this }` | 生成 Excalibur |  |
| `effect create_artifact_joyeuse_effect = { OWNER = this }` | 生成 Joyeuse |  |
| `effect create_artifact_reichskrone_effect = { OWNER = this }` | 生成 Reichskrone |  |
| `effect create_artifact_papal_tiara_effect = { OWNER = this }` | 生成 Papal Tiara |  |
| `effect create_artifact_throne_solomon_effect = { OWNER = this }` | 生成 Throne of Solomon |  |
| `effect create_artifact_szczerbiec_effect = { OWNER = this }` | 生成 Szczerbiec |  |
| `effect create_artifact_durendal_effect = { OWNER = this }` | 生成 Durendal |  |
| `effect create_artifact_curtana_effect = { OWNER = this }` | 生成 Curtana |  |
| `effect create_artifact_olifant_effect = { OWNER = this }` | 生成 Olifant |  |

## 相关页面

- [控制台命令索引](./index.md)
