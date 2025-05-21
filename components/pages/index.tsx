import {defineComponent} from 'vue'
import styles from './index.module.css'
import {MainContent} from '~/components/main-content'

export default defineComponent({
    name: 'IndexPage',
    setup() {
        return () => (
            <div class={styles.page}>
                <MainContent/>
            </div>
        )
    }
})
