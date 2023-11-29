import { createSlice, } from '@reduxjs/toolkit';

export const getFavoritesFromLS = () => {
    let status = 'LOADING'
    const data = localStorage.getItem('busket');
    const busketData =  data ? JSON.parse(data) : [];
    const summBasket = busketData.reduce((sum, el) => {
        return Number(el.price) + sum
      },0);
    status = 'SECCES'
    return {busketData, status, summBasket};
}

let { busketData, status, summBasket } = getFavoritesFromLS();

  const initialState = { 
    busketData:busketData,
    status:status,
    summBasket:summBasket,
  }

  const busketSlice = createSlice({
    name: 'busket',
    initialState,
    reducers: {
      setBusket(state, actions){
        state.busketData = [...state.busketData, actions.payload]
        state.summBasket = state.busketData.reduce((sum, el) => {
            return Number(el.price) + sum
          },0);
      },
      setDeleteBusket(state, actions){
        if(actions.payload === 'clearBusket'){
           state.busketData = []
           state.summBasket = 0
        }else{
          state.busketData = state.busketData.filter((el) => el.id !== actions.payload.id)
          state.summBasket = state.busketData.reduce((sum, el) => {
            return Number(el.price) + sum
          },0);
        }
      },
    },
})

export const { setBusket, setDeleteBusket, } = busketSlice.actions
export default busketSlice.reducer