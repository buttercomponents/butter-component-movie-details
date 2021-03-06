import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

export default class Button extends Component {
    constructor (props) {
        super()
        this.apply = props.apply || function () {}
    }

    render() {
        let {props} = this
        return (
            <button className={props.type ? style[props.type] : style.normal} onClick={this.apply.bind(this)}>
                <span>{props.title}</span>
                {props.icon ? <i className="material-icons">{props.icon}</i> : ''}
                {props.children}
            </button>
        )
    }
}
