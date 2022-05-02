import React, { useState, useEffect } from 'react';
import { doApi } from '../service/doApi';
import Music from './music';
import {useSelector, useDispatch } from "react-redux";
import { ACTIONS } from '../reducers/musicReducer';
import { useHistory } from 'react-router-dom';
import SearchSong from './searchSong';
import SearchArtist from './searchArtist';

function MusicStore(props) {
    let dispatch = useDispatch()
    let history = useHistory()


    let [music_ar, setMusicAr] = useState([])
    let [qName, setQname] = useState("linkin park")
    let songs_ar_change = useSelector(state => state.songs_ar_change)

    useEffect(() => {
        let url = "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q="+qName;
        doApi(url)
            .then(data => {
                console.log(data.data);
                setMusicAr(data.data);
                dispatch({type:ACTIONS.UPLOAD_ARRAY,song:data.data})
                
            })

    }, [qName])

    const nextPage = (event) => {
    let path = history.location.pathname;
    let name = event.currentTarget.dataset.artist;

    path = path.replace(path, "/"+name)
    history.push("" + path)
    setQname(name)
    console.log(path)    
  }



    return (
        <div className="container">
            <div className="row py-2">
                <button className="btn btn-warning" onClick={() => { dispatch({ type: ACTIONS.SHOW_SONG }) }}>Show Love Song</button>
            </div>
            <div className="row py-2 m-2">        
                <button className="btn btn-info mr-2" data-artist="linkin Park" onClick={nextPage}>Linkin Park</button>
                <button className="btn btn-info mr-2" data-artist="avril lavigne" onClick={nextPage}>Avril Lavigne</button>
                <button className="btn btn-info mr-2" data-artist="justin bieber" onClick={nextPage}>Justin Bieber</button>
                <button className="btn btn-info mr-2" data-artist="beyonce" onClick={nextPage}>Beyonce</button>
                <button className="btn btn-info mr-2" data-artist="abba" onClick={nextPage}>Abba</button>
                <SearchArtist setQname={setQname}/>

            </div>
            <div className="row py-2 m-2">        
            <button className="btn btn-success mr-2"  onClick={()=>{dispatch({type:ACTIONS.ALL_SONGS,song:music_ar})}}>All Songs</button>
            <SearchSong />
            </div>
            <div className="row">
                
                {songs_ar_change.map(item => {
                    let { picture_medium, name, title, preview } = item;
                    return (
                        <Music key={item.id} item={item}/>
                    )
                })}

           </div>
        </div>
    )
}

export default MusicStore