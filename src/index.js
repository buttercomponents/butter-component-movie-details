import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './styl/style.styl';
import {Navbar, Dropdowns, Buttons} from 'butter-base-components';
import ActionBar from './components/action-bar';

let {Dropdown} = Dropdowns
let {Button} = Buttons

let CloseButton = (props) => (props)

let LegendedButton = ({children, title}) => (
    <div style={{display: 'flex', flexDirection: 'column'}}>
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
    <div style={{display: 'flex'}}>
        <LegendedButton title={`Play ${type}`}><Button title="Watch Now" /></LegendedButton>
        <LegendedButton title="Subtitles"><Dropdown options={Object.keys(subtitles)}/></LegendedButton>
        <LegendedButton title="Quality"><Dropdown options={Object.keys(torrents)}/></LegendedButton>

        <LegendedButton title="Streamer"><Dropdown options={['butter', 'vlc', 'mpv']}/> </LegendedButton>
    </div>
)

let Info = ({year, runtime, genres, rating, ...props}) => (
    <div>
        {year} · {runtime} mins · {genres[0]} · {rating}
    </div>
)

let MovieDetails = ({title, synopsis, cover, backdrop, ...props}) => (
    <div className={style.layout}>
        <Navbar goBack="/" title="Go Back" toolbar={<ToolBar />} />

        <div style={{display: 'flex', backgroundImg: `url(${backdrop})`}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <h1>{title}</h1>
                <Info {...props}/>
                <p style={{flexGrow: 2}}>
                    {synopsis}
                </p>
                <PlayButtons {...props}/>
            </div>
            <img src={cover} style={{padding: '4vh', borderRadius: '5px'}}/>
        </div>
    </div>
)
export {
    MovieDetails as default
}
