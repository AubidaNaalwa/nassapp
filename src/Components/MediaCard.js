import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
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
          height="140"
          image={data.img}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {data.description}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => toggleFavorite(data)}
        >
          {data.isFavorite ? <ThumbDownIcon /> : <ThumbUpAltIcon />}
        </Button>
      </CardActions>
    </Card>
  );
}
