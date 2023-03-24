import withInstall from '@wan-xiang/utils/withInstall'
import _Icon from './src/icon.vue'

const Icon = withInstall(_Icon);

export default Icon;

export * from './src/icon'

declare module "vue" {
  export interface GlobalComponents {
    "WxIcon": typeof Icon;
  }
}