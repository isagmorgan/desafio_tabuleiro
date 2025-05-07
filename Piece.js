
export default function Piece({ color }) {
    return (
        <div style={{
            width: 40, height: 40,
            borderRadius: '50%',
            backgroundColor: color,
            border: '2px solid black'
        }}>
        </div>
    );
}