import React from 'react';
import Footer from '../../components/footer/footer';
import SearchingResults from '../../components/searching-results/searching-results';
import Filtre from '../../components/filtre/filtre';
import style from './home.module.css';

const Home: React.FC = () => {
  return (
    <div className={style.container}>
      <Filtre />
      <SearchingResults />
      <Footer />
    </div>
  );
};

export default Home;

