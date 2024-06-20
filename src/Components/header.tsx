import "./header.scss"
export const Headings = () => {
  return (
    <div className="heading">
      <div className="heads">
        <div className="Blogrhead">
        <div className="Logoimg">
                <img src="images\logo.svg"/>
            </div>
    
          <ul className="floter">
            <li>
              Product{" "}
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7">
                  <path
                    fill="none"
                    stroke="#FF7B86"
                    stroke-width="2"
                    d="M1 1l4 4 4-4"
                       />
                </svg>
              </button>
              <ul className="drops">
                <li>Overview</li>
                <li>Pricing</li>
                <li>Marketplace</li>
                <li>Features</li>
                <li>Integrations</li>
              </ul>
            </li>
            <li>
              Company{" "}
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7">
                  <path
                    fill="none"
                    stroke="#FF7B86"
                    stroke-width="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>
              <ul className="drops">
                <li>About</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </li>
            <li>
              Connect{" "}
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7">
                  <path
                    fill="none"
                    stroke="#FF7B86"
                    stroke-width="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>
              <ul className="drops">
                <li>Contact</li>
                <li>Newsletter</li>
                <li>LinkedIn</li>
              </ul>
            </li>
          </ul>
       
        <div className="login">
          <button>Login</button>
          <button>Sign Up</button>
        </div> 
        </div>
        <div className="Platformhead">
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div className="LearnButton">
            <button>Start for Free</button>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};
