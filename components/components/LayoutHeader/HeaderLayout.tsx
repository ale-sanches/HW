import { defineComponent } from 'vue'
import styles from './HeaderLayout.module.css'

export default defineComponent({
    name: 'HeaderLayout',
    setup() {
        return () => (
            <header class={styles.header}>
                <div class={styles.leftSide}>
                <div class="logo">
                    <img src="/ozone-layer.png" alt="logo" class={styles.logo} />
                </div>
                <h3>project-name</h3>
                </div>
            </header>
        )
    }
})