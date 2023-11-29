import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = { 
    items:[],
    searchValue:'',
    status:'LOADING',
 }

 export const itemsFetchData = createAsyncThunk(
    '/items',
    async () => {
    let data = [
      {id:1, title:'качественное серебро', name:'серебро', price:1200, img:['/img/a1.png', '/img/a6.png', '/img/a7.png']},
      {id:2, title:'Итальянская бижутерия', name:'золото', price:1300, img:['/img/a2.png', '/img/a5.png', '/img/a5.png']},
      {id:3, title:'Золото качественное', name:'бижутерия', price:2200, img:['/img/a3.png', '/img/a4.png', '/img/a4.png']},
      {id:4, title:'Индийская бижутерия', name:'бижутерия', price:4200, img:['/img/a4.png', '/img/a3.png', '/img/a3.png']},
      {id:5, title:'Корейская бижутерия', name:'золото', price:4400, img:['/img/a5.png', '/img/a2.png', '/img/a2.png']},
      {id:6, title:'Ювелирное изделие', name:'серебро', price:5200, img:['/img/a6.png', '/img/a1.png', '/img/a1.png']},
      {id:7, title:'Индийское золото', name:'бижутерия', price:4300, img:['/img/a7.png', '/img/a7.png', '/img/a2.png']},
      {id:8, title:'Золото высшей пробы', name:'серебро', price:6500, img:['/img/a2.png', '/img/a6.png', '/img/a3.png']},
      {id:9, title:'Серебро 925', name:'ювелирка', price:4300, img:['/img/a4.png', '/img/a5.png', '/img/a6.png']},
      {id:10, title:'Золото 999', name:'золото', price:3200, img:['/img/a5.png', '/img/a4.png', '/img/a4.png']},
    ]
      return data
    }
  )

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    itemsHome(state, actions){
            state.items = actions.payload
    },
    setSearchValue(state, actions){
        state.searchValue = actions.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(itemsFetchData.pending, (state, action) => {
      state.items = [...Array(8)]
      state.status = 'LOADING'
    })
    builder.addCase(itemsFetchData.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = 'SECCES'
    })
    builder.addCase(itemsFetchData.rejected, (state, action) => {
      state.items = []
      state.status = 'ERROR'
    })
  }
})

export const { setSearchValue, } = itemsSlice.actions
export default itemsSlice.reducer