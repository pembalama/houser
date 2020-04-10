import React from 'react';
import { Link } from "react-router-dom";

export default class Wizard extends React.Component {
    render() {
        return(
            <div>
                {/* <h1>Wizard</h1> */}
                <button>
                    <Link to="/Dashboard">Cancel</Link>
                </button>
            </div>
        )
    }
}