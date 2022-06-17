const initState = {
  cart_ar: [],
  cartClass: "d-none",
  songs_ar: [],
  songs_ar_change: []
};

function RootRed(state = initState, action) {

  if (action.type === "add_song") {
    let ar = [];
    let temp_ar = [...state.cart_ar];
    ar = temp_ar.filter(item => {
      return (item.id === action.song.id)
    })    
    if (ar.length > 0) {
      return { ...state }
    }  
      temp_ar.push(action.song)
      return { ...state, cart_ar: temp_ar }
    
  }
  else if (action.type === "showSong") {
    return { ...state, cartClass: "d-block" }
  }
  else if (action.type === "hideCart") {
    return { ...state, cartClass: "d-none" }
  }
  else if (action.type === "removeSong") {
    let temp_ar = [...state.cart_ar];
    temp_ar = temp_ar.filter(item => {
      return (item.id !== action.song.id)
    })
    return { ...state, cart_ar: temp_ar}
  }
  else if(action.type === "uploadArray"){
    console.log(action.song);
    
    return { ...state, songs_ar: action.song ,songs_ar_change: action.song }

  }
  else if(action.type === "searchSong"){
    let temp_ar = [...state.songs_ar_change];
console.log(temp_ar)
    temp_ar = temp_ar.filter(item => {
      return (item.title.toLowerCase() === action.song.toLowerCase())
    })
    console.log(temp_ar);

    return { ...state, songs_ar_change: temp_ar }
 
  }
  else if(action.type === "allSongs"){
    let temp_ar = [...state.songs_ar];


    return { ...state, songs_ar_change: temp_ar }
 
  }

  else {
    return state;
  }
}


export const ACTIONS = {
  ADD_SONG: "add_song",
  SHOW_SONG: "showSong",
  HIDE_CART: "hideCart",
  REMOVE_SONG: "removeSong",
  SEARCH_SONG: "searchSong",
  UPLOAD_ARRAY:"uploadArray",
  ALL_SONGS:"allSongs"
}

export default RootRed;