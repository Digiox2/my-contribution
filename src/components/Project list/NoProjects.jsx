import React from 'react';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import firebase from "../../firebase-config/firebaseConfig"
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        width: "20%"
    },
    centeredEmptyListMessage: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexDirection: "column"
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
    },
}));
const db = firebase.firestore()

const NoProjects = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleButtonClick = () => {
        console.log("CLIIIICK")
        db.collection('repos').add({
            data1: "i am a DATA",
            link: "iamalink.com",
            age: 30
        }).then(
            (success) => {
                console.log("Datas successfully added => id = ", success.id)
            }
        ).catch(function (error) {
            console.error("Error adding document: ", error);
        });
    }


    return (
        <div className={classes.centeredEmptyListMessage}>
             <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
             <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
            <h2>Oops, Our dataBase seems to be empty,
        It may just be temporary</h2>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() => { handleButtonClick() }}
            >
                Add a new project to our dataBase
      </Button>
        </div>
    );
}

export default NoProjects;