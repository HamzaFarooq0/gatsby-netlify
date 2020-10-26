import React from 'react';
import { Link } from 'gatsby'

const Main:React.FC = () => {
    return (
        <div>
            <h1>This is main Page.</h1>
            <Link to="/product/phone1">iPhone</Link>
            <br />
            <br />
            <Link to="/product/phone2">Samsung</Link>
        </div>
    )
}

export default Main