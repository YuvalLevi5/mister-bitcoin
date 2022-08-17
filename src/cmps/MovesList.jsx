import { MovePreview } from "./MovePreview"
export function MovesList({ moves, isHomePage }) {
    const tMoves = moves.slice(0, 3)
    return (
        <div className="move-list">
            <h1>Your last 3 moves</h1>
            <ul className="clean-list flex flex-col ">
                {tMoves.map((move) => {
                    return <MovePreview key={move.at} move={move} isHomePage={isHomePage} />
                })}
            </ul>
        </div>
    )
}