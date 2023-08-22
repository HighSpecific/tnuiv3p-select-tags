import { computed, ref, watch } from 'vue'
import { useComponentColor, useNamespace } from '@tuniao/tnui-vue3-uniapp/hooks'
import { isEmptyDoubleVariableInDefault } from '@tuniao/tnui-vue3-uniapp/utils'
import type { CSSProperties, Ref } from 'vue'
import type {
  SelectTagsItem,
  SelectTagsModelValue,
  SelectTagsProps,
} from '../types'

interface ColorValue {
  class: string
  style: string
}
interface TagColorInfo {
  activeBgColor: ColorValue
  inactiveBgColor: ColorValue
  activeColor: ColorValue
  inactiveColor: ColorValue
}

type TagClass = (index: number, item: SelectTagsItem) => string
type TagStyle = (index: number, item: SelectTagsItem) => CSSProperties

export const useSelectTagsCustom = (
  props: SelectTagsProps,
  currentSelectValue: Ref<SelectTagsModelValue[]>
) => {
  const ns = useNamespace('select-tags')

  // 解析每一个tag的颜色
  const tagsColorInfo = ref<TagColorInfo[]>([])
  const resolveTagColor = () => {
    if (!props?.items?.length) return
    tagsColorInfo.value = props?.items.map((item) => {
      const activeBgColor = ref(
        isEmptyDoubleVariableInDefault(
          item?.activeBgColor,
          props?.activeBgColor,
          'tn-type-primary'
        )
      )
      const inactiveBgColor = ref(
        isEmptyDoubleVariableInDefault(
          item?.inactiveBgColor,
          props?.inactiveBgColor,
          'tn-gray-light'
        )
      )
      const activeColor = ref(
        isEmptyDoubleVariableInDefault(item?.activeColor, props?.activeColor)
      )
      const inactiveColor = ref(
        isEmptyDoubleVariableInDefault(
          item?.inactiveColor,
          props?.inactiveColor
        )
      )
      const [activeBgClass, activeBgStyle] = useComponentColor(
        activeBgColor,
        'bg'
      )
      const [inactiveBgClass, inactiveBgStyle] = useComponentColor(
        inactiveBgColor,
        'bg'
      )
      const [activeColorClass, activeColorStyle] = useComponentColor(
        activeColor,
        'text'
      )
      const [inactiveColorClass, inactiveColorStyle] = useComponentColor(
        inactiveColor,
        'text'
      )
      return {
        activeBgColor: {
          class: activeBgClass.value,
          style: activeBgStyle.value,
        },
        inactiveBgColor: {
          class: inactiveBgClass.value,
          style: inactiveBgStyle.value,
        },
        activeColor: {
          class: activeColorClass.value,
          style: activeColorStyle.value,
        },
        inactiveColor: {
          class: inactiveColorClass.value,
          style: inactiveColorStyle.value,
        },
      }
    })
  }

  watch(
    () => props.items,
    () => {
      resolveTagColor()
    },
    {
      immediate: true,
      deep: true,
    }
  )

  // 标签对应的类
  const tagClass = computed<TagClass>(() => {
    return (index: number, item: SelectTagsItem) => {
      const cls: string[] = []

      const color: TagColorInfo = tagsColorInfo.value[index]

      if (currentSelectValue.value.includes(item.value)) {
        if (color.activeBgColor.class) cls.push(color.activeBgColor.class)
        if (color.activeColor.class) cls.push(color.activeColor.class)
      } else {
        if (color.inactiveBgColor.class) cls.push(color.inactiveBgColor.class)
        if (color.inactiveColor.class) cls.push(color.inactiveColor.class)
      }

      return cls.join(' ')
    }
  })
  // 标签对应的样式
  const tagStyle = computed<TagStyle>(() => {
    return (index: number, item: SelectTagsItem) => {
      const style: CSSProperties = {}

      const color: TagColorInfo = tagsColorInfo.value[index]

      if (currentSelectValue.value.includes(item.value)) {
        if (color.activeBgColor.style)
          style.backgroundColor = color.activeBgColor.style
        if (color.activeColor.style) style.color = color.activeColor.style
      } else {
        if (color.inactiveBgColor.style)
          style.backgroundColor = color.inactiveBgColor.style
        if (color.inactiveColor.style) style.color = color.inactiveColor.style
      }

      return style
    }
  })

  return {
    ns,
    tagClass,
    tagStyle,
  }
}
