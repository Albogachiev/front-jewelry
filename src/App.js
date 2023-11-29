import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Home from './components/pages/Home.jsx';
import Favorites from './components/pages/Favorites.jsx';
import { Menu } from './components/Menu/Menu.jsx';
import Drawer from './components/Drawer/Drawer.jsx';
import { GalleryItems } from './components/GalleryItems/GalleryItems.jsx';

function App() {
    
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