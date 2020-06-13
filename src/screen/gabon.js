import React, { Component } from 'React';

export default class Master extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false
        }
    }

    componentDidMount() {
        console.log('Master');
    }

    execute = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    execute = () => {
        this.setState({
            isActive: !this.state.isActive
        })

    render() {
        return(
            <div>
                <p>Master Gabon is the best!!</p>
                <p>Master Gabon is the best!!</p>
                <p>Master Gabon is the best!!</p>
                <p>Master Gabon is the best!!</p>
                {
                    this.state.isActive && <h1>FCUK</h1>
                }
                <button onClick={this.execute}>
                    PRESS
                </button>
            </div>
        )
    }
}

const Pillow = {
    master: 20,
    kimak: 'Wow',
    foo: 'bar',
    soy: 'joy',
    lol: true
};
