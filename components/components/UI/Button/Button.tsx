import {defineComponent} from "vue";
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

export default defineComponent({
    name: ' UIButton',
    props: {
        variant: {
            type: String,
            default: 'primary',
        },
        onClick: Function as PropType<(e: MouseEvent) => void>
    },
    setup(props, {slots}) {
        return () => (
            <button class={[
                styles.button, styles[props.variant]
            ]}
                    onClick={props.onClick}
            >
                {slots.default?.()}
            </button>
        )
    }
})