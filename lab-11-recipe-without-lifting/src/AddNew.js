import React from "react"

export default class AddNew extends React.Component {
    state = {
        'newTitle':'',
        'newIngredients':[]
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(<React.Fragment>
            <h1>Add new recipe</h1>
            <div>
                <label>Title:</label>
                <input type="text" value={this.state.newTitle} className="form-control" />
            </div>
            <div>
                <label>Ingredients:</label>
                <input type="text" className="form-control" value={this.state.newIngredients} placeholder="separate each ingredient with a comma" />
            </div>
        </React.Fragment>)
    }
}