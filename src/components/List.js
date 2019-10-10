import React, { Component } from 'react';
// import { thisExpression } from '@babel/types';
import { Redirect, withRouter } from "react-router-dom";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inHome: false,
        }
    }

    handleRedirectClick = () => {
        this.setState({inHome: true})
    }

    handleHistoryPushClick = () => {
        this.props.history.push("/about")
    }

    render() {
        
if (this.state.inHome === true)
 {
return <Redirect to = "/" />
 }        
        
        // console.log("history props", this.props.history)

        const animalList = this.props.animals.map((animal, idx) => {
            return <h1 key={ idx }>{ animal }</h1>
        })
        return (
            <div className="list">
                { animalList }

                <button onClick={ this.handleRedirectClick }>Redirect Component Button</button>

                <button onClick={ this.handleHistoryPushClick }>History Push Button</button>
            </div >

        );
    }
}

export default withRouter(List);