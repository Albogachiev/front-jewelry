import { useDispatch, useSelector } from 'react-redux';

import style from './Menu.module.css';
import { setCategori } from '../../redux/slice/categoriSlice';
import { RootState } from '../../redux/store';

export function Menu() {
const { categori, } = useSelector((el:RootState) => el.categori);

const dispatch = useDispatch()
  return (
    <div className={style.menuContainer}>
      <ul>
        {categori.map((cat, i) => (
          <li key={i} onClick={() => dispatch(setCategori(cat))} > {cat} </li>
        ))}
      </ul>
    </div>
  )
}
