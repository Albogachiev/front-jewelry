import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeCategori } from './typesSlice/types';
  
  const initialState:TypeCategori = { 
      categori:[
        ...new Set(['все', 'золото','серебро','бижутерия','итальянское'])
      ],
      selectCategori:''
  }

const categoriSlice = createSlice({
  name: 'categori',
  initialState,
  reducers: {
    setCategori(state, actions:PayloadAction<string>){
        if(actions.payload === 'все'){
          state.selectCategori = ''  
        }else{
          state.selectCategori = actions.payload
        }
    },
  },
})

export const { setCategori, } = categoriSlice.actions
export default categoriSlice.reducer