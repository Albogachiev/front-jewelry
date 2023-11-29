import { createSlice, } from '@reduxjs/toolkit';

export const getFavoritesFromLS = () => {
    let status = 'LOADING'
    const data = localStorage.getItem('fav');
    const favorites =  data ? JSON.parse(data) : [];
    status = 'SECCES'
    return {favorites, status};
}
let { favorites, status } = getFavoritesFromLS();

  const initialState = { 
      favorited:favorites,
      status:status
  }

const favoritedSlice = createSlice({
  name: 'favorited',
  initialState,
  reducers: {
      setFavorited(state, actions){
      state.favorited = [...state.favorited, actions.payload]
    },
    setDeleteFavorite(state, action){
        state.favorited = state.favorited.filter((el) => el.id !== action.payload)
    }
  },
})

export const { setFavorited, setDeleteFavorite } = favoritedSlice.actions
export default favoritedSlice.reducer