import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {IconButton} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    root: {
        padding: "0!important",
        overflow: "auto",
        backdropFilter: "blur(2em)",
        backgroundColor: "transparent",
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
        paddingBottom: "0.5em",
        maxWidth: "70em",
        marginRight: "auto",
        marginLeft: "auto",
        height: "auto",
    },
    details: {
        padding: "0!important",
        display: 'flex',
        flexDirection: 'column',
        width: "70%",
        color: "white",
        [theme.breakpoints.down('md')]: {
            textAlign: "center",
            marginRight: "auto",
            marginLeft: "auto",
        },
    },
    content: {
        padding: "0!important",
        flex: '1 1 auto',
        width: "fit-content",
        [theme.breakpoints.up('md')]: {
            textAlign: "left",
        },
        [theme.breakpoints.down('md')]: {
          textAlign: "center",
        },
            marginTop: "5vh",
        color: "white",
    },

    title: {
        marginTop: 0,
        marginBottom: "0.5em",
        fontSize: "175%",
        fontWeight: "bold",
        color: "white",
        [theme.breakpoints.down('md')]: {
            padding: 0,
            textAlign: "center",
            width: "100%",
        },
    },
    cover: {
        height: 256,
        width: "auto",
        marginTop: "5vh",
        [theme.breakpoints.up('md')]: {
            marginRight: 40,
            marginLeft: "5vw",
        },
        [theme.breakpoints.down('md')]: {
            height: 128,
          textAlign: "center",
            margin: "7vh auto auto auto",
        },
    },
    download: {
        width: "fit-content",
        [theme.breakpoints.down('md')]: {
            margin: "auto",
            paddingTop: "0.4em",
        },
    },
    controls: {
        display: 'flex',
        width: "100%",
        [theme.breakpoints.down('md')]: {
            margin: "auto",
            justifyContent: "center",
        },

    },

}));

const GameCardHoriz= ({title, logo, description, appleStoreLink, playStoreLink}) => {
    const classes = useStyles();
    const theme = useTheme();

    const alt_logo_text = `${title} logo`;
    const alt_appstore_text = `Download ${title} on App Store`
    const alt_playstore_text = `Download ${title} on Google Play`

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                className={classes.cover}
                image={logo}
                title={alt_logo_text}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h3" variant="h3" align="left" className={classes.title}>
                        {title}
                    </Typography>
                    <Typography variant="h5">
                        {description}
                    </Typography>
                    <Divider style={{backgroundColor: "lightgray", height: 2, marginTop: "1.5em"}} />
                    <h3 className={classes.download}>Available on</h3>
                </CardContent>

                <div className={classes.controls}>
                    {playStoreLink && <IconButton aria-label={alt_playstore_text }>
                        <div className="store-btn">
                            <a href={playStoreLink} target="_blank" rel="noopener">
                                <img className="google-badge" alt={alt_playstore_text}
                                     src="./assets/google-play-badge.png"/>
                            </a>
                        </div>
                    </IconButton>
                    }

                    {appleStoreLink && <IconButton aria-label={alt_appstore_text}>
                        <div className="store-btn">
                            <a href={appleStoreLink} target="_blank" rel="noopener">
                                <img className="apple-badge" alt={alt_appstore_text}
                                     src="./assets/Apple-download-on-the-app-store-badge.png" />
                            </a>
                        </div>
                    </IconButton>
                    }
                </div>
            </div>
        </Card>
    );
}

export default GameCardHoriz;