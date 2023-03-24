import { ExtractPropTypes, PropType } from 'vue';

export type ButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default';

export type ButtonSize = 'small' | 'medium' | 'large';
export type NativeType = 'reset' | 'button' | 'submit';
export type Placement = 'left' | 'right';

export const buttonProps = {
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium',
  },
  type: {
    type: String as PropType<ButtonType>,
    default: 'medium',
  },
  round: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  iconPlacement: {
    type: String as PropType<Placement>,
    default: 'left',
  },
};

export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
  mousedown: (e: MouseEvent) => e instanceof MouseEvent,
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;
