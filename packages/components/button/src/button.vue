<template>
  <button
    :class="[
      bem.b(),
      bem.m(type),
      bem.m(size),
      bem.is('round', round),
      bem.is('loading', loading),
      bem.is('disabled', disabled),
    ]"
    :disabled="disabled || loading"
    :native-type="nativeType"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import createNamespace from '@wan-xiang/utils/create';
import { buttonEmits, buttonProps } from './button';

defineOptions({
  name: 'wx-button',
});

const bem = createNamespace('button');

const props = defineProps(buttonProps);
const emits = defineEmits(buttonEmits);
</script>
