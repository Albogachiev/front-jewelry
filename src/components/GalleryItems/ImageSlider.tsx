import React from 'react';
import styles from './GalleryItems.module.css';
import { Item } from '../../redux/slice/typesSlice/types';

interface ImageSliderProps {
  elem: Item[];
}

export const ImageSlider:React.FC<ImageSliderProps> = ({elem}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const slider = elem.map((el) => el.img)[0];
  
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slider.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const goToNext = () => {
    const isLastSlide = currentIndex  === slider?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
      

  return (
    <div className={styles.sliderSlideContainer}>
      {slider?.length > 0 &&
      <>
        <img className={styles.leftArrow} onClick={goToPrevious} src='/img/left.png' alt="img" />
        <img className={styles.rightArrow} onClick={goToNext} src='/img/right.png' alt="img" />
        <div className={styles.styleSlide} style={{backgroundImage: `url(${slider[currentIndex]})`,}}>

      </div>
      </> 
      }
    </div>
  )
}
