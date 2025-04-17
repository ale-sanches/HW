import {defineComponent, h, resolveComponent, useSlots} from 'vue'
import styles from './default.module.css'
import HeaderLayout from "~/components/LayoutHeader/HeaderLayout";

export default defineComponent({
    name: 'PageLayout',
    setup(props, {slots}) {

        return () => (
            <div class={styles.layout}>
                <HeaderLayout/>
                {slots.default?.()}
            </div>
        )
    }
})
