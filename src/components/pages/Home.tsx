import React from "react";
import { Card } from "../Card/Card";
import { setSearchValue, itemsFetchData } from '../../redux/slice/itemsHome';
import { getBusketFromLS } from "../../redux/slice/locStorBusket";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";

const Home:React.FC = () => {
    const dispatch = useAppDispatch()
    const { items, searchValue, status } = useSelector((el:RootState) => el.items);
    const { selectCategori, } = useSelector((el:RootState) => el.categori)
    const renderItems = () =>{
        const filteredItems = items.filter((item) => item?.title.toLowerCase().includes(searchValue.toLowerCase()));
        const categori = filteredItems.filter((el) => el?.title.toLowerCase().includes(selectCategori.toLowerCase()));

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
    dispatch(getBusketFromLS())
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