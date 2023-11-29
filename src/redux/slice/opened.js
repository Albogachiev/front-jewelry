import { createSlice, } from '@reduxjs/toolkit';
  
  const initialState = { 
      openedBusket:false,
  }

const openedSlice = createSlice({
  name: 'opened',
  initialState,
  reducers: {
    setOpenedBusket(state, actions){
      state.openedBusket = actions.payload
    },
  },
})

export const { setOpenedBusket, } = openedSlice.actions
export default openedSlice.reducer