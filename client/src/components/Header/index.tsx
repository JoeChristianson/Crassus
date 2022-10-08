import React from "react"
import CartIcon from "../CartIcon"
import Logo from "../Logo"
import Nav from "../Nav"
import TopPromo from "../TopPromo"

const Header = ()=>{

    return(
        <header>
            <TopPromo></TopPromo>        
            <Logo></Logo>
            <Nav></Nav>
            <CartIcon></CartIcon>
        </header>
    )
}

export default Header