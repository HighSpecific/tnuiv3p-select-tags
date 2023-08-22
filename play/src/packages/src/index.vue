<script lang="ts" setup>
import { selectTagsEmits, selectTagsProps } from './types'
import { useSelectTags, useSelectTagsCustom } from './composables'

const props = defineProps(selectTagsProps)
const emits = defineEmits(selectTagsEmits)

const { selectTagsValue, tagClickHandle } = useSelectTags(props, emits)
const { ns, tagClass, tagStyle } = useSelectTagsCustom(props, selectTagsValue)
</script>

<template>
  <view :class="[ns.b()]">
    <view
      v-for="(item, index) in items"
      :key="index"
      :class="[ns.e('tag-item'), tagClass(index, item)]"
      :style="tagStyle(index, item)"
      @tap.stop="tagClickHandle(index, item)"
    >
      {{ item.label }}
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './theme-chalk/index.scss';
</style>
