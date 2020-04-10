import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Wizard extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    addHouse = () => {
        const { name, address, city, state, zipcode, image, mortgageAmount, monthlyRent } = this.state;
        axios.post('/api/houses', {
            name,
            address,
            city,
            state,
            zipcode,
            image,
            mortgageAmount,
            monthlyRent
        })
        
    }






    render() {
        const { name, address, city, state, zipcode } = this.state;
        return(
            <div>
                <div>
                    {/* <h1>Wizard</h1> */}
                    <button>
                        <Link to="/Dashboard">Cancel</Link>
                    </button>
                </div>

                <form>
                    <form>
                        <h5>Property Name</h5>
                        <input onChange={this.handleChange} value={name} name='name' />
                        <h5>Address</h5>
                        <input onChange={this.handleChange} value={address} name='address' />
                    </form>
                    <div>
                        <form>
                            <h5>City</h5>
                            <input onChange={this.handleChange} value={city} name='city' />
                        </form>
                        <form>
                            <h5>State</h5>
                            <input onChange={this.handleChange} value={state} name='state' />
                        </form>
                        <form>
                            <h5>Zip</h5>
                            <input onChange={this.handleChange} value={zipcode} name='zipcode' />
                        </form>
                    </div>
                </form>
                
                    <button 
                    className='addButton' 
                    onClick={this.addHouse}>Complete</button>

            </div>
        )
    }
}