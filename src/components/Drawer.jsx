// import React from 'react';

// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';

// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'

// const theme = createMuiTheme({
//     overrides : {
//         MuiDrawer : {
//             paper : {

//             "top": "65px",
//             flex: "1 0 auto",
//             width: 225,
//             zindex: 1200,
//             display: "flex",
//             outline: "none",
//             "z-index": 1200,
//             "overflow-y": "auto",

//             }
//         }
//     }
// })

// class PersistentDrawerLeft extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//             open:false,

//         }
//     }
    // handleClose = () =>{
    //     this.setState({
    //         open:false
    //     })
    // }

    // getAllArchived=()=>{
    //   this.props.getAllArchived()
    // }


    // getTrashedNotes=()=>{
    //   this.props.getTrashedNotes()
    // }
//   render() {



//     return (<MuiThemeProvider theme={theme}>
//         <div>
//         <Drawer
//           variant="persistent"
//           anchor="left"
//           open={this.props.open}
//           onClose={this.handleClose}
//           >
//             <List style={{borderBottomRightRadius: "50",
// borderTopRightRadius: "50"
// }}>
//             {['Notes', 'Reminders'].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>{index % 2 === 0 ? <img src={require('../assets/images/note.svg')} alt="note icon"
//                                     style={{ marginRight: "50px" }} /> :<img src={require('../assets/images/reminder.svg')} alt="note icon"
//                                     style={{ marginRight: "50px" }} ></img> }</ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>   
//           <Divider />
//           <List>
//             {['Labels', 'Edit Labels'].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>{index % 2 === 0 ? <img src={require('../assets/images/label.svg')} alt="note icon"
//                                     style={{ marginRight: "50px" }} /> :<img src={require('../assets/images/edit.svg')} alt="note icon"
//                                     style={{ marginRight: "50px" }} ></img> }</ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>   
//           <Divider />
//           <List>
//             {['Archive', 'Trash'].map((text, index) => (
//               <ListItem button key={text}   >
//                 <ListItemIcon >{index % 2 === 0 ? <img onClick={this.getAllArchived}src={require('../assets/images/archive.svg')} alt="note icon"
//                                     style={{ marginRight: "50px" }} /> :<img onClick={this.getTrashedNotes} src={require('../assets/images/trash.svg')} alt="note icon"
//                                     style={{ marginRight: "50px" }} ></img> }</ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>   

//         </Drawer>

//       </div>
//       </MuiThemeProvider>
//     );
//   }
// }

// // PersistentDrawerLeft.propTypes = {
// //   classes: PropTypes.object.isRequired,
// //   theme: PropTypes.object.isRequired,
// // };

// export default PersistentDrawerLeft


import React, { Component } from 'react'
import { Drawer, Divider, Dialog, DialogContent, DialogTitle, InputBase } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import note from "../assets/images/note.svg"
import labeledt from "../assets/images/edit.svg"
import reminder from "../assets/images/reminder.svg"
import archive from "../assets/images/archive.svg"
// import labelIcon from "../assets/images/reminder.svg"
import AddIcon from '@material-ui/icons/Add';

import trash from "../assets/images/trash.svg"
import "../App.css"
// import NoteService from '../services/NoteService';


// const DrawerLabelGet = new NoteService().getLabels


const myDrawerTheme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        top: 65
      }

    }
  }
})


export class PersistentDrawerLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
     // labels: [],
      open: false

    }
  }

  // componentDidMount() {
  //   this.DrawerLabels()
  //   this.setState({
  //     labels: this.props.labels
  //   })

  // }




  // handleArchive = (event) => {
  //   this.props.ArchiveGet()
  // }

  // handleClick = (event) => {
  //   this.props.TrashGet()
  // }

  // handleNotes = (event) => {
  //   this.props.noteGetFunc()
  // }

  // handleReminder = (events) => {
  //   this.props.ReminderGet()
  // }

  // DrawerLabels = () => {
  //   DrawerLabelGet()
  //     .then(res => {
  //       this.setState({
  //         labels: res.data
  //       })

  //     })
  //     .catch(error => {
  //       console.log("label error", error.response.data)
  //     })
  // }

  // handleDialogOpen = () => {
  //   this.setState({
  //     Dopen: true
  //   })
  // }

  handleClose = () =>{
    this.setState({
        open:false
    })
}

getAllArchived=()=>{
  this.props.getAllArchived()
}


getTrashedNotes=()=>{
  this.props.getTrashedNotes()
}



  render() {

    // const DrawerLabel = this.state.labels.map((label) => {
    //   return <div className="DrawerNote" key={label.id}><img src={labelIcon} alt="labelsvg" /><p>{label.name}</p></div>

    // })

    // const DialogLabel = this.state.labels.map((label) => {
    //   return <div key={label.id}><p>{label.name}</p></div>
    // })



    return (
      <ThemeProvider theme={myDrawerTheme}>
        <div>
          {/* <Button onClick={this.leftDfun}>Open Left</Button> */}
          <Drawer
            open={this.props.open}
            anchor="left"
            variant="persistent"
          >
            <div className="DrawerNote" id="notes" >
              <img src={note} alt="notesvg" />
              <p>Notes</p>
            </div >
          



            <div className="DrawerNote" id="reminders" >
              <img src={reminder} alt="remindersvg" />
              <p >Reminders</p>
            </div>

            <Divider />

            <div >
              <p className="labelhead">LABELS</p>
            </div>

            <div >
              {/* {DrawerLabel} */}
            </div>

            <div className="DrawerNote">
              <img src={labeledt} alt="labelsvg" />
              <p onClick={this.handleDialogOpen}>Edit labels</p>
            </div>

            <Divider />

            <div className="DrawerNote" id="archives" onClick={this.getAllArchived} >
              <img src={archive} alt="labelsvg" />

              <p>Archive</p>
            </div>

            
            <div className="DrawerNote" id="trash"onClick={this.getTrashedNotes}>
              <img src={trash} alt="labelsvg" />

              <p>Trash</p>
            </div>

          </Drawer>

        </div>
        <div>
          <Dialog
            open={this.state.Dopen}
            PaperProps={{
              style: {
                background: this.state.color,
                width: "20%",
                height: "auto"
              }
            }}>
            <DialogTitle>
              <div>
                <InputBase
                  name="text"
                  onChange={this.handleOnChange}
                  placeholder="create new label"
                  // style={{ wid }}
                />
                <span><AddIcon onClick={this.CreateLabel} /></span>
              </div>
            </DialogTitle>
            <DialogContent>
              {/* {DialogLabel} */}
            </DialogContent>

          </Dialog>
        </div>
      </ThemeProvider>


    )
  }
}

export default PersistentDrawerLeft