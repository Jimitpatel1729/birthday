
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    
    },
  },
  paper: {
    padding: theme.spacing(2),
    background: "white",
    background: "linear-gradient(to right bottom,rgba(255, 255, 255, 0.3),rgba(255, 255, 255, 0.1))",
    zIndex: 2,
    backdropFilter: 'blur(2rem)',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
