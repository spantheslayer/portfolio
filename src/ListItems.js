import React from 'react'
import './ListItems.css'

function ListItems(props) {
    const items = props.items
    const listItems = items.map(item => {

        return <div className="list" key="itemm.key">
            <p>{item.text}</p>
        </div>

    })
    return(
        <div>{listItems}</div>
    )
}

export default ListItems 