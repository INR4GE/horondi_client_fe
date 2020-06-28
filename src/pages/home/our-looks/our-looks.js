import React from 'react';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './our-looks.style';
import {
  LANGUAGE,
  HOMEPAGE_TITLES,
  HOMEPAGE_LOOKS_IMAGES
} from '../../../configs';

const OurLooks = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant='h2' className={classes.title}>
        {HOMEPAGE_TITLES[LANGUAGE].look}
      </Typography>
      <div className={classes.imageSection}>
        {HOMEPAGE_LOOKS_IMAGES.map((imageSrc, i) => (
          <div key={i} className={classes.imageWrapper}>
            {i < 4 ? (
              <img src={imageSrc} alt='Looks' />
            ) : (
              <img
                className={classes.secondFloorImg}
                src={imageSrc}
                alt='Looks'
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLooks;
