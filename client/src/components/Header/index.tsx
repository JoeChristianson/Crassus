import React from "react"
import CartIcon from "../CartIcon"
import Logo from "../Logo"
import Nav from "../Nav"
import TopPromo from "../TopPromo"

const Header = ()=>{

    return(
        <header>
            <TopPromo></TopPromo>        
            <div className="m-4">
            <Logo></Logo>
            <Nav></Nav>
            <CartIcon></CartIcon>
            </div>
        </header>
    )
}

export default Header