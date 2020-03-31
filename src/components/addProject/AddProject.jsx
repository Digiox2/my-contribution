import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import firebase from "../../firebase-config/firebaseConfig";
import SubmitProjectModal from "./SubmitProjectModal.jsx"
import suggestGithubConnect from '../Github interface/SuggestGithubConnect.jsx'

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

const AddProject = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null)
  useEffect(() => {
    if (user === null) {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          setUser(user)
        }
      });
    }
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

  return (

    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={() => handleClose()}
    >
      <div className={classes.paper}>
        {!user ? suggestGithubConnect() : <SubmitProjectModal userData={user} />}
      </div>
    </Modal>

  );
}

export default AddProject;