import { createSlice, } from '@reduxjs/toolkit';
  
  const initialState = { 
      categori:[
        'все', 'золото','серебро','бижутерия','золото','итальянское',
      ],
      selectCategori:''
  }

const categoriSlice = createSlice({
  name: 'categori',
  initialState,
  reducers: {
    setCategori(state, actions){
        if(actions.payload === 'все'){
            state.selectCategori = ''  
        }
      state.selectCategori = actions.payload
    },
  },
})

export const { setCategori, } = categoriSlice.actions
export default categoriSlice.reducer