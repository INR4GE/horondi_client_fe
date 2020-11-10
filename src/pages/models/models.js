import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useStyles } from './models.style';
import {
  getAllModels,
  getModelsByCategory
} from '../../redux/model/model.actions';
import { getImage } from '../../utils/imageLoad';
import CircularLoadingBar from '../../components/circular-loading-bar';
import {
  setColorsFilter,
  setHotItemFilter,
  setModelsFilter,
  setPatternsFilter,
  setPriceFilter,
  setSearchFilter
} from '../../redux/products/products.actions';

const images = [
  'https://i.imgur.com/YrV1ajs.png',
  'https://i.imgur.com/ET5P2BQ.png',
  'https://i.imgur.com/EgQqur6.png'
];

const Models = ({ category }) => {
  //  const [images, setImages] = useState([]);
  const styles = useStyles();
  const dispatch = useDispatch();

  const { models, loading, language, filterData } = useSelector(
    ({ Model, Products, Language }) => ({
      models: Model.models,
      language: Language.language,
      loading: Model.loading,
      filterData: Products.filterData
    })
  );

  useEffect(() => {
    dispatch(category ? getModelsByCategory(category._id) : getAllModels());
  }, [dispatch, category]);

  /*  useMemo(() => {
      models.forEach((item) => {
        getImage(item.images.small)
          .then((src) => setImages((prev) => [...prev, src]))
          .catch((badSrc) => setImages((prev) => [...prev, badSrc]));
      });
    }, [models]); */

  const handleClick = (model) => {
    dispatch(setModelsFilter([model.name[1].value]));
    dispatch(setPatternsFilter([]));
    dispatch(setColorsFilter([]));
    dispatch(setSearchFilter(''));
    dispatch(setHotItemFilter(false));
    dispatch(
      setPriceFilter([
        Math.min(...filterData.map((product) => product.basePrice[0].value)),
        Math.max(...filterData.map((product) => product.basePrice[0].value))
      ])
    );
  };

  if (loading) {
    return <CircularLoadingBar />;
  }

  return (
    <div className={styles.root}>
      {models.map((model, index) => (
        <Link
          key={model.name[1].value}
          className={styles.modelItem}
          onClick={() => handleClick(model)}
          to={`/${model.category.name[1].value.toLowerCase()}/${model.name[1].value.toLowerCase()}`}
        >
          <div className={styles.modelItemTitle}>
            {model.name[language].value}
          </div>
          <div
            className={styles.modelItemImage}
            style={{
              background: `url(${
                images[Math.floor(Math.random() * (2 + 1))]
              }) center center`,
              backgroundSize: 'cover'
            }}
          />
        </Link>
      ))}
      <Link className={styles.modelItem} to='/unique'>
        <div className={styles.modelItemTitle}>Unique</div>
        <div
          className={styles.modelItemImage}
          style={{
            background: `url(https://i.imgur.com/ygJaph4.jpg) center center`,
            backgroundSize: 'cover'
          }}
        />
      </Link>
      <Link className={styles.modelItem} to='/constructor'>
        <div className={styles.modelItemTitle}>Зроби сам</div>
        <div
          className={styles.modelItemImage}
          style={{
            background: `url(https://i.imgur.com/ygJaph4.jpg) center center`,
            backgroundSize: 'cover'
          }}
        />
      </Link>
    </div>
  );
};

export default Models;
