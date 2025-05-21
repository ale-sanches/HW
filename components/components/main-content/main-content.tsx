import {defineComponent} from "vue";
import styles from './main-content.module.css'
import {UIButton} from "../UI/Button"

export default defineComponent({
    name: 'MainContent',
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