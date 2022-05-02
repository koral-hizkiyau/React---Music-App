import React, {  useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from '../reducers/musicReducer';

function SearchSong(props) {
    const id_input = useRef()
    let dispatch = useDispatch()
    let songs_ar = useSelector(state => state.songs_ar)
    let songs_ar_change = useSelector(state => state.songs_ar_change)



    const searchSong = () => {

        if(songs_ar_change.length < 3){
            
            dispatch({type:ACTIONS.UPLOAD_ARRAY,song:songs_ar})
        }
        dispatch({ type: ACTIONS.SEARCH_SONG, song: id_input.current.value })
        id_input.current.value = null;

    }






    return (
        <>
            <div className="d-flex col-lg-6">
                <input ref={id_input} type="text" placeholder="Search Song..." className="w-75 form-control mx-2" />
                <button onClick={searchSong} className="btn btn-success">Search</button>
            </div>
        </>

    )
}

export default SearchSong
