import moment from "moment"

export function MovePreview({move, isHomePage = true}) {

    const {toName, at, amount} = move

    if (!isHomePage) {
        return (
            <li className="move-preview">
            <h3>At: {moment(at).format("M/D/YY hh:mm A")}</h3>
            <h3>Amount: {amount}</h3>
        </li>
        )
    }
    return (
        <li className="move-preview">
            <h3>To: {toName}</h3>
            <h3>At: {moment(at).format("M/D/YY hh:mm A")}</h3>
            <h3>Amount: {amount}</h3>
        </li>
    )
}