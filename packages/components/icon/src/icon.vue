<template>
  <i :class="bem.b()" :style="styleObj">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import createNamespace from '@wan-xiang/utils/create';
import { iconProps } from './icon';
import { computed } from 'vue'

defineOptions({
  name: 'wx-icon'
})

const props = defineProps(iconProps)
const bem = createNamespace('icon')

const styleObj = computed(() => {
  if(!props.color && !props.size) return {}
  return {
    ...(props.color ? { color: props.color }: {}),
    ...(props.size ? { 'font-size': props.size + 'px' }: {})
  }
})

</script>
