import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeCategori } from './typesSlice/types';
  
  const initialState:TypeCategori = { 
      categori:[
        'все', 'золото','серебро','бижутерия','золото','итальянское',
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
        }
      state.selectCategori = actions.payload
    },
  },
})

export const { setCategori, } = categoriSlice.actions
export default categoriSlice.reducer