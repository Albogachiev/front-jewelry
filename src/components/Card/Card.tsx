import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContentLoader from "react-content-loader";
import { useSelector, useDispatch } from "react-redux";

import style from "./Card.module.scss";
import { setBusket,
         setDeleteBusket,} from "../../redux/slice/locStorBusket";
import { setDeleteFavorite,
         setFavorited } from "../../redux/slice/locStorFavorite";
import { RootState } from "../../redux/store";
import { Item } from "../../redux/slice/typesSlice/types";

type cardTypes = Item & {
    status:string,
    favCard?:string
}

export const Card:React.FC<cardTypes> = ({id,name,title,price,img,status,favCard}) =>{
    const dispatch = useDispatch()
    const ref = useRef(false)
    const { busketData, } = useSelector((el:RootState) => el.busket);
    const { favorites } = useSelector((el:RootState) => el.favorited)
    const imageElem = img[0];
    
    const onClickPlus = () => {
        const findItem = busketData.find(prev => id === prev.itemsId)
        if(findItem){
            dispatch(setDeleteBusket(findItem))
        }else{
            dispatch(setBusket({id,name,itemsId:id,title,price,img}))
        }
    }

    const isItemAdded = (id:number) => {
        const items = busketData.find(prev => id === prev.itemsId)
        return items
    }
    
    const isItemFavorited = (id:number) => {
            const favoritedItems = favorites.some(el => el?.itemsId === id)
            return favoritedItems
    }

    const like = () =>{
        const item = favorites.find(el => el.itemsId === id);
        if(item){
            dispatch(setDeleteFavorite(id))
        }else{
            dispatch(setFavorited({id,title,name,itemsId:id,price,img}))
        }
    }
    
    React.useEffect(() => {
        if(ref.current){
          const json = JSON.stringify(favorites);
          const jsonBusket = JSON.stringify(busketData)
          localStorage.setItem('fav', json);
          localStorage.setItem('busket', jsonBusket);
        }
        ref.current = true
      },[favorites, busketData])
      

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