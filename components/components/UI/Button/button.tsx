import {defineComponent} from "vue";
import styles from './button.module.css'

type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

export default defineComponent<{
    variant?: Variant,
    onClick?: ((payload: MouseEvent) => void);
}>({
    name: ' UIButton',
    props: {
        variant: {
            default: "primary",
        }
    },
    setup(props, {slots}) {
        return () => (
            <button class={[
                styles.button, styles[props.variant || 'primary']
            ]}
                    onClick={props.onClick}
            >
                {slots.default?.()}
            </button>
        )
    }
})