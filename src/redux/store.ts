import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import busket from './slice/locStorBusket';
import items from './slice/itemsHome';
import opened from './slice/opened';
import categori from './slice/categoriSlice';
import favorited from './slice/locStorFavorite';

export const store = configureStore({ 
    reducer: {
        busket,
        items,
        opened,
        categori,
        favorited,
    } 
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();