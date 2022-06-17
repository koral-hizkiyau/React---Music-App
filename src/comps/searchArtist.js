import React, {  useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from '../reducers/musicReducer';
import { useHistory } from 'react-router-dom';

function SearchArtist(props) {
    let id_input = useRef(null)
    let dispatch = useDispatch()
    let songs_ar = useSelector(state => state.songs_ar)
    let songs_ar_change = useSelector(state => state.songs_ar_change)
    let history = useHistory()



    const SearchArtist = () => {

    let path = history.location.pathname;
    let name = id_input.current.value;

    path = path.replace(path, "/"+name)
    history.push("" + path)
    props.setQname(name)
    id_input.current.value = null;
    }






    return (
        <>
            <div className="d-flex col-lg-6">
                <input ref={id_input} type="text" placeholder="Search Artist..." className="w-75 form-control mx-2" />
                <button onClick={SearchArtist} className="btn btn-info">Search</button>
            </div>
        </>

    )
}

export default SearchArtist
