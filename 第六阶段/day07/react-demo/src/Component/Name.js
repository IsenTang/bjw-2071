import React, { Component, createRef } from 'react'

import './style.css';
export default class Name extends Component {

    constructor(){

        super();

        this.state = {
            name: 'isen',
            age:28
        }

        this.nameRef = createRef();
    }

    static getDerivedStateFromProps(nextProps,preProps){

        console.log('getDerivedStateFromProps');

        console.log(nextProps);
        console.log(preProps);

        return {
            name:nextProps.name
        };
    }

    getSnapshotBeforeUpdate(){

        console.log(' getSnapshotBeforeUpdate ');
        console.log(this.nameRef.current.scrollHeight);

        return this.nameRef.current.scrollHeight;
    }

    componentDidUpdate(prevProps, prevState, snapshot){

        console.log(' componentDidUpdate ');

        console.log(' snapshot ===>',snapshot);

        this.nameRef.current.scrollTop = snapshot;

    }

    
    render() {
        return (
            <div className={'name'} ref={this.nameRef}>
                {this.state.name}
                <div>{this.state.age}</div>
            </div>
        )
    }
}
