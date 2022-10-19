import { defineComponent, PropType } from 'vue';
import s from '../stylesheets/components/icon.module.scss'

export const Icon = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    }
  },
  setup: (props) => {
    return () => (
      <svg class={s.icon} onClick={props.onClick}>
        <use xlinkHref={`#${props.name}`} />
      </svg>
    )
  }
})