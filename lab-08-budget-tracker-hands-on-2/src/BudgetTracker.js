import React from "react"

export default class BudgetTracker extends React.Component {
    state = {
        expense: [
            {
                'id': Math.floor(Math.random() * 100000),
                date:"20211021",
                description: "Groceries",
                category: "food",
                amount: "20",
                reconciled:false
            },
            {
                'id': Math.floor(Math.random() * 100000),
                date:"20211121",
                description: "New iPhone 13",
                category: "entertainment",
                amount: "800",
                reconciled:false
            },
            {
                'id': Math.floor(Math.random() * 100000),
                date:"20211216",
                description: "Spider-man no way home",
                category: "entertainment",
                amount: "13",
                reconciled:false
            }
        ],
        expenseIdBeingEdited:null,
        newExpenseDate:"",
        newExpenseDescription:"",
        newExpenseCategory:"",
        newExpenseAmount:""
    }

    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    addExpense = () => {
        let newExpense = {
            id: Math.floor(Math.random() * 100000),
            date: this.state.newExpenseDate,
            description: this.state.newExpenseDescription,
            category: this.state.newExpenseCategory,
            amount: this.state.newExpenseAmount,
            reconciled: false
        }

        let clone = this.state.expense.slice()
        clone.push(newExpense)
        this.setState({
            expenses:clone
        })
    }

    deleteExpense = (ExpenseIdBeingDeleted) => {
        let clone = this.state.expense.slice();
        let indexToDelete = this.state.expense.findIndex(expense => 
            expense.id === ExpenseIdBeingDeleted)
        
        clone.splice(indexToDelete, 1);

        this.setState({
            expense:clone
        })
    }

    // renderNormalTask = (e) => {
    //     return <li key={e.id}>
    //         {e.description}
    //         </li>
    // }

    // renderExpenses = () => {
    //     let expenseJSX = [];
    //     for (let e of this.state.expense) {
    //         if (this.state.expenseIdBeingEdited !== e.id) {
    //             expenseJSX.push(this.)
    //         }
    //     }
    // }

    render(){
        return(<React.Fragment>
            <h1>Budget Tracker</h1>
            <div>
                <label>Date:</label>
                <input 
                type="text"
                value={this.state}
                /> 
            </div>
            <div>
                <label>Description:</label>
                <input type="text" />
            </div>
            <div>
                <label>Category</label>
                <select></select>
            </div>
            <div>
                <label>Amount</label>
                <input type="text" />
            </div>
            <div>
                <label>Amount Reconciled</label>
                <input type="radio" />
            </div>
        </React.Fragment>)
    }

}