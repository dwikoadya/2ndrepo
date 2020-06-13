import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Link } from 'react-router-dom';

//Stateful Component
class Bola extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false,
            handleInput: '',
            isError: false
        }

    }

    tukarNama = () => {
        // this.state.toggle = false/true
        this.setState({
            toggle: !this.state.toggle
        })
    }



    render() {
        console.log(this.state.toggle);
        const { Header, Content, Footer } = Layout;
        const SubMenu = Menu.SubMenu;
        return (
            <div className="App" dwiko="nama">
                <Layout className="layout">
                    <Content style={{ padding: '0 50px', marginTop: 100 }}>
                        {
                            this.state.toggle ? <Name /> : <Name2 />
                        }
                        <p>{this.state.handleInput}</p>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            {this.state.isError && <p style={{color: 'red'}}>Maksimal 5 karakter, silahkan perbaiki!</p>}
                            <input type="text" name="username" onChange={this.validation} value={this.state.handleInput}/>
                        </div>
                    </Content>
                    <button onClick={this.tukarNama}>Switch</button>
                </Layout>,
            </div>
        )
    }
}
Stateless Component
const Name = () => (
    <h1>Dwiko</h1>

)

const Name2 = () => (
    <h1>Kukuh</h1>
)


export default Bola;
