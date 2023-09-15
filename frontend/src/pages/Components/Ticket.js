import './ticket.css'
import {useNavigate} from "react-router-dom";
function Ticket(props){
    const navigate = useNavigate();
    const {title,date,cnt,id}=props;
    console.log(id)
    return(
        <div className="main-contain">
            <div className="layout-contain">
                <div className="left">
                    <h2>{title}</h2>
                    <p>Date : {date}</p>
                    <p>{cnt}</p>
                </div>
                <div className="right">
                    <button className="edit" onClick={() => navigate(`/Updateticket/${id}`)}>Edit</button>
                    <button className="delete">Delete</button>
                </div>

            </div>
        </div>
    )
}
export default Ticket;