import { Link } from 'react-router-dom';
import { setOpenedBusket } from '../../redux/slice/opened';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from "./Header.module.scss";

const Header:React.FC = () => {
    const dispatch = useDispatch()
    const { summBasket } = useSelector((el:RootState) => el.busket);
    
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
            <li onClick={() => dispatch(setOpenedBusket(true))} style={{cursor:"pointer"}} className={styles.basket}>
                <img alt='корзина юзера' 
                     src='/img/basket.svg' />
                <span>{summBasket}</span>
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