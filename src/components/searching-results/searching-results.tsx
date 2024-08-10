import React, {
  useState
} from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/index';
import SelectRepository from '../select-repository/select-repository';
import { nameRepo, searchUserRepo } from '../../services/slices/searchSlice';
import Icon from '../../assets/icon';
import style from './searching.results.module.css';

const SearchingResults: React.FC = () => {
  const select = useAppSelector(searchUserRepo);
  const dispatch = useDispatch()

  return (
    <div className={style.container}>
      <div className={style.contant}>
        {/* {select && select.length > 0  */}
        <div
          className={style.left}
          style={{ width: select && select.length ? '912px' : '100%' }}
        >
          {select && select.length > 0
            ?
            <>
              <p className={style.title}>Результаты поиска</p>
              <div className={style.teibleTop}>
                <p className={style.teibleTitle}><Icon />Название</p>
                <p className={style.teibleTitle}>Язык</p>
                <p className={style.teibleTitle}>Число форков</p>
                <p className={style.teibleTitle}>Число звезд</p>
                <p className={style.teibleTitle}>Дата обновления</p>
              </div>
            </>
            :
            null}
          {select && select.length > 0 ? (
            select.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className={style.tableContainer}
                  onClick={() => {
                    dispatch(nameRepo(item));
                  }}>
                  <p className={style.text}>
                    {item.name}
                  </p>
                  <p className={style.text}>
                    {item.language}
                  </p>
                  <p className={style.text}>
                    {item.forks_count}
                  </p>
                  <p className={style.text}>
                    {item.stargazers_count}
                  </p>
                  <p className={style.text}>
                    {moment(item.updated_at).format('DD.MM.YYYY')}
                  </p>
                </div>
              );
            })
          ) : (
            <p className={style.textWellCome}>Добро пожаловать</p>
          )}
        </div>
        {select && select.length > 0 ?
          <div
            className={style.right}
            style={{ width: select && select.length ? '480px' : '100%' }}>
            <SelectRepository />
          </div>
          :
          null
        }
      </div>
    </div>
  );
};

export default SearchingResults;
