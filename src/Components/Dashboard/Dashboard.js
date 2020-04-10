import React from 'react';
import House from '../House/House'
import { Link } from "react-router-dom";
import axios from "axios";

export default class Dashboard extends React.Component {
    constructor() {
        super();
        
        this.state = {
            listing: []
        }
    }


    componentDidMount() {
        this.getListing();
    }


    getListing = () => {
        axios
        .get('/api/houses')
        .then(res => {
          console.log(res.data);
    
          this.setState({
            listing: res.data
          });
        });
      };


      deleteHouse = (id) => {
        axios
            .delete(`/api/houses/${id}`)
            .then(() => {
                this.getListing()
            })
    }



    render() {
        console.log(this.state.listing)

        const {listing} = this.state;
        let mappedListing = listing.map((val, i) => {
            return (
                <div>
                    <House listing={listing} house={val} key={i} deleteHouse={this.deleteHouse} />
                        <button>
                            <Link to="/wizard">Add New Property</Link>
                        </button>
                </div>
            )
        })

        return (
            <div>
                <div>Home Listings</div>
                {mappedListing}
            </div>
        )
    }

}


