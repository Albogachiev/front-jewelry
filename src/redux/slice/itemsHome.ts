import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { TypeItems, Status, Item } from './typesSlice/types';

const initialState:TypeItems = { 
    items:[],
    searchValue:'',
    status:Status.Loading,
 }

 export const itemsFetchData = createAsyncThunk(
    '/items',
    async () => {
    let data:Item[] = [
      {id:1, title:'Baldinini', name:'серебро', price:1200, img:['/img/a1.png', '/img/a6.png', '/img/a7.png']},
      {id:2, title:'от BlackWood', name:'золото', price:1300, img:['/img/a2.png', '/img/a5.png', '/img/a5.png']},
      {id:3, title:'Позолото от Blunt', name:'бижутерия', price:2200, img:['/img/a3.png', '/img/a4.png', '/img/a4.png']},
      {id:4, title:'От Boccadamo', name:'бижутерия', price:4200, img:['/img/a4.png', '/img/a3.png', '/img/a3.png']},
      {id:5, title:'Бижутерия Bugatti', name:'золото', price:4400, img:['/img/a5.png', '/img/a2.png', '/img/a2.png']},
      {id:6, title:'Ювелирка Dziubeka', name:'серебро', price:5200, img:['/img/a6.png', '/img/a1.png', '/img/a1.png']},
      {id:7, title:'BlackWood', name:'бижутерия', price:4300, img:['/img/a7.png', '/img/a7.png', '/img/a2.png']},
      {id:8, title:'Золото высшей пробы', name:'серебро', price:6500, img:['/img/a2.png', '/img/a6.png', '/img/a3.png']},
      {id:9, title:'Baldinini vip-качество', name:'ювелирка', price:4300, img:['/img/a4.png', '/img/a5.png', '/img/a6.png']},
      {id:10, title:'Фирма Bugatti', name:'золото', price:3200, img:['/img/a5.png', '/img/a4.png', '/img/a4.png']},
    ]
      return data
    }
  )

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    itemsHome(state, actions:PayloadAction<Item[]>){
            state.items = actions.payload
    },
    setSearchValue(state, actions:PayloadAction<string>){
        state.searchValue = actions.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(itemsFetchData.pending, (state, action) => {
      state.items = [...Array(8)]
      state.status = Status.Loading
    })
    builder.addCase(itemsFetchData.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })
    builder.addCase(itemsFetchData.rejected, (state, action) => {
      state.items = []
      state.status = Status.Error
    })
  }
})

export const { setSearchValue, } = itemsSlice.actions
export default itemsSlice.reducer