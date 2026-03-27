# Victoria 3 控制台指令

## 源 Wiki

- `https://vic3.paradoxwikis.com/Console_commands`

## 控制台打开方法

- 默认可通过 `~` 打开控制台。
- 需要先启用 `debug_mode`。

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
| `disable_ai [all/tag]` | 禁用 AI |  |
| `enable_ai [all/tag]` | 启用 AI |  |
| `norevolution` | 开关无革命 |  |
| `nosecession` | 开关无分离 |  |
| `nosupportloss` | 阻止国家失去战争支持 |  |
| `noshortages` | 禁止供给短缺惩罚 |  |

## AI 调试命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `ai.debug [tag]` | 输出国家 AI 调试信息 |  |
| `ai.goal [tag] [goal type]` | 检查 AI 目标 |  |
| `ai_evaluate_state [州区key] [国家tag]` | 输出州区 AI 价值 |  |
| `ai_evaluate_wargoal [目标类型] [国家tag] [州区key]` | 输出战争目标 AI 数据 |  |
| `ai_evaluate_trade_route [货物key] [国家tag]` | 输出贸易路线 AI 数据 |  |
| `ai_evaluate_company [公司类型key]` | 输出公司 AI 数据 |  |
| `ai_evaluate_subject [国家tag]` | 输出附庸 AI 数据 |  |
| `show_goals` | 显示 AI 目标 |  |

## 事件与测试命令

| 指令 | 作用 | 备注 |
|------|------|------|
| `event [事件名] [国家tag/省份ID]` | 执行事件 |  |
| `testevent [事件名] [国家tag/省份ID]` | 测试事件 |  |
| `help [命令名]` | 输出帮助 |  |
| `reload [文件名]` | 重载资源 |  |
| `explorer` | 打开对象浏览器 |  |
| `script_docs` | 输出脚本文档 |  |
| `check_save` | 检查存档一致性 |  |
| `debug_mode` | 开关调试模式 |  |
| `date [yyyy.mm.dd.hh]` | 修改日期 |  |

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

## 相关页面

- [控制台命令索引](./index.md)
