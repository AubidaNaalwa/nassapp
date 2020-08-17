import React, { useState } from 'react';
import axios from 'axios';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
  fit: {
    width: '100%',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  const [searchField, setSearchField] = useState('');

  const onInputChange = (event) => {
    setSearchField(event.target.value);
  };

  const onButtonSubmit = () => {
    axios(`https://images-api.nasa.gov/search?q=${searchField}`).then((res) => {
      const data = res.data.collection.items.map((i) => ({
        title: i.data[0].title,
        date: i.data[0].date_created,
        description: i.data[0].description,
        img: i.links[0].href,
      }));
      console.log(data);
    });
  };

  return (
    <div className={classes.fit}>
      <AppBar position="static">
        <Toolbar position="sticky">
          <div className={classes.searchIcon}></div>
          <div className={classes.search}>
            <InputBase
              onChange={onInputChange}
              placeholder="Planets, Galaxies..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <SearchIcon onClick={onButtonSubmit} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
