import {defineComponent, computed} from 'vue'
import styles from './default.module.css'
import {Header} from '~/components/header'
import {useRoute, useNuxtApp} from '#app'

export default defineComponent({
    name: 'PageLayout',
    setup(props, {slots}) {
        const currentPath = computed(() => useRoute().path)
        const menuItems = computed(() => [{
            text: 'Главная',
            url: '/',
            active: currentPath.value === '/',
        },
            {
                text: 'Table',
                url: '/table-page/table-page',
                active: currentPath.value === '/table-page/table-page'
            }])
        return () => (
            <div class={styles.layout}>
                <Header
                    menuItems={menuItems.value}
                />
                {slots.default?.()}
            </div>
        )
    }
})
