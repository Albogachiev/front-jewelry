import { Link } from 'react-router-dom';
import { setOpenedBusket } from '../../redux/slice/opened';
import styles from "./Header.module.scss";
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch()
    const { summBasket } = useSelector((el) => el.busket);

    return ( 
        <div className={styles.containerHead}>

        <header>
            <Link to='/'>
        <div className={styles.headerLeft}>
            <img className={styles.logoImg} alt='логотип' src='/img/logoPremium.jpg' />
            <div className={styles.headerInfo}>
                <h3>JEWELRY SHOP</h3>
                <p>Изделия премиум качества</p>
            </div>
        </div>
            </Link>


<div className={styles.containerMenu}>


       <ul className={styles.headerRight}>
            <li style={{cursor:"pointer"}} className={styles.basket}>
                <img onClick={() => dispatch(setOpenedBusket(true))} 
                     alt='корзина юзера' 
                     src='/img/basket.svg' />
                <span onClick={()=> dispatch(setOpenedBusket(true))}>{summBasket}</span>
            </li>

            <li>
                <Link to='/favorites'>
                <img alt='иконкаДизЛайк' 
                     className={styles.liked} 
                     src='/img/noLiked.svg' />
                </Link>
                </li>
            <li>
        </li>
        </ul>
</div>

    </header>

        </div>
    )
}
export default Header;