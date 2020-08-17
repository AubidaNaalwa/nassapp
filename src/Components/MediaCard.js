import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FlareIcon from '@material-ui/icons/Flare';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import '../Styles/MediaCard.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const { data, toggleFavorite } = props;

  return (
    <Card className={`${classes.root} card-container`}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={data.title}
          height={data.id === 'home' ? '350' : '150'}
          image={data.img}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          {data.id === 'home' && (
            <Typography variant="body2" color="textSecondary" component="p">
              {data.description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      {data.id !== 'home' && (
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => toggleFavorite(data)}
          >
            {data.isFavorite ? (
              <RemoveCircleOutlineIcon color="secondary" />
            ) : (
              <FlareIcon color="primary" />
            )}
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
