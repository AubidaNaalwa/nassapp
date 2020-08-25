import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../Styles/MediaCard.css';
import Snack from './Snack.jsx';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const { data, toggleFavorite } = props;

  const handleClick = () => {
    setTimeout(() => toggleFavorite(data), 1010);
  };

  return (
    <Card className={`${classes.root} card-container`}>
      <CardActionArea>
        <Link to={data.isFavorite ? `/favorites/${data._id}` : '#'}>
          <CardMedia
            component={data.mediaType === 'video' ? 'iframe' : 'img'}
            alt={data.title}
            height={data.id === 'big' ? '350' : '150'}
            image={data.img}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          {data.id === 'big' && (
            <Typography variant="body2" color="textSecondary" component="p">
              {data.description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      {data.id !== 'big' && (
        <CardActions>
          <Button size="small" color="primary" onClick={handleClick}>
            {data.isFavorite ? (
              <Snack status="toRemove" />
            ) : (
              <Snack status="toAdd" />
            )}
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
