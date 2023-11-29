import Card from "../Card/Card.jsx";
import { useSelector } from "react-redux";

const Favorites = () => {
    const { favorited, status } = useSelector((el) => el.favorited)
    return (
        <>
        <div className='search-input'>
        <h1 className='zagolovok'>Мои закладки</h1>
        </div>
        <div className='cards'>
    <div className='content'>
        {favorited?.map((obj, index) => (
            <Card
            favCard={'карточка из закладок'}
            status={status}
            key={index}
            id={obj?.id}
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