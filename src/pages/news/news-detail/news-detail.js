import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import parse from 'html-react-parser';
import './news-detail.css';
import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  CardMedia,
  Backdrop
} from '@material-ui/core';
import { getArticle } from '../../../redux/news/news.actions';
import { useStyles } from './news-detail.style';
import LoadingBar from '../../../components/LoadingBar';
import { LANGUAGE, TIME_OPTIONS } from '../../../configs';

const NewsDetailPage = ({ match }) => {
  const { article, loading } = useSelector(({ News }) => ({
    article: News.activeArticle,
    loading: News.loading
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const articleId = match.params.id;
    dispatch(getArticle(articleId));
    window.scrollTo(0, 0);
  }, [match.params.id, dispatch, article]);

  const styles = useStyles();

  if (loading || !article) {
    return (
      <Backdrop className={styles.backdrop} open={loading} invisible>
        <LoadingBar color='inherit' />
      </Backdrop>
    );
  }

  const newsTitle =
    article.title.length !== 0
      ? article.title[LANGUAGE].value
      : 'No title provided';
  const newsDateLanguegeOptions = ['ukr-UA', 'en-US'];
  const dateLANGUAGE = `${newsDateLanguegeOptions[LANGUAGE]}`;
  const dateToShow = new Date(parseInt(article.date));
  const newsDate = dateToShow.toLocaleString(`${dateLANGUAGE}`, TIME_OPTIONS);
  const newsImage = article.images ? article.images.primary.medium : ' ';
  const newsVideo = article.video;
  const newsAuthor =
    article.author.name.length !== 0
      ? article.author.name[LANGUAGE].value
      : 'No author provided';
  const newsAuthorAvatar = article.author.image
    ? article.author.image.small
    : 'No author provided';

  const altText = `<p>Now a bag is more than just an accessory.
  In 2020, it became the main detail of the trend image. Designers presented in their collections many universal and bright models that can be easily interpreted in everyday bows.
  More colors, styles and materials were added to the classic models.
  </p>
  
  <h3>Straw bags</h3>
  <img src='https://s.032.ua/section/newsInText/upload/images/news/intext/000/052/185/solomani_5edf8e4b209ed.jpg' 
  alt="Woman with a straw bag in her hand">
  <p>For several years in a row, straw bags have remained at the top.
  They are suitable for resort and city walks.
  They can also be worn under a classic suit or
  an elegant dress. Designer Solomiya Nebozhuk says
  that straw bags will make your image relax and add a touch of 
  Parisian style. You can combine them with jeans, a white shirt 
  and loafers. A straw shopper bag will go well with white
  culottes and a silk shirt. This bag is the basis of the 
  2020 summer wardrobe, a kind of springboard for fashion experiments.
  Designers improve the model of a classic straw bag every year. 
  The main trend positions among straw bags were: shopper bag, 
  minodiere, crossbody bag, top handle.</p>
  
  <h3>Bulky and soft clutch</h3>
  <img src='https://s.032.ua/section/newsInText/upload/images/news/intext/000/052/185/11_5edf8f3209c11.jpg'
  alt="Woman with a soft-color clutch bag in her hand">
  <p>In the spring-summer 2020 season, clutches took the absolute
  lead among trend bags. Soft, unstructured and large clutches are
  part of the basic wardrobe of all fashionistas. The founder and king 
  of this trend was the Italian brand Bottega Veneta, which presented the 
  cult clutch Pouch. Since then, other brands have begun to actively offer 
  such bags in their collections. Stylist Solomiya Nebozhuk explains that a 
  clutch will become a universal element of your wardrobe. It can be combined 
  with casual images, evening or cocktail dresses. It is important to remember 
  that it should not be combined with very relaxed things, as your image may 
  become too homely. It is better to prefer structured jeans, jackets or shirts. 
  Also, the strong relaxation of the image can be compensated by hats and shoes.</p>
  
  <h3>Bags with massive chains</h3>
  <img src='https://s.032.ua/section/newsInText/upload/images/news/intext/000/052/185/cepki_5edf8fffc7403.jpg' 
  alt="Woman with a brown bag on a massive chain over her shoulder">
  <p>Chains everywhere are the main credo of summer 2020 trends. 
  Designers add massive chains to all models of bags. They perform 
  the function of decoration rather than a full-fledged handle in 
  the accessory. Such bags can be combined with casual images, in 
  which case the accessory will be an accent. It can also be combined 
  with elegant skirts and blouses. Then a bag with a chain will reduce 
  the degree of romance in the image.</p>
  
  <h3>Microbags</h3>
  <img src='https://s.032.ua/section/newsInText/upload/images/news/intext/000/052/185/ertfg4_5edf90563e5b1.jpg'
  alt="Woman with a blue microbag wound up her wrist">
  <p>As last year, in 2020 microbags take their place among the trends. 
  The founder of the idea of 
  its use was the fashion house Jacquemus, 
  which released its most famous microbag. It is so small that only a few 
  coins can be placed in it. Now mini-bags have almost lost their function 
  and have become more of an accessory. Most often they are made with long 
  chains. According to stylist Solomiya Nebozhuk, such purse bags are combined 
  with other bags. Sometimes fashionistas use them as a necklace. Surprisingly, 
  this trend is perfectly combined with every style.
  The microbag can become a part of a casual,
  boho, evening or minimalist image. In addition,
  it will breathe a little freshness and trendiness into a regular base bow.</p>
  
  <h3>Quilted crossbody bags (over the shoulder)</h3>
  <img src='https://s.032.ua/section/newsInText/upload/images/news/intext/000/052/185/9_5edf90b4381c8.jpg'
  alt="Woman with a quilted brown bag over her shoulder">
  <p>This type of bag is considered the most versatile. 
  The ideologue of this trend was also the Italian brand Bottega Veneta.
  Their shoulder bag Cassette has become very popular among fashion connoisseurs.
  This model was picked up by mass markets, so today a similar
  model can be found on the shelves of budget stores. The 
  crossbad bag can be beautifully styled with floral dresses,
  jeans and classic T-shirts (possibly polo) or with lingerie-style suits.
  This type of trendy bags can fully claim a place in the basic wardrobe.
  The designer recommends choosing this accessory in a neutral color and
  style, because then it will suit many clothing combinations.</p>
          
  <h3>Art bags</h3>
  <img src='https://s.032.ua/section/newsInText/upload/images/news/intext/000/052/185/11_5edf9163c6237.jpg'
  alt="Woman with a red ball-shaped bag in her hand">
  <p>If you want to add a bright accent to your everyday bow,
  art bags will help. Bags with animal prints, unusual minodieri, 
  bags with feathers, beads, knitted accessories, denim bags - 
  this is not the whole list of fantasy of designers in 2020. 
  They can combine different colors, have additional applications 
  or unusual shapes and materials. It is better to wear them with 
  minimalist and calm clothes or to emphasize shoes or hats. You 
  can also experiment with earrings, chains or bracelets that will 
  resonate with the prints on the bag.</p>
  
  <h3>Baguette bag</h3>
  <img src='https://s.032.ua/section/newsInText/upload/images/news/intext/000/052/185/7_5edf942a343c8.jpg'
  alt="Woman with a shiny brown rectangular bag over her shoulder">
  <p>This bag model became famous in the 2000s thanks to the main character of the series "Sex in the Big City" Carrie Bradshaw. It was she who adored and collected models of Fendi Baguette bags. Now in the collections of almost every fashion house you can find their interpretations of the iconic baguette bag. Designers experiment with all its details, so it can become the focus of the basic wardrobe. Also, the baguette bag is a great addition to any image, as it adds a touch of vintage.</p>"`;
  const newsText =
    article.text.length !== 0
      ? parse(
          // article.text[LANGUAGE].value
        altText
      )
      : 'No text provided';

  return (
    <Card className={styles.container}>
      <CardContent>
        <Typography
          className={styles.ArticleTitle}
          gutterBottom
          variant='h2'
          component='h2'
        >
          {newsTitle}
        </Typography>
        <CardHeader subheader={newsDate} />
        <hr />
        <div className={styles.imagesContainer}>
          <CardMedia
            className={styles.media}
            image={newsImage}
            title={newsTitle}
            alt={newsTitle}
            component='div'
          />
        </div>
        <Typography
          variant='body2'
          color='textSecondary'
          component='div'
          className={styles.newsText}
        >
          {newsText}
        </Typography>
        <iframe
          className={newsVideo ? 'disp-block' : 'disp-none'}
          title={newsTitle}
          width='100%'
          height='600'
          src={newsVideo}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
        <hr />
        <div className={styles.newsAuthorFooter}>
          <CardHeader subheader={newsAuthor} />
          <CardMedia
            className={styles.authorAvatar}
            image={newsAuthorAvatar}
            title={newsTitle}
            component='div'
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default withRouter(NewsDetailPage);
