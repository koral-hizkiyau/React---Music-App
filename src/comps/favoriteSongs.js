import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { ACTIONS } from '../reducers/musicReducer';

function FavoriteSongs(props){
    let dispatch = useDispatch()
    // אוסף את הקארט הגלובלי מהרדיוסר של הסטור הגלובלי
    let cart_ar  = useSelector(state =>  state.cart_ar)
    let cartClass = useSelector(state => state.cartClass)



    return(
    <div className={"col-lg-4 cart "+cartClass}>
      <h2>Favorite Songs:</h2>
      {cart_ar.map(item => 
        <div key={item.id} className="bg-dark text-white border">
          {item.title}
          <button className="ml-2 btn btn-danger" onClick={()=>{dispatch({type:ACTIONS.REMOVE_SONG,song:item})}}>Remove</button>
        </div>
      ) }
      <button className="m-2 btn btn-warning" onClick={() => {dispatch({type:ACTIONS.HIDE_CART})}}>Close cart</button>
    </div> 
  )
}

export default FavoriteSongs