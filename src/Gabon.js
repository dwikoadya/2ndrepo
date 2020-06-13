import React, { Component } from 'react';
import { Collapse, Menu, Dropdown, Button } from 'antd';
import "antd/dist/antd.css";

export default class Gabon extends Component {
    callback = (key) => {
        console.log(key);
    }

    render() {
        return (
            <div>
                <h1>GABONNNNNNN</h1>
            </div>
        );
    }
};

const styles= {
    navbar: {
        height: 60,
        backgroundColor: 'white'
    }
}
