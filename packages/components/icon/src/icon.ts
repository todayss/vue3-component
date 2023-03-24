import { ExtractPropTypes } from 'vue'

export const iconProps = {
  color: {
    type: String,
    default: ''
  },
  size: {
    type: [String, Number],
    default: ''
  }
}

export type IconProps = ExtractPropTypes<typeof iconProps>
