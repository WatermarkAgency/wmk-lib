import React from 'react'
import {wmkClass} from 'wmk-lib'

const Copyright = ({children, className, id}) => {
    const year = new Date().getFullYear();
    return <div id={id} className={wmkClass('copyright','layout')}>© {year} {children}</div>
}

export default Copyright