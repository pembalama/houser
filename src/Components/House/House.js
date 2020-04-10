import React from 'react';

export default class House extends React.Component {
    render() {
        return(
            <div>
                <h1>House</h1>
                <button 
                    onClick = {(id) => this.props.deleteHouse(this.props.id)}>Delete</button>
            </div>
        )
    }
}