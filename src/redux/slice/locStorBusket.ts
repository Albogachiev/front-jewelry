import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { TypeBusket, favoriteTypes, Status } from './typesSlice/types';

export const getFavoritesFromLS = createAsyncThunk(
  'busket/getFavoritesFromLS',
     async ():Promise<{busketData:favoriteTypes[], summBasket:number}> => {
     const data = localStorage.getItem('busket');
     const busketData:favoriteTypes[] =  data ? JSON.parse(data) : [];
     const summBasket = busketData.reduce((sum, el) => {
         return el.price + sum
       },0);
     return {busketData, summBasket};
 }
)

  const initialState:TypeBusket = { 
    busketData:[],
    isLoading:Status.Loading,
    summBasket:0,
  }

  const busketSlice = createSlice({
    name: 'busket',
    initialState,
    reducers: {
      setBusket(state, actions:PayloadAction<favoriteTypes>){
        state.busketData = [...state.busketData, actions.payload]
        state.summBasket = state.busketData.reduce((sum, el) => {
            return Number(el.price) + sum
          },0);
      },
      setDeleteBusket(state, actions:PayloadAction<string | favoriteTypes>){
        if(actions.payload === 'clearBusket'){
           state.busketData = []
           state.summBasket = 0
        }else{
          state.busketData = state.busketData.filter((el) => el.id !== (actions.payload as favoriteTypes).id)
          state.summBasket = state.busketData.reduce((sum, el) => {
            return Number(el.price) + sum
          },0);
        }
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getFavoritesFromLS.pending, (state, action) => {
        state.busketData = [...Array(8)]
        state.isLoading = Status.Loading
      })
      builder.addCase(getFavoritesFromLS.fulfilled, (state, action) => {
        state.busketData = action.payload.busketData
        state.summBasket = action.payload.summBasket
        state.isLoading = Status.SUCCESS
      })
      builder.addCase(getFavoritesFromLS.rejected, (state, action) => {
        state.busketData = []
        state.isLoading = Status.Error
      })
    }
})

export const { setBusket, setDeleteBusket, } = busketSlice.actions
export default busketSlice.reducer