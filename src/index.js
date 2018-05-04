import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './styl/style.styl';
import {Navbar, Dropdowns, Buttons, Stars} from 'butter-base-components';
import ActionBar from './components/action-bar';

let {Dropdown} = Dropdowns
let {Button} = Buttons

let CloseButton = (props) => (props)
let goBack = () => ('/')

let LegendedButton = ({children, title}) => (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        {children}
        {title}
    </div>
)

let ToolBar = ({}) => (
    <div>
        <Button title="Add to Bookmarks" icon="favorite"/>
        <Button title="Seen" icon="visibility"/>
    </div>
)

let PlayButtons = ({type, torrents, subtitles, ...props}) => (
    <div style={{display: 'flex', flexWrap: 'wrap', paddingTop: '1vw'}}>
        <LegendedButton title={`Play ${type}`}><Button title="Watch Now" /></LegendedButton>
        <LegendedButton title="Subtitles"><Dropdown options={Object.keys(subtitles)}/></LegendedButton>
        <LegendedButton title="Quality"><Dropdown options={Object.keys(torrents)}/></LegendedButton>

        <LegendedButton title="Streamer"><Dropdown options={['butter', 'vlc', 'mpv']}/> </LegendedButton>
    </div>
)

let Info = ({year, runtime, genres, rating, ...props}) => (
    <div className={style.info} style={{
        fontFamily: 'var(--Font-title)',
        fontWeight: 'bold',
        color: '#999',
        padding: '1vh 1vh 1vh 0'
    }}>
        <span>
            {year}
        </span>
        <span>
            {runtime} mins
        </span>
        <span>
            {genres[0]}
        </span>
        <span>
            <Stars rating={rating}/>
        </span>
    </div>
)

let MovieDetails = ({title, synopsis, cover, backdrop, ...props}) => (
    [
        <div style={{
            display: 'block',
            width: '100%',
            height: '100%',
            background: `url(${backdrop})`,
            backgroundSize: 'cover',
            position: 'absolute',
            top: 0,
            right: 0,
            filter: 'saturate(10%)  brightness(50%) contrast(150%) blur(5px)'
        }}>
        </div>,
        <div style={{
            position: 'absolute',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'row-reverse',
        }}>
            <div style={{
                height: '75vh',
                width: '35vw',
                margin: '0 4vw',
                padding: '4vh 0',
                position: 'relative',
                width: '40%',
                display: 'flex',
                zIndex: 10
            }}>
                <img src={cover } style={{
                    borderRadius: '5px',
                    boxShadow: '0px 0px 10px -2px #000',
                    width: '40vw',
                    objectFit: 'cover'
                }}/>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '4vw',
		width: '100%', 
		overflow: 'auto'
            }}>
                <h1 style={{
                    color: '#FFF',
                    position: 'relative',
                    textStroke: '1px rgba(0,0,0,0.1)',
                    fontSize: '48px',
                    fontSmoothing: 'antialiased',
                    fontFamily: 'var(--Font-title)',
                    fontWeight: 'bold'
                }}>{title}</h1>
                <Info {...props}/>
                <p style={{
                    flexGrow: 2,
                }}>
                    {synopsis}
                </p>
                <PlayButtons {...props}/>
            </div>
        </div>
    ]

)

MovieDetails.defaultProps = {
    subtitles: {none: null},
    torrents: {Unknown: null},
    genres: ['none']
}
export {
    MovieDetails as default
}
