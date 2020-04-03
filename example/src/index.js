import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export const wmkClass = (name, group, append = "", prefix = "wmk") => {
    const classes = [prefix+"-"+group,prefix+"-"+group+'-'+name,append];
    return classes.join(" ").trim();
  };
  

ReactDOM.render(<App />, document.getElementById('root'))
