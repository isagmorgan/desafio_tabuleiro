import Square from "./Square";
import Piece from "./Piece";
import styles from "../style/style.module.css";

export default function Board() {
    const board = [];
    for (let row = 0; row < 8; row++) {
        const squares = [];
        for (let col = 0; col < 8; col++) {
            const isDark = (row + col) % 2 === 1;
            const color = isDark ? "black" : "white";
            let piece = null;

            if (row < 3 && isDark) piece = <Piece color="red" />;
            if (row > 4 && isDark) piece = <Piece color="gray" />;

            squares.push(
                <div key={`${row}-${col}`} className={styles.square}>
                    <Square color={color} />
                    {piece}
                </div>
            );
        }
        board.push(<div key={row} className={styles.row}>{squares}</div>);
    }

    return <div className={styles.board}>{board}</div>;
}