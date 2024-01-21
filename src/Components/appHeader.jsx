import React from "react";
import "../styles.css"

function Header () {
    return(
        <div className="background-dark text-white">
        
            <nav className="navbar navbar-expand-sm text-white"> 
                <div className="font-weight-bold">
                    <h1>Tic Tac Toe</h1>
                </div>
                <ul className="navbar-nav ms-auto "> 
                    <li className="nav-item"> 
                        <a className="nav-link text-white"  href="/"> 
                            About 
                        </a> 
                    </li> 
                    <li className="nav-item"> 
                        <a className="nav-link text-white" href="/"> 
                            Contacts 
                        </a> 
                    </li> 
                    <li className="nav-item"> 
                        <a className="nav-link text-white" href="/"> 
                            Github 
                        </a> 
                    </li> 
                </ul> 
            </nav> 
         
           
        </div>
    )
}

export default Header;