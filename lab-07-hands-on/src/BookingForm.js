import React from "react"
import axios from "axios"

export default class BookingForm extends React.Component {
    state = {
        'fName': '',
        'lName': '',
        'seating': '',
        'smoking': '',
        'appetisers': [],
        'allSeating': [],
        'smokingOption': [],
        'allAppetisers': [],
        'loaded': false
    }

    async componentDidMount() {
        let requests = [
            {
                'key': 'seating',
                'req': axios.get('seating.json')
            },
            {
                'key': 'smoking',
                'req': axios.get('smoking.json')
            },
            {
                'key': 'appetisers',
                'req': axios.get('appetisers.json')
            }
        ]

        let responses = {};
        for (let req of requests) {
            responses[req.key] = await req.req
        }

        this.setState({
            'allSeating': responses['seating'].data,
            'smokingOption': responses['smoking'].data,
            'allAppetisers': responses['appetisers'].data,
            'loaded': true
        })
    }

    renderSeating() {
        let allRadioButtons = [];
        for (let eachSeating of this.state.allSeating) {
            let rb =
                <React.Fragment key={eachSeating.value}>
                    <input type="radio"
                        name="seating"
                        checked={this.state.seating === eachSeating.value}
                        value={eachSeating.value}
                        onChange={this.updateFormField}
                    />
                    <span>{eachSeating.display}</span>
                </React.Fragment>

            allRadioButtons.push(rb)
        }
        return allRadioButtons
    }

    renderSmoking() {
        let smokingOptions = this.state.smokingOption.map(eachOption =>
            <option key={eachOption.value} value={eachOption.value} onChange={this.updateFormField}>
                {eachOption.display}
            </option>)

        return smokingOptions
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>First Name:</label>
                    <input type="text"
                        value={this.state.fName}
                        name="fName"
                        onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text"
                        value={this.state.lName}
                        name="lName"
                        onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Seating:</label>
                    {this.renderSeating()}
                </div>
                <div>
                    <label>Would you prefer:</label>
                    <select name="smoking" value={this.state.smoking} onChange={this.updateFormField}>
                        {this.renderSmoking()}
                    </select>
                </div>
                <div>
                    <label>Select an Appetiser:</label>
                    {this.state.allAppetisers.map(eachAppetiser =>
                        <React.Fragment key={eachAppetiser.value}>
                            <input type="checkbox"
                                name="appetisers"
                                value={eachAppetiser.value}
                                onChange={this.updateAppetisers}
                                checked={this.state.appetisers.includes(eachAppetiser.value)}
                            />
                            <span>{eachAppetiser.display}</span>
                        </React.Fragment>
                    )}
                </div>
            </React.Fragment>
        )
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateAppetisers = (e) => {
        if (this.state.appetisers.includes(e.target.value)) {
            let indexToRemove = this.state.appetisers.findIndex(eachAppetiser => 
                eachAppetiser === e.target.value
                )

            let clone = [
                ...this.state.appetisers.slice(0, indexToRemove),
                ...this.state.appetisers.slice(indexToRemove + 1)
            ]

            this.setState({
                appetisers: clone
            })
        } else {
            let clone = [...this.state.appetisers, e.target.value];
            this.setState({
                appetisers:clone
            })
        }
    }
}