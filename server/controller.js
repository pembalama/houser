
    getHouses = (req, res) => {
        const db = req.app.get('db');
        db.get_houses().then(houses => {
            res.status(200).json(houses)
        }).catch(error => {
            console.log(error)
            res.status(500).json("please try again.")
        })
    }
    
    addHouse = (req, res) => {
        const db = req.app.get ('db');
        const { name, address, city, state, zipcode, image, mortgageAmount, monthlyRent } = req.body;
        db.add_house( name, address, city, state, zipcode, image, mortgageAmount, monthlyRent ).then(() => {
            res.sendStatus(200)
        }).catch(error => {
            console.log(error)
            res.status(500).json("there was an issue adding data.");
        })
    }
    
    deleteHouse = (req, res) => {
        db = req.app.get('db')
        const { id } = req.params;
        db.remove_house(id).then(house => {
            res.status(200).json(house)
        }).catch(error => {
            console.log(error)
            res.status(500).json("sorry, try again!.");
        })
    }



    module.exports = {
        getHouses,
        addHouse,
        deleteHouse
    }