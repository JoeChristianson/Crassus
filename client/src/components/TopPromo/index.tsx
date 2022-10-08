import React from "react"
import InfoBubble from "../InfoBubble"
const TopPromo = ()=>{
    const promo = "$50 dollars off your first purchase!"
    return(
        <div className="bg-slate-200 text-center relative">
            <span>{promo}</span>
            <InfoBubble></InfoBubble>
        </div>
    )
}

export default TopPromo