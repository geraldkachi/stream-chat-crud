import React from 'react'
import './box.scss'

const Box = ({purple, fullheight, children }) => {
    const className = {
        box: 'box',
        purple: purple && 'box-purple',
        fullheight: fullheight && 'box-fullheight'
    }

    return (
        <div className={Object.values(className).join(' ')}>
            {children}
        </div>
    )
}

export default Box
