import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NoProjects from './NoProjects';
import ProjectItem from './ProjectItem';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "wrap"
    }
});



const displayCards = (datas) => datas.map((itemObject, key) => (<ProjectItem key={key} 
    repoOwner={itemObject.repoOwner}
    repoPath={itemObject.repoPath}
    repoName={itemObject.repoName}
    repoUrl={itemObject.repoUrl}
    repoDesc={itemObject.repoDesc} />));

const OSPList = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                props.datas.length < 1 ? <NoProjects /> : displayCards(props.datas)
            }
        </div>
    );
}

export default OSPList;