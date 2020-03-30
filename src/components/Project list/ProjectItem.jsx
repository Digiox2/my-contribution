import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});



const ProjectItem = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                   {props.repoPath}
        </Typography>
                <Typography variant="h5" component="h2">
                   {props.repoName}
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.repoUrl}
        </Typography>
                <Typography variant="body2" component="p">
                    {props.repoDesc ? props.repoDesc : `Un repo public de ${props.repoOwner}`}
                </Typography>
            </CardContent>
            <CardActions>
                <a href={props.repoUrl} target="_blank" rel="noopener noreferrer">
                <Button size="small">Voir le repo...</Button>
                </a>
            </CardActions>
        </Card>
    );
}

export default ProjectItem;