
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import Card from "@material-ui/core/Card";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import CardContent from "@material-ui/core/CardContent";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import useStyles from "./styles";
import useAStyles from "./bigStyles";
import { CardActionArea } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




export default function FullScreenDialog(props) {
  const classes = useStyles();
  const clappes = useAStyles();

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Chilanka',
        'cursive',
      ].join(','),
    fontSize: 20
    },});
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button
      title="maximise"
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        className={clappes.buts}
        startIcon={<AspectRatioIcon />}
      ></Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        
        
      >
        <AppBar>
          <Toolbar
          // className={clappes.buts}
          >
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <CardActionArea className={clappes.root}>
          <Card className={clappes.contain}>
            <CardContent>
              <CardMedia
                className={clappes.media}
                component="img"
                image={
                  props.picture ||
                  "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                }
                title={props.title}
              />
            </CardContent>
            <CardContent>
              <div className={clappes.text}>
              <ThemeProvider theme={theme}> <Typography   variant="body2" color="textSecondary" component="p">
                  {props.message}
                </Typography></ThemeProvider>
               
              </div>
            </CardContent>
          </Card>
        </CardActionArea>
      </Dialog>
    </div>
  );
}
