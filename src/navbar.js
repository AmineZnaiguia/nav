import React from 'react'

 function navbar(props) {
    return (
        <ul className="stylenav">
        {props.x.map(el=>
            <li className="hovdrop">{el.link}
            <ul className="drop">
                {!el.drop ? null : el.drop.map(e => 
                <li >{e}</li>) }
            </ul>
            </li>
            )}
        </ul>
    )
}
export default navbar
