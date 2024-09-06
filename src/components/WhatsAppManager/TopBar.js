// TopBar.js
import React from 'react';
import Dropdown from './Dropdown';
import Search from './Search';
import Button from './Button';

function TopBar() {
    return (
        <div className="top-bar">
            <Dropdown />
            <Search />
            <Button label="Sync" />
        </div>
    );
}

export default TopBar;
