import { withNoopInstall } from '@tuniao/tnui-vue3-uniapp/utils'
import selectTags from './index.vue'

export const TnSelectTags = withNoopInstall(selectTags)
export default TnSelectTags

export * from './types'
export type { TnSelectTagsInstance } from './instance'
