import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Link } from 'react-router-dom';
import { Select } from 'antd';
import TimeAgo from 'react-timeago'

class Bola extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: [],
            commentHandler: '',
            nameHandler: 'Gabon',
            photoHandler: 'https://elwiki.net/wiki/images/2/27/CrATransNEW.png',
            dateHandler: Date.now()
        }
    }

    _renderComment = () => {
        return(
            this.state.comments.map((x, i) =>
            <div key={i} style={{marginTop: 20}}>
                <div>
                    <h6 style={{display: 'inline-block'}}>{x.nameHandler}</h6>
                    <h6 style={{display: 'inline-block', marginLeft: 20}}><TimeAgo date={x.dateHandler} /></h6>
                </div>
                <p>{x.commentHandler}</p>
            </div>
            )
        )
    }

    submit = () => {
        this.setState({
            commentHandler: '',
            comments: [...this.state.comments , {
                timeHandler: this.state.timeHandler
                commentHandler: this.state.commentHandler,
                nameHandler: this.state.nameHandler,
                photoHandler: this.state.photoHandler,
                dateHandler: this.state.dateHandler,
                notifHandler: this.state.notifHandler,
            }]
        })
    }

    render() {

        return (
            <div>
            <h1>Write Comment!</h1>
            <textarea onChange={(x) => this.setState({commentHandler: x.target.value})} />
            <button onClick={this.submit}>Submit</button>
            {this._renderComment()}
            </div>

        )
    }
}


export default Bola;
