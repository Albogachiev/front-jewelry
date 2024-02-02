import { Params, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ImageSlider from './ImageSlider';
//@ts-ignore
import style from './GalleryItems.module.css';
import { RootState } from '../../redux/store';
import { Item } from '../../redux/slice/typesSlice/types';

export function GalleryItems() {
const params:Readonly<Params<string>> = useParams<string>();
const { items } = useSelector((el:RootState) => el.items)
const elem:Item[] = items.filter(el =>  el?.id === Number(params.id));

  return (
    <div className={style.galleryContainer}>
      <div className={style.containerStyles}>
       <ImageSlider elem={elem} />
      </div>
    </div>
  )
}
