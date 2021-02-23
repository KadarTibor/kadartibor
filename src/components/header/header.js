import React from 'react';
import { Link } from "gatsby";


const HeaderComponent = () => {
    return (
        <div>
            <Link to='/blog'>Kadar Tibor Manasse</Link>
            <div>
                <Link to='/blog'>home</Link>
                <Link to='/blog'>about</Link>
                <Link to='/blog'>projects</Link>
                <Link to='/blog'>blog</Link>
            </div>
        </div>
        
    );
}

export default HeaderComponent;