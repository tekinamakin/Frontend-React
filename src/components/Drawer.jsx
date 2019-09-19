import React, { Component } from 'react'
import { Drawer, Divider, Dialog, DialogContent, DialogTitle, InputBase, ListItem, ListItemIcon, DialogActions } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import note from "../assets/images/note.svg"
import labeledt from "../assets/images/edit.svg"
import reminder from "../assets/images/reminder.svg"
import archive from "../assets/images/archive.svg"

import AddIcon from '@material-ui/icons/Add';

import trash from "../assets/images/trash.svg"
import "../App.css"
import {DrawerLabelGet} from "../Services/userServices"
import DrawerLabels from './DrawerLabels';
import Label from "@material-ui/icons/Label";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete"
import {CreateLabel} from "../Services/userServices"
import DialogLabelEdit from './DialogLabelEdit';







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
      label:props.DrawerLabels,
      labels: [],
      open: false,
      Dopen: false,
      

    }
  }

  componentDidMount() {
    this.DrawerLabels()
    this.setState({
      labels: this.props.labels
    })

  }




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

  DrawerLabels = () => {
    DrawerLabelGet()
      .then(res => {
        this.setState({
          labels: res.data.result
        })
        console.log("response in ==>"+JSON.stringify(res.data.result));
        

      })
      .catch(error => {
        console.log("label error", error)
      })
  }

  handleDialogOpen = () => {
    this.setState({
      Dopen: true
    })
  }

  handleClose = () =>{
    this.setState({
        open:false
    })
}

getAllNoteData=()=>{
  this.props.getAllNoteData()
}

getAllArchived=()=>{
  this.props.getAllArchived()
}


getTrashedNotes=()=>{
  this.props.getTrashedNotes()
}

getAllReminder=()=>{
  this.props.getAllReminder()
}

createLabel=()=>{
 let obj={
   "label":this.state.label,

 }

CreateLabel(obj)
.then(res=>{
 console.log("Printing newly created label",res);
 this.DrawerLabels()
 
})
.catch(error=>{
  console.log("Error in creating a label",error);
  
})

}


handleDialogClose=()=>{
  this.setState({
    Dopen:false
  })
}

handleOnChange=(event)=>{
  this.setState({
    [event.target.name]:event.target.value
  })
  console.log("======>",this.state.labelName);
  
}



  render() {
    console.log("checking labels===================>",this.state.label);
    if(this.state.labels){
    var DrawerLabel = this.state.labels.map((label) => {
      return <DrawerLabels className="DrawerNote" key={label._id} label={label} />

    })
    }
    if(this.state.labels){
    var DialogLabel = this.state.labels.map((label) => {
      return (
        <DialogLabelEdit className="DialogLabelEdit"  key={label._id} label={label} />
      )
    })
  }

  

  

    return (
      <ThemeProvider theme={myDrawerTheme}>
        <div>
          
          <Drawer
            open={this.props.open}
            anchor="left"
            variant="persistent"
          >
            <div className="DrawerNote" id="notes" onClick={this.getAllNoteData} >
              <img src={note} alt="notesvg" />
              <p>Notes</p>
            </div >
          



            <div className="DrawerNote" id="reminders" onClick={this.getAllReminder} >
              <img src={reminder} alt="remindersvg" />
              <p >Reminders</p>
            </div>

            <Divider />

            <div >
              <p className="labelhead">LABELS</p>
            </div>

            <div >
               {DrawerLabel} 
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

            
            <div className="DrawerNote" id="trash"onClick={this.getTrashedNotes} style={{marginBottom:"70px"}}>
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
                width: "30%",
                height: "auto"
              }
            }}>
            <DialogTitle>
              <div>
                <InputBase
                  name="label"
                  onChange={this.handleOnChange}
                  placeholder="create new label"
                  style={{ width:"85%" }}
                />
                <span><AddIcon  onClick={this.createLabel} /></span>
              </div>
            </DialogTitle>
            <DialogContent>
              {DialogLabel}
            </DialogContent>
            <DialogActions><p onClick={this.handleDialogClose}>Done</p></DialogActions>

          </Dialog>
        </div>
      </ThemeProvider>


    )
  }
}

export default PersistentDrawerLeft