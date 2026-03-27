# Victoria 3 控制台指令

## 源 Wiki

- `https://vic3.paradoxwikis.com/Console_commands`

## 控制台打开方法

- 默认可通过 `~` 打开控制台。
- 需要先启用 `debug_mode`。

## ID 与调试命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `explorer` | 打开对象浏览器 |  |
| `debug_mode` | 开关调试模式 |  |
| `debug [arguments]` | 执行多种调试动作 | 参数可配合官方 wiki 的 debug 参数表使用 |
| `hq_show_id` | 开关 HQ ID 显示 |  |

## 常用国家与战争命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `money [数量]` | 增加金钱 |  |
| `annex [国家 tag/id]` | 吞并国家 |  |
| `annex_all` | 吞并全部其他国家 |  |
| `tag [国家tag]` | 切换控制国家 |  |
| `observe` | 进入观察者模式 |  |
| `own [省份ID/州区tag] [国家tag]` | 修改所有者 |  |
| `treatyport [州区tag]` | 获取条约港 |  |
| `add_relations [国家tag] [数值]` | 修改关系 |  |
| `add_war_support [国家tag] [数值]` | 修改战争支持 | 作用于该国全部战争 |
| `add_liberty_desire [国家tag] [数值]` | 修改自由欲 |  |
| `escalate [数量]` | 增加玩家外交博弈升级值 |  |
| `conquerall [国家tag]` | 控制全部敌方省份 |  |
| `create_country [国家定义] [国家类型] [文化] [州ID]` | 创建国家 |  |
| `create_political_movement [运动类型key]` | 创建政治运动 |  |

## 科技、法律与利益集团命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `research` | 获得科技 |  |
| `change_law [法律key]` | 修改法律 | 例如 `law_monarchy` |
| `add_approval [利益集团名] [数量] [月份]` | 给利益集团添加支持修正 |  |
| `add_clout [利益集团名] [数量] [月份]` | 修改利益集团权势 |  |
| `add_ideology [利益集团名] [意识形态]` | 给利益集团添加意识形态 |  |
| `set_cohesion [committee] [数值]` | 设置委员会凝聚力 |  |
| `add_mandates [数量]` | 给当前权力集团增加 mandates |  |
| `fastenact` | 开关法律瞬间生效 |  |
| `ignore_government_support` | 开关无视政府支持要求 |  |
| `ignore_power_bloc_requirements` | 开关无视权力集团加入/退出要求 |  |
| `permitmarginalizedingovernment` | 开关允许边缘利益集团入阁 |  |

## 人口、州区与经济命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `changestatepop [州ID] [pop类型/all] [倍率]` | 改变人口规模 |  |
| `add_loyalists [文化] [数量]` | 增加保皇派 | 按人口比例 |
| `add_radicals [文化] [数量]` | 增加激进派 | 按人口比例 |
| `set_devastation_level [州区tag] [数值]` | 设置破坏度 |  |
| `set_pollution_level [州区tag] [数值]` | 设置污染度 |  |
| `check_pollution_level [州区tag]` | 输出污染数据 |  |
| `wagerate [building_id] [数值]` | 获取或设置建筑工资率 |  |
| `update_employment` | 更新指定州就业 |  |
| `update_distribution` | 更新 HQ 驻军分布 |  |
| `find_unemployed` | 查找失业人口 | 可带可选 cutoff |
| `validate_employment` | 输出各州失业情况 |  |
| `validate_income` | 输出收入赤字国家 |  |
| `disable_pop_growth` | 开关禁用人口增长 |  |

