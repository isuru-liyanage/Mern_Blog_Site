import './ticket.css'
function Ticket(){
    return(
        <div className="main-contain">
            <div className="layout-contain">
                <div className="left">
                    <h2>title</h2>
                </div>
                <div className="right">
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                </div>

            </div>
        </div>
    )
}
export default Ticket;