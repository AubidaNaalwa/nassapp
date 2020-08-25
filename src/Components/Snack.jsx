import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import FlareIcon from '@material-ui/icons/Flare';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomizedSnackbars(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>
        {props.status === 'toAdd' ? (
          <FlareIcon color="primary" />
        ) : (
          <RemoveCircleOutlineIcon color="secondary" />
        )}
      </Button>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        {props.status === 'toAdd' ? (
          <Alert onClose={handleClose} severity="success">
            Added To Favorites
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="warning">
            Removed From Favorites
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}
