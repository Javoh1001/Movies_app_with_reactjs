import React from 'react';
import { HeaderContainer } from './HeaderStyle';

const Header = () =>{
    return(
        <>
            <nav>
                <HeaderContainer>
                    <div className="nav-wrapper">
                        <span className="brand-logo logos">React Movies</span>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><span>Movies</span></li>
                    </ul>
                    </div>
                </HeaderContainer>
            </nav>
        </>
    )
}
export default Header;