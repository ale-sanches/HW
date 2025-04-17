import {defineComponent} from 'vue'
import styles from './index.module.css'
import SideMenu from '~/components/MainPage/mainPage';

export default defineComponent({
    name: 'IndexPage',
    setup() {
        return () => (
            <div class={styles.page}>
                <SideMenu/>
            </div>
        )
    }
})
