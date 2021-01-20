import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

const Menu = () => (
    <nav class="app-menu">
        <ul className="app-menu__list">
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/">
                    Home
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/Courses">
                    Courses
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/about">
                    About
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/faq">
                    Faq
                </Link>
            </li>
        </ul>
    </nav>
)

export default Menu