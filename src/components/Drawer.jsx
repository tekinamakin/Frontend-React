import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
const theme = createMuiTheme({
    overrides : {
        MuiDrawer : {
            paper : {
                
            "top": "65px",
            flex: "1 0 auto",
            width: 225,
            zindex: 1200,
            display: "flex",
            outline: "none",
            "z-index": 1200,
            "overflow-y": "auto",
                
            }
        }
    }
})

class PersistentDrawerLeft extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open:false
        }
    }
    handleClose = () =>{
        this.setState({
            open:false
        })
    }
  render() {

    return (<MuiThemeProvider theme={theme}>
        <div>
        <Drawer
          variant="persistent"
          anchor="left"
          open={this.props.open}
          onClose={this.handleClose}
          >
            <List>
            {['Notes', 'Reminders'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <img src={require('../assets/images/note.svg')} alt="note icon"
                                    style={{ marginRight: "50px" }} /> :<img src={require('../assets/images/reminder.svg')} alt="note icon"
                                    style={{ marginRight: "50px" }} ></img> }</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>   
          <Divider />
          <List>
            {['Labels', 'Edit Labels'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <img src={require('../assets/images/label.svg')} alt="note icon"
                                    style={{ marginRight: "50px" }} /> :<img src={require('../assets/images/edit.svg')} alt="note icon"
                                    style={{ marginRight: "50px" }} ></img> }</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>   
          <Divider />
          <List>
            {['Archive', 'Trash'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <img src={require('../assets/images/archive.svg')} alt="note icon"
                                    style={{ marginRight: "50px" }} /> :<img src={require('../assets/images/trash.svg')} alt="note icon"
                                    style={{ marginRight: "50px" }} ></img> }</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>   
         
        </Drawer>
        
      </div>
      </MuiThemeProvider>
    );
  }
}

// PersistentDrawerLeft.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

export default PersistentDrawerLeft