<script setup lang="ts">
import { ref } from 'vue'
import SelectTags from '../../packages/src/index.vue'
import type { SelectTagsItem } from '../../packages/src'

const message = ref<string>('欢迎开发TuniaoUI v3 uniapp 插件')

const tagItems: SelectTagsItem[] = [
  {
    label: '标签1',
    value: 1,
    activeBgColor: 'tn-orange-light',
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
  {
    label: '标签6',
    value: 6,
  },
  {
    label: '标签7',
    value: 7,
  },
  {
    label: '标签8',
    value: 8,
  },
  {
    label: '标签9',
    value: 9,
  },
  {
    label: '标签10',
    value: 10,
  },
]
</script>

<template>
  <view class="content">
    <view class="message">{{ message }}</view>
    <view>
      <SelectTags :items="tagItems" :multiple="false" :cancelable="false" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .message {
    font-size: 50rpx;
  }
}
</style>
