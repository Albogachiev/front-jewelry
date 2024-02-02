import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import Drawer from './components/Drawer/Drawer';
import { Menu } from './components/Menu/Menu';
import { GalleryItems } from './components/GalleryItems/GalleryItems';

const App:React.FC = () => {
  return (
    <div className='wrapper'>
        <Drawer />
        <Header />
        <Menu />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/gallery/:id' element={<GalleryItems />} />
        </Routes>
    </div>
  );
}

export default App;