# 安装 MOD 与 MOD 不生效

学习版无法使用创意工坊，MOD 需要手动放进本地 MOD 目录，再由启动器识别。

## 先理解启动器怎么找 MOD

启动器只读取文档目录中 `mod` 文件夹里的 **`.mod` 文件**，每个 `.mod` 文件通过 `path` 指向一个真正存放 MOD 内容的文件夹：

```txt {3,4}
文档\Paradox Interactive\Hearts of Iron IV\
└─ mod\
   ├─ CPF_TEST.mod           启动器读取这个文件
   └─ CPF_TEST\              path 指向这个文件夹
      ├─ descriptor.mod      MOD 自带的描述文件
      ├─ common\
      ├─ events\
      └─ ...
```

MOD 列表里看不到、显示灰色、提示路径无效，几乎都是这条链路断了：`.mod` 文件不存在，或者 `path` 指向的位置不对。

## 在启动器中新建 MOD 目录

1. 打开 P 社启动器，进入 MOD 页面，新建一个 MOD（名字自定，以 `CPF_TEST` 为例）。启动器会自动生成上图中的 `CPF_TEST.mod` 和 `CPF_TEST` 文件夹。

   ![新建MOD文件夹](https://img.alloy.eu.org/1751550896-fad4f7ab2af0f1f5-530b3415-cf6a-430c-a494-5b962062dd79.png)

2. 把下载的 MOD **解压后**的内容放进 `CPF_TEST` 文件夹。

   ![放入MOD文件](https://img.alloy.eu.org/1751550918-c8472d386c2e5987-17442a95-b4ea-4706-aab2-c7a1d493da53.png)

::: warning 注意文件夹层级
`descriptor.mod` 必须直接位于 `CPF_TEST` 文件夹下。解压时常会多套一层，变成 `CPF_TEST\某某MOD\descriptor.mod`，这样启动器无法识别。压缩包也必须先解压，不能直接放 `.zip`。
:::

```txt
正确：mod\CPF_TEST\descriptor.mod
错误：mod\CPF_TEST\某某MOD\descriptor.mod
错误：mod\CPF_TEST\某某MOD.zip
```

## 放进去后 MOD 不生效 {#path}

MOD 自带的 `descriptor.mod` 会覆盖启动器生成的那一份，里面通常没有 `path` 或者 `path` 是作者电脑上的路径。把正确的路径补进去即可。

1. 回到 `mod` 文件夹（`CPF_TEST` 的上一级），找到与 MOD 同名的 `.mod` 文件，例如 `CPF_TEST.mod`。

   ![找到.mod文件](https://img.alloy.eu.org/1751550930-e99dfcef521c32ba-aed4839c-95d3-4fdb-bf69-40534f6b589d.png)

2. 用记事本打开它，复制其中 `path="..."` 这一整行。
3. 进入 `CPF_TEST` 文件夹，用记事本打开 `descriptor.mod`。

   ![打开descriptor.mod文件](https://img.alloy.eu.org/1751550945-848b8e77fceb88b3-c3c20352-594f-4cff-8e93-00fccf73a292.png)

4. 把刚才复制的 `path="..."` 粘贴进去；如果原来已有 `path` 行，直接替换掉。保存。

   ![修改路径](https://img.alloy.eu.org/1751551070-327776c50f955213-c9a38807-d5f2-4181-acc7-5b37b5b4ed84.png)

改完后两个文件的 `path` 应完全一致，参考下面的写法：

::: code-group

```txt [mod\CPF_TEST.mod]
version="1.0"
tags={
	"Gameplay"
}
name="CPF_TEST"
supported_version="1.16.*"
path="C:/Users/你的用户名/Documents/Paradox Interactive/Hearts of Iron IV/mod/CPF_TEST"
```

```txt [mod\CPF_TEST\descriptor.mod]
version="1.0"
tags={
	"Gameplay"
}
name="CPF_TEST"
supported_version="1.16.*"
path="C:/Users/你的用户名/Documents/Paradox Interactive/Hearts of Iron IV/mod/CPF_TEST"
```

:::

`path` 的书写要求：

- 写**完整路径**，从盘符开始，末尾不加斜杠。
- 分隔符使用正斜杠 `/`，与启动器自动生成的格式保持一致。
- 使用英文双引号，路径中的文件夹名与实际文件夹完全一致。
- 文档目录在 OneDrive 中时，路径会变成 `C:/Users/用户名/OneDrive/文档/...`，建议先按 [文档目录与权限问题](./documents-folder) 把文档移回本地。

## MOD 旁边出现感叹号 {#warning}

| 标记 | 含义 | 处理 |
| --- | --- | --- |
| 黄色感叹号 | 提示性警告 | 通常可以忽略；无法正常使用时再到群里反馈 |
| 红色感叹号 | MOD 与当前游戏版本不匹配 | 更换适配当前版本的 MOD，或换用 MOD 对应版本的游戏 |

如果启动器提示 `The path in this mod's descriptor file is invalid or does not exist`（描述文件中的路径无效或不存在），MOD 会显示为灰色且无法勾选，按 [上一节](#path) 修正 `path` 即可。

::: tip 关于 supported_version
把 `.mod` 文件中的 `supported_version` 改成当前游戏版本可以消除版本警告，但这**只是隐藏提示**，并不能让旧 MOD 真正兼容新版本，大型 MOD 跨版本运行很容易崩溃。
:::

## MOD 列表里找不到 MOD

按顺序检查：

1. `mod` 文件夹里有没有对应的 `.mod` 文件。
2. `.mod` 文件中的 `path` 是否指向真实存在的文件夹，见 [上一节](#path)。
3. MOD 是否已经解压，文件夹层级是否正确。
4. 在启动器的「所有已安装 MOD」页面点击刷新，让启动器重新扫描。
5. 关闭启动器，删除文档目录中的 `mods_registry.json` 和 `launcher-v2.sqlite`，再重新打开，详见 [启动器数据库错误](./database-error-with-start-game#clean-mod-registry)。
6. 安全软件或 OneDrive 可能阻止启动器读取 MOD，见 [文档目录与权限问题](./documents-folder)。

## MOD 冲突与卡顿 {#mod-conflict}

**多个 MOD 一起用时崩溃或显示异常**：先只启用一个 MOD 测试，再逐个加回，找出冲突的组合。注意阅读 MOD 说明中的前置要求和加载顺序。

**开 MOD 后运行缓慢**：大型 MOD 对 CPU 和内存要求明显更高，减少同时启用的 MOD 数量，或者关闭 MOD 自带的可选模块。

## 参考资料

- [Paradox 支持：MOD 或播放集没有出现在启动器中](https://support.paradoxplaza.com/hc/en-us/articles/360020841079-My-Mods-or-Playsets-are-not-showing-up-in-the-Launcher)
- [Steam 社区：钢铁雄心4 MOD 不显示的排查讨论](https://steamcommunity.com/workshop/filedetails/discussion/2624254320/3092275748079003820)
- [GOG 论坛：群星 本地安装 MOD 与 .mod 文件路径说明](https://gog.com/forum/stellaris/guide_how_to_install_star_trek_new_horizons_mod)
- [Paradox 论坛：Launcher 未检测到 MOD](https://admin-forum.paradoxplaza.com/forum/threads/launcher-not-detecting-most-mods-in-steam-library-workshop-content-folder.1498932)
