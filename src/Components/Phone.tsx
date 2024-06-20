import "./phone.scss"
import phone from "../images/illustration-phones.svg"
export const Phone =()=>{
    return(
        <div className="phone">
        <div className="CellPhone">
            <img src={phone} width={400}/>
        </div>
        <div className="Art">
        <h2>State of the Art Infrastructure</h2>
        <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
        </div>
        </div>
    )

}