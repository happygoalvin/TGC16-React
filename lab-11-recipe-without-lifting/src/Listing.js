import React from "react"

export default class Listing extends React.Component {
    state={
        data:[]
    }

    BASE_API_URL = "https://8888-kunxinchor-dwadrecipeapi-vl97mf0k5ey.ws-us34.gitpod.io/"

    async componentDidMount() {
        let response = await axios.get(this.BASE_API_URL + 'recipes')
        
    }

    render(){
        return(
            <React.Fragment>
                <div className="card" style={{width:"18rem"}}>

                </div>
            </React.Fragment>
        )
    }
}