// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
        <div className='Header'>
            <h2>Call a Friend</h2>
            <p>your friendly contact app</p>
            <div style={{textAlign: 'center'}}>
                <hr />
            </div>
        </div></>
    )
}

export default Header;