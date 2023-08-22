import {
  CHANGE_EVENT,
  UPDATE_MODEL_EVENT,
} from '@tuniao/tnui-vue3-uniapp/constants'
import {
  buildProps,
  definePropType,
  isArray,
} from '@tuniao/tnui-vue3-uniapp/utils'

import type { ExtractPropTypes } from 'vue'

export type SelectTagsModelValue = string | number

export interface SelectTagsItem {
  value: SelectTagsModelValue
  label: string | number
  inactiveBgColor?: string
  activeBgColor?: string
  inactiveColor?: string
  activeColor?: string
}

export const selectTagsProps = buildProps({
  /**
   * @description 选中的标签
   */
  modelValue: {
    type: definePropType<SelectTagsModelValue[]>(Array),
    default: () => [],
  },
  /**
   * @description 标签列表
   */
  items: {
    type: definePropType<SelectTagsItem[]>(Array),
    default: () => [],
  },
  /**
   * @description 是否可多选
   */
  multiple: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 是否可取消选中
   */
  cancelable: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 未选中时标签的背景颜色，以tn开头使用图鸟内置的颜色
   */
  inactiveBgColor: String,
  /**
   * @description 选中时标签的背景颜色，以tn开头使用图鸟内置的颜色
   */
  activeBgColor: String,
  /**
   * @description 未选中时标签的文字颜色，以tn开头使用图鸟内置的颜色
   */
  inactiveColor: String,
  /**
   * @description 选中时标签的文字颜色，以tn开头使用图鸟内置的颜色
   */
  activeColor: String,
})

export const selectTagsEmits = {
  [UPDATE_MODEL_EVENT]: (value: SelectTagsModelValue[]) => isArray(value),
  [CHANGE_EVENT]: (value: SelectTagsModelValue[]) => isArray(value),
  /**
   * @description 标签点击事件
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  click: (index: number, status: boolean, item: SelectTagsItem) => true,
}

export type SelectTagsProps = ExtractPropTypes<typeof selectTagsProps>
export type SelectTagsEmits = typeof selectTagsEmits
