import React from 'react';

const styles1={fontFamily:"cursive",textDecoration:"underline"}

function Header() {
    return (
        <div className="bg-light">
                <h2 className="text-center p-2 mt-3 mb-5" style={styles1}>Book Management</h2>
            </div>
    )
}

export default Header;