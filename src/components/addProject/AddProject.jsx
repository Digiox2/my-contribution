import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import firebase from "../../firebase-config/firebaseConfig";
import Button from '@material-ui/core/Button';
import signInProvider from "../Github interface/signInProvider";
import SubmitProject from "../submitProject/SubmitProject.jsx"

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const suggestGithubConnect = () => {
  return (
    <div>
      <h2>Connectez-vous avec Github</h2>
      <Button onClick={() => signInProvider()} variant="contained" color="primary">
        Je me connecte
</Button>
    </div>
  )
}

const user = firebase.auth().currentUser;
console.log("User",user)
const AddProject = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null)
  useEffect(() => {
    if (props.show === true) {
      !open && handleOpen();
    } else {
      open && handleClose();
    }
  })
  const handleOpen = () => {
    setOpen(true);
    props.callBack(true)
  };

  const handleClose = () => {
    setOpen(false);
    props.callBack(false)
  };
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setUser(user)
      console.log("user obj", user)
    }
  });
  return (

    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={() => handleClose()}
    >
      <div className={classes.paper}>
        {!user ? suggestGithubConnect() : <h1>test</h1>}
      </div>
    </Modal>

  );
}

export default AddProject;