## 快速模式与开关命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `fastbuild` | 开关瞬间建造 | 会影响 AI |
| `fastbattle` | 开关战斗只需 1 tick | 会影响 AI |
| `fastresearch` | 开关瞬间研究 |  |
| `fastcolonize` | 开关瞬间殖民 | 会影响 AI |
| `fastincorporate` | 开关 1 天整合州区 |  |
| `fastinstitutions` | 开关瞬间制度 |  |
| `fastmobilize` | 开关瞬间动员 |  |
| `fastmovements` | 开关瞬间移动 |  |
| `fastcivilwars` | 开关快速内战 |  |
| `fastrevolution` | 开关快速革命 |  |
| `fastsecession` | 开关快速分离 |  |
| `fasthire` | 开关瞬间雇佣 |  |
| `fastinterests` | 开关快速宣称利益 |  |
| `fastlobbies` | 开关快速 lobby 变化 |  |
| `fastsecretgoals` | 开关快速秘密目标 |  |
| `fasttravels` | 开关快速旅行 |  |
| `disable_ai [all/tag]` | 禁用 AI |  |
| `enable_ai [all/tag]` | 启用 AI |  |
| `norevolution` | 开关无革命 |  |
| `nosecession` | 开关无分离 |  |
| `nosupportloss` | 阻止国家失去战争支持 |  |
| `noshortages` | 禁止供给短缺惩罚 |  |
| `yesmen` | AI 同意全部外交提议与拉拢 |  |

## AI 调试命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `ai.debug [tag]` | 输出国家 AI 调试信息 |  |
| `ai.goal [tag] [goal type]` | 检查 AI 目标 |  |
| `ai_evaluate_autonomous_construction [building key] [state region key]` | 输出自治建设 AI 数据 |  |
| `ai_evaluate_government_construction [building key] [state region key]` | 输出政府建设 AI 数据 |  |
| `ai_evaluate_interest [strategic region key]` | 输出宣称利益 AI 数据 |  |
| `ai_evaluate_mobilization` | 输出动员 AI 数据 |  |
| `ai_evaluate_privatization [building key] [state region key]` | 输出私有化 AI 数据 |  |
| `ai_evaluate_production_method [building key] [pm key] [state region key]` | 输出生产方式 AI 数据 |  |
| `ai_evaluate_state [州区key] [国家tag]` | 输出州区 AI 价值 |  |
| `ai_evaluate_wargoal [目标类型] [国家tag] [州区key]` | 输出战争目标 AI 数据 |  |
| `ai_evaluate_trade_route [货物key] [国家tag]` | 输出贸易路线 AI 数据 |  |
| `ai_evaluate_company [公司类型key]` | 输出公司 AI 数据 |  |
| `ai_evaluate_subject [国家tag]` | 输出附庸 AI 数据 |  |
| `ai_evaluate_treaty_port [state region key] [country tag]` | 输出条约港 AI 评分 |  |
| `show_goals` | 显示 AI 目标 |  |

## 事件与测试命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `event [事件名] [国家tag/省份ID]` | 执行事件 |  |
| `testevent [事件名] [国家tag/省份ID]` | 测试事件 |  |
| `help [命令名]` | 输出帮助 |  |
| `reload [文件名]` | 重载资源 |  |
| `script_docs` | 输出脚本文档 |  |
| `check_save` | 检查存档一致性 |  |
| `date [yyyy.mm.dd.hh]` | 修改日期 |  |
| `Complete_journal_entry [journal entry type]` | 完成指定日志条目 |  |
| `testobjective [subgoal key]` | 测试目标触发效果 |  |
| `create_building_history` | 导出建筑历史数据 |  |
| `create_pop_history` | 导出完整人口历史 |  |
| `create_state_region_data` | 导出州区数据 |  |
| `exportbuildings` | 输出建筑类型信息 |  |

## 工具与底层命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `map_editor` | 开关地图编辑器 |  |
| `portrait_editor` | 打开肖像编辑器 |  |
| `screenshot` | 截图 |  |
| `shader_editor` | 打开着色器编辑器 |  |
| `textureviewer` | 打开纹理查看器 |  |
| `log_viewer` | 打开日志查看器 |  |
| `save_game_analyzer` | 打开存档分析器 |  |
| `rendertype` | 输出渲染后端 |  |
| `time` | 输出时间信息 |  |
| `version` | 输出版本信息 |  |
| `mapmode [mapmode]` | 切换地图模式 |  |
| `province_borders [true/false]` | 显示或隐藏省份边界 |  |
| `tweak` | 打开 Tweaker GUI |  |
| `particleeditor` | 打开粒子节点编辑器 |  |
| `entity_editor` | 打开实体编辑器 |  |
| `gui_editor` | 打开 GUI 编辑器 | `1.9` 起已移除 |
| `texturelist` | 打开纹理列表 |  |
| `settings` | 打开设置 GUI | 可附带初始分类参数 |

## 相关页面

- [控制台命令索引](./index.md)
