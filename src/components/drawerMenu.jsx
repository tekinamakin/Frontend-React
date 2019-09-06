/***************************************************************************************
 * @Purpose     : To Create for making Drawer Menu
 * @file        : drawerMenu.jsx
 * @author      : Anuj
 * @since       : 08/07/2019
 **************************************************************************************/
import React, { Component } from 'react'
import {MenuItem,Drawer,Divider, Button} from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { getAllLabel } from "../services/noteServices";
import EditLabel from '../components/editLabel'
//import { height } from '@material-ui/system';
//import {getNotes} from '../services/noteServices'
import {Archive, DeleteOutlineRounded,CreateOutlined,LabelOutlined, BarChart} from "@material-ui/icons"
const theme = createMuiTheme({
    overrides : {
        MuiDrawer : {
            paper : {
                72 :{
            top: "7px",
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
    }
})
// import MenuIcon from '@material-ui/icons/Menu';
// import IconButton from '@material-ui/core/IconButton'
// import List from '@material-ui/core/List'
// import {ListItemIcon} from '@material-ui/icons'
class DrawerMenu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            archiveOpen : false,
            trashOpen  : false,
            reminderOpen : false,
            open    : false,
            label   : [],
            noteAnalysis : false
        }
        this.showArchiver = this.showArchiver.bind(this)
        this.handleReminder = this.handleReminder.bind(this)
        this.handleNotes = this.handleNotes.bind(this)
        this.showTrash = this.showTrash.bind(this)
        this.editLabelHandler = this.editLabelHandler.bind(this)
        this.closeEditLabelDialog = this.closeEditLabelDialog.bind(this)
        this.showLabel = this.showLabel.bind(this)
        this.noteAnalysis = this.noteAnalysis.bind(this)
        
        this.newLabel = this.newLabel.bind(this)
        
    }
    async handleNotes(){
        await this.setState({
            archiveOpen : false,
            trashOpen :false,
            reminderOpen : false,
            noteAnalysis : false
        })
        this.props.makeLabelFalse()
        this.props.archiveOpen(this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen,this.state.noteAnalysis)
        console.log("handle Notes ==>",this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen,this.state.noteAnalysis);
        
    }
    async showArchiver(){
        await this.setState({
            archiveOpen : true,
            trashOpen :false,
            reminderOpen : false,
            noteAnalysis : false
        })
        this.props.makeLabelFalse()
        this.props.archiveOpen(this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen,this.state.noteAnalysis)    
        console.log("Archive Notes ==>",this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen,this.state.noteAnalysis);    
    }
    async showTrash(){
        await this.setState({
            archiveOpen : false,
            trashOpen :true,
            reminderOpen : false,
            noteAnalysis : false
        })
        this.props.makeLabelFalse()
        this.props.archiveOpen(this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen,this.state.noteAnalysis)   
        console.log("Trash Notes ==>",this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen,this.state.noteAnalysis);     
    }
    async handleReminder(){
        await this.setState({
            archiveOpen : false,
            trashOpen :false,
            reminderOpen : true,
            noteAnalysis : false
        })
        this.props.makeLabelFalse()
        this.props.archiveOpen(this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen,this.state.noteAnalysis)        
        console.log("Reminder Notes ==>",this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen,this.state.noteAnalysis);
    }
    async noteAnalysis(){
        console.log("props is -->",this);
        await this.setState({
            archiveOpen : false,
            trashOpen :false,
            reminderOpen : false,
            noteAnalysis : true
        })
        this.props.makeLabelFalse()
        this.props.archiveOpen(this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen,this.state.noteAnalysis)        
        console.log("Notes Analysis ==>",this.state.archiveOpen,this.state.trashOpen,this.state.reminderOpen,this.state.noteAnalysis);
        
        // this.props.props.props.history.push('/chart')
    }

    async editLabelHandler(event){
        await this.setState({
            open :  !this.state.open
        })
        // console.log("you clicked on edit Label handler",event);
        
    }
    async closeEditLabelDialog(e){
        // console.log("Edit Label Dialog Box Close",e);
        
        await this.setState({
            open : !this.state.open
        })
    }
    
    async searchlabel(value){
        // console.log("label value is ",value);
        
       await this.props.searchlabel(value)      
    }

    async showLabel(value){
        var labelArray = this.state.label
        if(value !== undefined){
            labelArray.push(value)
            await this.setState({
                label : labelArray
            })
        }
    }
    async newLabel(value){
        // console.log("label value is ==>",value);
        await this.setState({
            label : value
        })
    }
   
    componentDidMount(){
        getAllLabel()
            .then(res => {
                // console.log("All Label ==> ",res);
                this.setState({
                    label : res.data.result
                })
                // console.log("labels=>",this.state.label);
                
            })
            .catch(err => {
                console.log("Error in getting Label",err);
                
            })
    }
    render() {
        var allLabel = this.state.label
        if(this.state.label !== ""){
            allLabel = this.state.label.map(key => {
                return(
                    <MenuItem>
                            <LabelOutlined style = {{marginRight: "50px"}} />
                                <span onClick = {()=> {this.searchlabel(key.label)}}>{key.label}</span>
                    </MenuItem>
                )
            })
        }
        return (
            <MuiThemeProvider theme = {theme}>
                <div>                    
                        <Drawer
                            variant = 'persistent'
                            open = {this.props.appBarProps}
                        >
                            <MenuItem id="noteMenu" onClick={() => this.handleNotes()}>
                                <img src={require('../assests/images/note.svg')} alt="note icon"
                                    style={{ marginRight: "50px" }} />
                                Notes
                            </MenuItem>
                            <MenuItem id='reminderMenu' onClick = { () => this.handleReminder()}>
                                <img src ={require('../assests/images/reminder.svg')} alt ='reminder icon'
                                    style = {{marginRight: "50px"}} />
                                Reminder
                            </MenuItem>
                            <Divider/>
                            <div className = "drawerLabelItem" >
                                LABELS
                            </div>
                            
                                {allLabel}
                            <MenuItem onClick = {() => this.editLabelHandler()} >
                                    <CreateOutlined style ={{marginRight: "50px"}} />
                                     <span style ={{ fontSize : "14px",font : "bold"}}>Edit Labels </span>    
                            </MenuItem>
                            <Divider/>
                            <MenuItem onClick = {this.showArchiver}>
                                <Archive style = {{marginRight: "50px"}}/>
                                Archive
                            </MenuItem>
                            <MenuItem onClick = {this.showTrash}>
                                <DeleteOutlineRounded style = {{marginRight: "50px"}}/>
                                Trash
                            </MenuItem>
                            <Divider/>
                            <MenuItem onClick = {this.noteAnalysis}>
                            <BarChart style = {{marginRight: "50px"}} />
                                Note Analysis
                            </MenuItem>
                        </Drawer>                       
                    </div>
                    <EditLabel
                        editLabelDialog = {this.state.open}
                        closeEditLabelDialog = {this.closeEditLabelDialog}
                        showLabel = {this.showLabel}
                        labels = {this.state.label}
                        newLabel = {this.newLabel}
                    />
                </MuiThemeProvider>
        )
    }
}

export default DrawerMenu; 
