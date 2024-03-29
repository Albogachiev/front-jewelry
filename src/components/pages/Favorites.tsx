import { RootState } from "../../redux/store.js";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";

const Favorites:React.FC = () => {
    const { favorites, status } = useSelector((el:RootState) => el.favorited)
    return (
        <>
        <div className='search-input'>
        <h1 className='zagolovok'>Мои закладки</h1>
        </div>
        <div className='cards'>
    <div className='content'>
        {favorites?.map((obj, index) => (
            <Card
            favCard={'карточка из закладок'}
            status={status}
            key={index}
            id={obj?.id}
            name={obj?.name}
            title={obj?.title}
            price={obj?.price}
            img={obj?.img}
            />
        ))}
    </div>
    </div>
        </>

    )
}
export default Favorites;