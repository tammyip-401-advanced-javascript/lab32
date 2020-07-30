import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

function Header(props) {

    return (
        <Link to="/">

            <header>
                <h1>~ ❀ My Beauty Store ❀ ~</h1>
            </header>

        </Link>
    );
}


export default Header;
