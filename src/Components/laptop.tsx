import "./laptop.scss"
import laptop from "../images/illustration-laptop-desktop.svg"
export const Laptop =()=>{
    return(
        <div className="laptopdiv">

            <div className="Laptopimg">
                <img src={laptop} width={600}/>
            </div>
            <div className="Laptopw">
                <h2>
                Free, open, simple 
                </h2>
                <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                <h2>
                Powerful tooling
                </h2>
                <p> Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
            </div>
        </div>
    )
}