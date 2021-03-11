import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {IconButton} from "@material-ui/core";

const useStyles = theme => makeStyles({
    root: {
        maxWidth: 345,
        maxHeight: 200,
        margin: "auto",
        justifyContent: "center",
    },
    media: {           // this is the`className` passed to `CardMedia` later
        // height: "128",     // as an example I am modifying width and height
        // width: "50%",
},
});


const GameCard = ({title, logo, description, appleStoreLink, playStoreLink}) => {
    const classes = useStyles;
    const alt_logo_text = `${title} logo`;
    const alt_appstore_text = `Download ${title} on App Store`
    const alt_playstore_text = `Download ${title} on Google Play`

    return (
        <Card className={useStyles.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    alt={`${title} logo`}
                    image={logo}
                    title={title}
                    style={{backgroundSize: 'contain', backgroundRepeat: 'no-repeat', margin: "auto", height: 128, maxWidth: "50%", objectFit: "cover", marginTop: "1.6em"}}

                />
                <CardContent>
                    <Typography gutterBottom variant="h3" component="h2" align="center">
                        {title}
                    </Typography>
                    <Typography variant="h5" color="textSecondary" component="p" align="center">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
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


            </CardActions>
        </Card>
    );
};

export default withStyles(useStyles(), { withTheme: true })(GameCard);
