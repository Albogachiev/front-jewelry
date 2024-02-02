import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeCategori } from './typesSlice/types';
  
  const initialState:TypeCategori = { 
      categori:[
        ...new Set(['все', 'Baldinini','BlackWood','Blunt','Boccadamo', 'Bugatti', 'Dziubeka'])
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
        }else if(actions.payload.length > 0){
          state.selectCategori = actions.payload
        }
    },
  },
})

export const { setCategori, } = categoriSlice.actions
export default categoriSlice.reducer