import { nextTick, ref, watch } from 'vue'
import {
  CHANGE_EVENT,
  UPDATE_MODEL_EVENT,
} from '@tuniao/tnui-vue3-uniapp/constants'
import { debugWarn } from '@tuniao/tnui-vue3-uniapp/utils'
import { useFormItem } from '@tuniao/tnui-vue3-uniapp/components/form'

import type { SetupContext } from 'vue'
import type {
  SelectTagsEmits,
  SelectTagsItem,
  SelectTagsModelValue,
  SelectTagsProps,
} from '../types'

export const useSelectTags = (
  props: SelectTagsProps,
  emits: SetupContext<SelectTagsEmits>['emit']
) => {
  const { formItem } = useFormItem()
  // 当前选中的的标签值
  const selectTagsValue = ref<SelectTagsModelValue[]>(props.modelValue)
  watch(
    () => props.modelValue,
    (value) => {
      selectTagsValue.value = value
    }
  )

  // 标签点击事件
  const tagClickHandle = (index: number, item: SelectTagsItem) => {
    const value = [...selectTagsValue.value]
    const activeIndex = value.indexOf(item.value)
    let activeStatus = true
    if (activeIndex > -1) {
      // 当前点击标签已经被选中了，判断是否允许取消选中
      if (props.cancelable) {
        activeStatus = false
        value.splice(activeIndex, 1)
      }
    } else {
      // 当前点击标签未被选中，判断是否允许多选
      if (props.multiple) {
        value.push(item.value)
      } else {
        value.splice(0, value.length, item.value)
      }
    }
    if (props?.modelValue === undefined || !props?.modelValue?.length)
      selectTagsValue.value = value
    emits(UPDATE_MODEL_EVENT, value)
    emits('click', index, activeStatus, item)
    nextTick(() => {
      emits(CHANGE_EVENT, value)
      if (props.validateEvent) {
        formItem?.validate?.('change').catch((err) => {
          debugWarn(err)
        })
      }
    })
  }

  return {
    selectTagsValue,
    tagClickHandle,
  }
}
