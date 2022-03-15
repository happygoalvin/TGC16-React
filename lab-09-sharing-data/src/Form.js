import React from "react";

export default class Form extends React.Component {
    state = {
        'name': '',
        'email':''
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <React.Fragment>
                <div>
                <input type="text"
                name="name"
                placeholder="enter name here"
                value={this.state.name}
                onChange={this.updateFormField} />

                <input type="text"
                name="email"
                placeholder="Enter email here"
                value={this.state.email}
                onChange={this.updateFormField} />
                </div>
                <button>Register</button>
            </React.Fragment>
        )
    }
}