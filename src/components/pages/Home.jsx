import React from "react";
import Card from "../Card/Card.jsx";
import { setSearchValue, itemsFetchData } from '../../redux/slice/itemsHome.js';
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
    const dispatch = useDispatch()
    const { items, searchValue, status } = useSelector((el) => el.items);
    const { selectCategori, } = useSelector((el) => el.categori)
    

    const renderItems = () =>{
        const filteredItems = items.filter((item) => item?.title.toLowerCase().includes(searchValue.toLowerCase()));
        const categori = items.filter((el) => selectCategori.toLowerCase().includes(el?.title) 
                                            || selectCategori.toLowerCase().includes(el?.name));
        
        return ((categori.length > 0) ? categori 
                                    : filteredItems).map((obj, index) => 
               ( <Card
                key={index}
                {...obj}
                status={status}
                />)
            )
    }
    
    React.useEffect(() => {
    dispatch(itemsFetchData())
    },[dispatch]);

    return (
        <>
        <div className='search-input'>
        <div className="blockOfInput">
        <h1 className='zagolovok'>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все изделия'}</h1>

        <div className='search-block'>
            <img className='search' alt='search' src='/img/search.svg' />
            <input onChange={(e) => dispatch(setSearchValue(e.target.value))} placeholder='поиск' />
        </div>
        </div>
        </div>
        <div className='cards'>
    <div className='content'>
        {renderItems()}
    </div>
    </div>
        </>

    )
}
export default Home;