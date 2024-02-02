import { Params, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ImageSlider } from './ImageSlider';
import { RootState } from '../../redux/store';
import { Item } from '../../redux/slice/typesSlice/types';
import style from './GalleryItems.module.css';

export const GalleryItems:React.FC = () => {
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
