import {defineComponent} from "vue";
import styles from './cell.module.css'

type CellType = 'main' | 'secondary'
type CellColors = 'default' | 'accent' | 'info' | 'party'

type CellFont = 'basic' | 'secondary';
type CellBorder = 'none' | 'left' | 'right' | 'all' | 'bottom' | 'default';

// const cellTypesClasses = {
//     main: styles.main_cell,
//     secondary: styles.secondary_cell,
// }
const cellColorClasses: Record<CellType, Record<CellColors, string>> = {
    main: {
        default: styles.main_default,
        accent: styles.main_accent,
        info: styles.main_info,
        party: styles.main_party,
    },
    secondary: {
        default: styles.secondary_default,
        accent: styles.secondary_accent,
        info: styles.secondary_info,
        party: styles.secondary_party,
    }
}
const fontClasses: Record<CellFont, string> = {
    basic: styles.font_basic,
    secondary: styles.font_secondary,
};

const borderClasses: Record<CellBorder, string> = {
    none: styles.border_none,
    left: styles.border_left,
    right: styles.border_right,
    all: styles.border_all,
    bottom: styles.border_bottom,
    default: styles.border_default,
};

export default defineComponent(
    {
        name: 'Cell',
        props: {
            cellType: {
                type: String as PropType<CellType>,
                required: true,
            },
            color: {
                type: String as PropType<CellColors>,
                default: 'default',
            },
            font: {
                type: String as PropType<CellFont>,
                default: 'basic',
            },
            border: {
                type: String as PropType<CellBorder>,
                default: 'right',
            },
        },
        setup(props, {slots}) {
            return () => (
                <div
                    class={[cellColorClasses[props.cellType][props.color],
                        fontClasses[props.font],
                        borderClasses[props.border],
                        styles.cell,
                    ]}
                >
                    {slots.default?.()}
                </div>
            )
        }
    })