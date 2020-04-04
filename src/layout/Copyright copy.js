import React from 'react'

const Copyright = ({children}) => {
    const year = new Date().getFullYear();
    return <div>© {year} {children}</div>
}

export default Copyright