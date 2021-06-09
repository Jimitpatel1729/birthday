import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    background: "white",
    background: "linear-gradient(to right bottom,rgba(255, 255, 255, 0.3),rgba(255, 255, 255, 0.1))",
    zIndex: 2,
    backdropFilter: 'blur(2rem)',
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#826e94',
    
  },
  image: {
    marginLeft: '15px',
  },
  glass: {
    
    // min-height: 80vh;
    // width: 60%;
   
    borderRadius: '2rem',
    
    display: 'flex',
  }
}));
