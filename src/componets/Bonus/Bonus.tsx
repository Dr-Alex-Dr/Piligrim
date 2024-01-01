import React from "react";
import './Bonus.css'

interface BonusProps {
    img: string,
    name: string,
    balance: string,
    index: number
}

export function Bonus({ img, name, balance, index }: BonusProps) {
    return (
        <div className="Bonus"> 
                <div className="BonusImg">
                    <img src={img}/>
                </div>              
            <div className="BonusWrapper">         
                <p className="BonusName">{name}</p>
                <p className="BonusBalace">{balance} ₽</p>      
            </div>         
        </div>
    )
}