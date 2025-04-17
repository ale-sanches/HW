import {defineComponent} from "vue";
import styles from './MainPage.module.css'
import {UIButton} from "#components";

export default defineComponent({
    name: 'SideMenu',
    setup() {
        //что это - хз
        const buttonsRef = ref<HTMLElement | null>(null);

        const replaceButtons = () => {
            if (buttonsRef.value) {
                buttonsRef.value.classList.toggle(styles.replacedButtons);
            }
        };
        return () => (
            <div class={styles.page}>
                <div ref={buttonsRef} class={styles.buttons}>
                    <UIButton onClick={replaceButtons}>Primary</UIButton>
                    <UIButton variant="secondary">Secondary</UIButton>
                    <UIButton variant="danger">Danger</UIButton>
                </div>
            </div>
        )
    }
})