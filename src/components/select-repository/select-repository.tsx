import React from 'react';
import moment from 'moment';
import Vector from '../../assets/vector';
import { useAppSelector } from '../../hooks';
import { dateRepoFunc } from '../../services/slices/searchSlice';
import style from './select-repository.module.css';

const SelectRepository: React.FC = () => {
  const select = useAppSelector(dateRepoFunc);

  return (
    <div className={style.container}>
      {select?.id ?
        (
          <div>
            <p className={style.titleNameRepo}>Название репозитария</p>
            <div className={style.rapoTop}>
              {select?.language ?
                <p className={style.language}>
                  {select.language}
                </p>
                : null}
              <div className={style.text}>
                <Vector />
                <p>
                  {select.stargazers_count}
                </p>
              </div>
            </div>
            <div className={style.rapoBottom}>
              {select?.language ?
                <p className={style.text}>
                  {select.language}
                </p>
                : null}
              <p className={style.text}>
                {select.forks_count}
              </p>
              <p className={style.text}>
                {moment(select.updated_at).format('DD.MM.YYYY')}
              </p>
            </div>
          </div>
        )
        :
        (
          <div className={style.titleContainer}>
            <p className={style.title}>Выберите репозиторий</p>
          </div>
        )}
    </div>
  );
};

export default SelectRepository;
