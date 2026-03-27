# Crusader Kings III 控制台指令

## 源 Wiki

- `https://ck3.paradoxwikis.com/Console_commands`

## 控制台打开方法

- 默认可通过 `~` 打开控制台。
- 需要先启用 `debug_mode`。

## 常用角色与资源命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `gold [数量]` | 增加金币 | 默认 `100` |
| `add_prestige [数量]` | 增加威望 | 默认 `100` |
| `add_piety [数量]` | 增加虔诚 | 默认 `100` |
| `add_piety_no_experience [数量]` | 增加虔诚但不提高虔敬等级 | 默认 `100` |
| `dynasty_prestige [数量] [宗族ID]` | 增加宗族威望 | 默认 `100` |
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

## 军队、建造与地图命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `add_maa [兵种ID] [角色ID]` | 添加兵士军团 |  |
| `instabuild` | 开关瞬间建造和兵士补员 |  |
| `instasiege` | 开关瞬间围城 |  |
| `fow` | 开关战争迷雾 |  |
| `play [角色ID]` | 切换玩家控制角色 |  |
| `observe` | 进入观察者模式 |  |
| `yesmen` | AI 总是接受提议 |  |
| `yesmen_instant` | AI 立刻接受提议 |  |

## 科技、时代与事件命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `discover_all_eras [角色ID]` | 为文化解锁全部时代与创新 |  |
| `discover_era [时代ID]` | 解锁指定时代及其创新 |  |
| `discover_fascination [角色ID]` | 解锁当前迷思 |  |
| `discover_innovation [创新ID] [角色ID]` | 解锁指定创新 |  |
| `join_era [时代ID]` | 进入指定时代 |  |
| `event [事件ID] [角色ID]` | 触发事件 |  |
| `set_date [年.月.日]` | 设置日期 | 未写月日则默认为 1 月 1 日 |
| `start_struggle [struggle ID]` | 开始 struggle |  |
| `progress_struggle_phase [struggle ID] [phase ID] [数量]` | 推进 struggle 阶段 |  |

## 测试与脚本命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `help [命令名]` | 输出帮助 |  |
| `reload [文件或目标]` | 重载文件 |  |
| `run [文件名]` | 运行命令文件 | 文件需放在 `Documents/Paradox Interactive/Crusader Kings III/run` |
| `effect ...` | 执行效果脚本 | 自 `1.18.0` 起不再支持 `effect = { ... }` 整体写法 |
| `script_docs` | 输出脚本文档到日志 |  |
| `map_editor` | 打开地图编辑器 |  |
| `portrait_editor` | 打开肖像编辑器 |  |
| `set_is_ai [角色ID]` | 让 AI 控制指定角色 |  |
| `set_is_player [角色ID]` | 取消 AI 控制指定角色 |  |

## 相关页面

- [控制台命令索引](./index.md)
