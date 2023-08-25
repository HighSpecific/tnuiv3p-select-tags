# 图鸟 UI vue3 uniapp Plugins - 多标签选择

![TuniaoUI vue3 uniapp](https://resource.tuniaokj.com/images/vue3/market/vue3-banner-min.jpg 'TuniaoUI vue3 uniapp')

[Tuniao UI vue3官方仓库](https://github.com/tuniaoTech/tuniaoui-rc-vue3-uniapp)

该组件一般用于选择多个标签选择的场景

## 组件安装

```bash
npm i tnuiv3p-tn-select-tags
```

## 组件位置

```bash
tnuiv3p-tn-select-tags/index.vue
```

## 平台差异说明

| App(vue) | H5  | 微信小程序 | 支付宝小程序 |  ...   |
| :------: | :-: | :--------: | :----------: | :----: |
|    √     |  √  |     √      |      √       | 适配中 |

## 基础使用

- 通过`v-model`绑定被选择标签的的`value`值
- 通过`items`设置待选的标签数据
  - 通过`value`属性设置标签选中时的值
  - 通过`label`属性设置标签显示的文本

```vue
<script setup lang="ts">
import { ref } from 'vue'
import SelectTags from 'tnuiv3p-tn-select-tags/index.vue'
import type { SelectTagsItem } from 'tnuiv3p-tn-select-tags'

const currentSelectTags = ref<number[]>([])

const tagItems: SelectTagsItem[] = [
  {
    label: '标签1',
    value: 1,
  },
  {
    label: '标签2',
    value: 2,
  },
  {
    label: '标签3',
    value: 3,
  },
  {
    label: '标签4',
    value: 4,
  },
  {
    label: '标签5',
    value: 5,
  },
]
</script>

<template>
  <SelectTags v-model="currentSelectTags" :items="tagItems" />
</template>
```

## 设置标签激活和未激活时的颜色

- 通过`inactive-bg-color`、`inactive-color`、`active-bg-color`、`active-color`分别可以设置标签未选中时的背景颜色、未选中时文字的颜色、选中时的背景颜色、选中时的文字颜色
- 也可以通过设置标签数据的在属性中单独设置每一个标签的颜色

```vue
<script setup lang="ts">
import { ref } from 'vue'
import SelectTags from 'tnuiv3p-tn-select-tags/index.vue'
import type { SelectTagsItem } from 'tnuiv3p-tn-select-tags'

const currentSelectTags = ref<number[]>([])

const tagItems: SelectTagsItem[] = [
  {
    label: '标签1',
    value: 1,
    activeBgColor: 'tn-orange-light',
  },
  {
    label: '标签2',
    value: 2,
    inactiveBgColor: 'tn-grey-light',
    activeColor: 'tn-grey',
  },
  {
    label: '标签3',
    value: 3,
  },
  {
    label: '标签4',
    value: 4,
  },
  {
    label: '标签5',
    value: 5,
  },
]
</script>

<template>
  <SelectTags v-model="currentSelectTags" :items="tagItems" />
</template>
```

## API

### Props

| 参数                | 说明                                                         | 类型                 | 默认值 | 可选值  |
| ------------------- | ------------------------------------------------------------ | -------------------- | ------ | ------- |
| v-model/model-value | 当前选中标签的值                                             | (String \| Number)[] | []     | -       |
| items               | 标签列表数据                                                 | SelectTagsItem[]     | []     | -       |
| inactive-bg-color   | 未选中时标签背景颜色，以tn开头使用图鸟内置的[颜色](https://vue3.tuniaokj.com/zh-CN/guide/style/background.html#颜色展示) | String               | -      | -       |
| inactive-color      | 未选中时标签文字颜色，以tn开头使用图鸟内置的[颜色](https://vue3.tuniaokj.com/zh-CN/guide/style/text.html#颜色展示) | String               | -      | -       |
| active-bg-color     | 选中时标签背景颜色，以tn开头使用图鸟内置的[颜色](https://vue3.tuniaokj.com/zh-CN/guide/style/background.html#颜色展示) | String               | -      | -       |
| active-color        | 选中时标签文字颜色，以tn开头使用图鸟内置的[颜色](https://vue3.tuniaokj.com/zh-CN/guide/style/text.html#颜色展示) | String               | -      | -       |
| multiple            | 是否允许选中多个标签                                         | Boolean              | `true` | `false` |
| cancelable          | 是否允许取消选择                                             | Boolean              | `true` | `false` |
| validate-event      | 值发生修改时是否触发表单验证                                 | Boolean              | `true` | `false` |

### Events

| 事件名 | 说明             | 类型                                                         |
| ------ | ---------------- | ------------------------------------------------------------ |
| change | 选中的值发生改变 | `(value: (string | number)[]) => void`                       |
| click  | 标签点击事件     | `(index: number, status: boolean, item: SelectTagsItem) => void` |

#### type SelectTagsModelValue = string | number

#### SelectTagsItem

| 参数            | 说明                                                         | 必填 |
| --------------- | ------------------------------------------------------------ | ---- |
| value           | 标签选中后的值                                               | 是   |
| label           | 标签显示的值                                                 | 是   |
| inactiveBgColor | 未选中时标签背景颜色，以tn开头使用图鸟内置的[颜色](https://vue3.tuniaokj.com/zh-CN/guide/style/background.html#颜色展示) | 否   |
| inactiveColor   | 未选中时标签文字颜色，以tn开头使用图鸟内置的[颜色](https://vue3.tuniaokj.com/zh-CN/guide/style/text.html#颜色展示) | 否   |
| activeBgColor   | 选中时标签背景颜色，以tn开头使用图鸟内置的[颜色](https://vue3.tuniaokj.com/zh-CN/guide/style/background.html#颜色展示) | 否   |
| activeColor     | 选中时标签文字颜色，以tn开头使用图鸟内置的[颜色](https://vue3.tuniaokj.com/zh-CN/guide/style/text.html#颜色展示) | 否   |
