import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { favoriteTypes } from './typesSlice/types';

type initialTypes = {
  favorites:favoriteTypes[],
  status:string}

export const getFavoritesFromLS = ():initialTypes => {
    let status = 'LOADING'
    const data = localStorage.getItem('fav');
    const favorites =  data ? JSON.parse(data) : [];
    status = 'SECCES'
    return {favorites, status};
}
let { favorites, status } = getFavoritesFromLS();

  const initialState:initialTypes = {
      favorites:favorites,
      status:status
  }

const favoritedSlice = createSlice({
  name: 'favorited',
  initialState,
  reducers: {
      setFavorited(state, actions:PayloadAction<favoriteTypes>){
      state.favorites = [...state.favorites, actions.payload]
    },
    setDeleteFavorite(state, action:PayloadAction<number>){
        state.favorites = state.favorites.filter((el:favoriteTypes) => el.id !== action.payload)
    }
  },
})

export const { setFavorited, setDeleteFavorite } = favoritedSlice.actions
export default favoritedSlice.reducer