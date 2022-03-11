import React from "react"

export default class TodoList extends React.Component {
    state = {
        tasks:[
            "Wash the car",
            "Clean the room",
            "Do the laundry",
            "Walk the dog"
        ]
    }

    renderTodo() {
        let todos=[];
        for (let t of this.state.tasks) {
            let e = <li>{t}</li>;
            todos.push(e)
        }
        return todos
    }

    renderTodoV2() {
        return this.state.tasks.map(t => <li>{t}</li>)
    }

    render(){
        return(
            <React.Fragment>
                {this.state.tasks.map(t => <li>{t}</li>)}
            </React.Fragment>
        )
    }
}