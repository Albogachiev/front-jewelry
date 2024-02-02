import { createSlice, PayloadAction} from '@reduxjs/toolkit';

interface OpenedBusketState {
  openedBusket: boolean;
}

const initialState:OpenedBusketState = { 
    openedBusket:false,
}

const openedSlice = createSlice({
  name: 'opened',
  initialState,
  reducers: {
    setOpenedBusket(state, actions:PayloadAction<boolean>){
      state.openedBusket = actions.payload
    },
  },
})

export const { setOpenedBusket, } = openedSlice.actions
export default openedSlice.reducer