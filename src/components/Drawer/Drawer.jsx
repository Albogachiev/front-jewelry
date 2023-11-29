import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Drawer.module.scss';
import { setDeleteBusket, } from '../../redux/slice/locStorBusket.js';
import { setOpenedBusket } from '../../redux/slice/opened.js';
import Info from '../Info.jsx';

const Drawer = () => {
    const dispatch = useDispatch();
    const { busketData, 
            summBasket, 
            isLoading }  = useSelector((el) => el.busket);
    const { openedBusket } = useSelector((el) => el.opened);
    const [isComplete, setIsComplete] = React.useState(false)
    
    const onClickComplete = async (obj) =>{
        dispatch(setDeleteBusket('clearBusket'))
        setIsComplete(true)
     } 

    const removeItemInBusket = (obj) => {
        dispatch(setDeleteBusket(obj));
    }
    
    return (
    <div className={`${styles.overlay} ${openedBusket ? styles.overlayVisible 
                                                      : ''}`}>
    <div className={styles.drawer}>
        <h2>Корзина <img onClick={() => dispatch(setOpenedBusket(false))} 
                         className={styles.drawExit} 
                         alt='imgExit' 
                         src='/img/exit.svg' /></h2>     
        
    <div className="items">
        {
            busketData?.length > 0 ?
            busketData?.map((obj, i) => (
                <div key={i} className={styles.cartItem}>

                    <img width={80} 
                         src={obj.img[0]} 
                         className={styles.imgCard} 
                         alt='a1' />

                    <div className={styles.drawerText}>
                    
                    <p>{obj.title}</p>
                    <b className='price'>{obj.price}</b>
                    </div>

                    <img className={styles.imgexit2} 
                         alt='imgExit' 
                         src='/img/exit.svg' 
                         onClick={()=> removeItemInBusket(obj)} />
                </div>
            ))

       : 

       <Info 
        discription={isComplete ? 'Заказ оформлен!' : 'Корзина пуста.'}
        img={isComplete ? '/img/complete-order.jpg' : '/img/cartEmpty.jpg'}
        butName={'Вернуться назад'}
        title={isComplete ? `Ваш заказ ${'01'} скоро будет передан курьерской доставке.` : 'Добавьте хоть одно изделие, чтобы сделать заказ.'}  
        but={() => dispatch(setOpenedBusket(false))}      
        />
        } 
    </div>
        {busketData.length > 0 && 
        <div className="cartTotalBlock">  
        <ul>
            <li>
                <span>Итого:</span>
                <div></div>
                <b>{summBasket} руб.</b>
            </li>
            <li>
                <span>Скидка 10%: </span>
                <div></div>
                <b>{Math.round(summBasket / 100 * 10)} руб.</b>
            </li>
        </ul>
        
        <button className={styles.buttonDraw} 
                disabled={isLoading} 
                onClick={onClickComplete}>Оформить заказ</button>
                
        </div>}

        
    </div>
    </div>
    )
}
export default Drawer;