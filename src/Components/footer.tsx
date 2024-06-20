import "./footer.scss"
export const Footer =()=>{
    return(
        <div className="footer">
            <div className="logo">
                <img src="images\logo.svg"/>
            </div>
            <div className="Products2">
                <h4>Product</h4>
                <ul className="Details">
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Marketable</li>
                    <li>Features</li>
                    <li>Integrations</li>
                </ul>
                </div>
                <div className="Company"> 
                    <h4>Company</h4>
                    <ul className="Details">
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul> </div>
                <div className="Connect"> 
                    <h4>Connect</h4>
                    <ul className="Details">
                    <li>Contact</li>
                    <li>Newsletter</li>
                    <li>LinkedIn</li>
                    </ul>
               
                    </div>
        </div>
    )
}