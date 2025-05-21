import {defineComponent} from 'vue'
import styles from './header.module.css'

type MenuItemType = {
    text: string,
    url: string,
    active: boolean,
}

export default defineComponent({
    name: 'HeaderLayout',
    props: {
        menuItems: {
            type: Array as PropType<MenuItemType[]>,
            required: true,
        },
    },
    setup(props) {
        return () => (
            <header class={styles.header}>
                <div class={styles.leftSide}>
                    <div class="logo">
                        <img src="/ozone-layer.png" alt="logo" class={styles.logo}/>
                    </div>
                    <h3>project-name</h3>
                </div>

                <nav class={styles.nav}>
                    {props.menuItems.map((item) => (
                        <a
                            href={item.url}
                            class={[
                                styles.menuItem,
                                item.active && styles.menuItem_active,
                            ]}
                        >
                            {item.text}
                        </a>
                    ))}
                </nav>
            </header>
        )
    }
})