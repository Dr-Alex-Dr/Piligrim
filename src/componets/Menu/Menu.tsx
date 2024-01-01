import React from "react";
import './Menu.css'


export function Menu() {
    return (
        <div className="Menu">
          <ul className='MenuList'>
            <li className='MenuListItem'>
                <a className="MunuListItemLink" href="#">
                    <img src="./assets/icons/credit-card.png"/>
                    <p>Моя карта</p>
                </a>
            </li>
            <li className='MenuListItem'>
                <a className="MunuListItemLink" href="#">
                    <img src="./assets/icons/location.png"/>
                    <p>Карта партнеров</p>
                </a>
            </li>
            <li className='MenuListItem'>
                <a className="MunuListItemLink" href="#">
                    <img src="./assets/icons/promotions.png"/>
                    <p>Акции</p>
                </a>
            </li>
            <li className='MenuListItem'>
                <a className="MunuListItemLink" href="#">
                    <img src="./assets/icons/profile.png"/>
                    <p>Мой профиль</p>
                </a>
            </li>
          </ul>
        </div>
    )
}

