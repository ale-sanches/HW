import {defineComponent} from 'vue'
import styles from '../index.module.css'
import tableStyles from './table-page.module.css'
import {Cell} from '~/components/cell'

export default defineComponent({
    name: 'TablePage',

    setup() {
        const getCellType = (row: number, col: number) =>
            row === 1 || col === 1 ? 'main' : 'secondary';
        const rowsAmount = 10;
        const colsAmount = 10;
        const getBorder = (row: number, col: number) => {
            if (row === rowsAmount && col === colsAmount) {
                return 'none';
            } else if (row == rowsAmount) {
                return 'right';
            } else if (col === colsAmount) {
                return 'bottom'
            } else {
                return 'default'
            }
        }


        const rows = Array.from({length: 10}, (_, rowIndex) => {
            const row = rowIndex + 1

            return (
                <tr key={`row-${row}`}>
                    {Array.from({length: colsAmount}, (_, colIndex) => {
                        const col = colIndex + 1
                        return (
                            <td key={`cell-${row}-${col}`}>
                                <Cell
                                    cellType={getCellType(row, col)}
                                    color="default"
                                    border={getBorder(row, col)}
                                >
                                    {row * col}
                                </Cell>
                            </td>
                        )
                    })}
                </tr>
            )
        })

        return () => (
            <div class={styles.page}>
                <table class={tableStyles.table}>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        )
    }
})

