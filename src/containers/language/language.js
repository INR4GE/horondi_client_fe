import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Select, MenuItem } from '@material-ui/core';
import {
  setToLocalStorage,
  getFromLocalStorage
} from '../../services/local-storage.service';
import useStyles from './language.styles';
import { changeLanguage } from '../../redux/language/language.actions';
import { LANGUAGES_LIST } from '../../configs';

const languageInLocalStorage = getFromLocalStorage('language');

const Language = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeLanguage(languageInLocalStorage));
    console.log('disfgdfgs');
  }, [dispatch]);

  const handleChange = (e) => {
    const targetValue = e.target.value;
    if (targetValue !== undefined) {
      setToLocalStorage('language', targetValue);
      dispatch(changeLanguage(targetValue));
    }
  };
  const mappedLanguages = LANGUAGES_LIST.map(({ lang, value }) => (
    <MenuItem id={`language${value + 1}`} key={value} value={value}>
      {lang}
    </MenuItem>
  ));
  return (
    <div id='language' className={styles.rootLanguage}>
      <Select
        className={styles.rootSelect}
        defaultValue={languageInLocalStorage}
        onChange={handleChange}
      >
        {mappedLanguages}
      </Select>
    </div>
  );
};

export default Language;
