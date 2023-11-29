import { configureStore } from '@reduxjs/toolkit';
import busket from './slice/locStorBusket.js';
import items from './slice/itemsHome.js';
import opened from './slice/opened.js';
import categori from './slice/categoriSlice.js';
import favorited from './slice/locStorFavorite.js';

export const store = configureStore({ 
    reducer: {
        busket,
        items,
        opened,
        categori,
        favorited,
    } 
})