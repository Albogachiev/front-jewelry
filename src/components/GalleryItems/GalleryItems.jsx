import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ImageSlider from './ImageSlider.jsx';
import style from './GalleryItems.module.css';

export function GalleryItems() {
const params = useParams();
const { items } = useSelector((el) => el.items)
const elem = items.filter(el =>  el?.id === Number(params.id));

  return (
    <div className={style.galleryContainer}>
      <div className={style.containerStyles}>
       <ImageSlider elem={elem} />
      </div>
    </div>
  )
}
