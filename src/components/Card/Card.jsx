import React, { useRef } from "react";
import style from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setBusket,
         setDeleteBusket,} from "../../redux/slice/locStorBusket.js";
import { setDeleteFavorite, 
         setFavorited } from "../../redux/slice/locStorFavorite.js";

const Card = ({id,name,title,price,img,status,favCard}) =>{
    const dispatch = useDispatch()
    const ref = useRef(false)
    const { busketData, } = useSelector((el) => el.busket);
    const { favorited } = useSelector((el) => el.favorited)
    const imageElem = img[0];
    
    const onClickPlus = () => {
        const findItem = busketData.find(prev => id === prev.itemsId)
        if(findItem){
            dispatch(setDeleteBusket(findItem))
        }else{
            dispatch(setBusket({id,name,itemsId:id,title,price,img}))
        }
    }

    const isItemAdded = (id) => {
        const items = busketData.find(prev => id === prev.itemsId)
        return items
    }
    
    const isItemFavorited = (id) => {
            const favoritedItems = favorited.some(el => el?.itemsId === id)
            return favoritedItems
    }

    const like = () =>{
        const item = favorited.find(el => el.itemsId === id);
        if(item){
            dispatch(setDeleteFavorite(id))
        }else{
            dispatch(setFavorited({id,title,name,itemsId:id,price,img}))
        }
    }
    
    React.useEffect(() => {
        if(ref.current){
          const json = JSON.stringify(favorited);
          const jsonBusket = JSON.stringify(busketData)
          localStorage.setItem('fav', json);
          localStorage.setItem('busket', jsonBusket);
        }
        ref.current = true
      },[favorited, busketData])
      

    return (
       
        <div className={style.card}>
            {status === 'LOADING' ? 
             (<ContentLoader 
             speed={2}
             width={150}
             height={265}
             viewBox="0 0 150 265"
             backgroundColor="#f3f3f3"
             foregroundColor="#ecebeb"
           >
             
           <rect x="26" y=
         "25" rx="0" ry=
         "0" width="300" height="100" /> 
             <rect x="28" y=
         "143" rx="0" ry=
         "0" width="282" height="17" /> 
             <rect x="29" y=
         "171" rx="0" ry=
         "0" width="282" height="17" /> 
             <rect x="35" y=
         "201" rx="0" ry=
         "0" width="70" height="10" />
           </ContentLoader>) : (
           <>
           {!favCard && <img onClick={like} 
                alt='liked' 
                className={style.liked} 
                src={isItemFavorited(id) ? 
                     '/img/yeaLiked.svg' : 
                     '/img/noLiked.svg'} />}

           <Link to={`/gallery/${id}`}>
           <img className={style.imgJewelry} 
                src={imageElem} 
                alt='imgCard' />
           </Link>

           <p>{title}</p>
           <div className={style.infoProduct}>
           <div className={style.price}>
               <span>Цена:</span>
               <b>{price} руб</b>
           </div>
                   <img 
                   onClick={onClickPlus} 
                   className={isItemAdded(id) ?
                                style.onClick : 
                                style.imgAdd}
                   src={ isItemAdded(id) ? '/img/addedPlus.svg' : '/img/add.svg'} alt='add' />
           </div>
           </>)
           }
            
        </div>
    )
}
export default Card;

