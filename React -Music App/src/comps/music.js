import React from 'react';
import heart from "../heart.png";
import { useDispatch } from "react-redux";
import { ACTIONS } from '../reducers/musicReducer';


function Music(props) {
    let dispatch = useDispatch()
    let item = props.item;
    return (
        <div className="col-lg-4 border">
            <img src={item.artist.picture_medium} alt="artist" />
            <h2>{item.title}</h2>
            <div>Artist: {item.artist.name}</div>
            <img src={heart} alt="heart" onClick={() => {dispatch({type:ACTIONS.ADD_SONG,song:item})}}/>
            <audio controls>
                <source src={item.preview} type="audio/mp3"/>
                </audio>

        </div> 
    )
}

export default Music