import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Link } from 'react-router-dom';

//Stateful Component
class Bola extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toogleOn: true,
            isLoggedIn: false,
            value: 'coconut'
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            toggleOn: !prevState.toggleOn
        }));
    }
    handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
    componentDidMount() {
        setInterval( () => {
            this.setState({
                curTime : new Date().toLocaleString()
            })
        },1000)
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
        return (
            <div>
                <h1>Hei {formatName(user)}!</h1>
                <h2>Sekarang Jam {new Date().toLocaleTimeString()}.</h2>
                <h3>sekarang tanggal {new Date().toLocaleDateString()}</h3>
                <Welcome name="Sara" />
                <Welcome name="Cahal" />
                <Welcome name="Katro" />
                <button onClick = {this.handleClick}>
                    {this.state.toggleOn ? 'ON' : 'OFF'}
                </button>
                <Greeting isLoggedIn={isLoggedIn} />
                        {button}
                        <form onSubmit={this.handleSubmit}>
                <label>
                  Pick your favorite flavor:
                  <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                  </select>
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
        )
    }
}

function formatName(user) {
    return user.firstName + "," + user.lastName + "," + user.hahaName;
}



const user = {
    firstName: "Saprol",
    lastName: "Kipli",
    hahaName: "Pak Haji"
}
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
    }

function UserGreeting(props) {
    return <h1>Welcome Back!</h1>
}
function GuestGreeting(props) {
    return <h1>Please Sign Up!</h1>
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />
    }
        return <GuestGreeting />
}
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}




    export default Bola;
