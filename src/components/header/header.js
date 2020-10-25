import React from 'react';
import * as HeaderStyle from './headerStyle';

function Header() {
    const siteTitle = <p style={HeaderStyle.pStyle}>Edwin Tang</p>;
    return (
        <div style={HeaderStyle.headerStyle}>
        {siteTitle}
        </div>
    );
}

export { Header };
