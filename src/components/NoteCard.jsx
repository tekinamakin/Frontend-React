import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardActions, Dialog, DialogTitle, InputBase, Divider, DialogContent, DialogActions, Chip } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import DialogBox from './DialogBox'
import ColorPalette from './ColorPalette';
import { updateNote } from "../Services/userServices";
import ReminderComponent from './ReminderComponent';
class NoteCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openDialog: false,
            openD: "",
            open: true,
            dialogOpen: false,
            color: props.noteData.color,
            noteCard: "block",
            noteCardPopUp: "none",
            title: props.noteData.title,
            description: props.noteData.description,
            noteData: props.getAllNoteData,
            reminder: props.noteData.reminder


        }
        this.openDialog = this.openDialog.bind(this)
    }
    async openDialog() {
        await this.setState({
            open: !this.state.open

        })

    }

    componentDidMount() {
        console.log("this.state, ", this.state);

    }


    noteColor = (data) => {
        this.setState({
            color: data
        })
        console.log("noteColor", this.state.color);

        let color = {
            "noteID": this.props.noteData._id,
            "color": data
        }
        updateNote(color)
            .then(res => {

                console.log("response for color", res);
                this.props.getAllNoteData()
            })
            .catch(error => {
                console.log("Error occured during updating color", error);

            })

    }
    handleNotePopUp = event => {

        this.setState({
            // dialogOpen:true,
            // noteCard: "none",
            // noteCardPopUp: "block"
            openDialog: true

        })

    }

    handleNotePopUpClose = event => {
        this.setState({
            // noteCard: "block",
            // noteCardPopUp: "none"
            openDialog: false
        })

    }

    handleOnChange = e => {
        console.log("title===>" + e.target.value);
        this.setState({
            [e.target.name]: e.target.value

        })
        console.log("title 2===>" + this.state.title);
        console.log("title 2===>" + this.state.description);

    }

    updateNote = () => {
        var noteData = {
            noteID: this.props.noteData._id,
            title: this.state.title,
            description: this.state.description,
            reminder:this.state.reminder
        }
        console.log("printing noteData before sending to updateNote", noteData)
        updateNote(noteData)
            .then((res) => {

                this.setState({
                    openDialog: false
                })
                this.props.getAllNoteData()
                console.log("checking getallNote for reminders",res);
                

            })
            .catch((err) => {
                console.log('error===>', err);

            });

    }

    reminderChange = (data) => {
        this.setState({
            reminder: data
        })
        console.log(this.state.reminder);

    }



    deleteReminder = () => {
        let reminderDelete = {
            'noteID': this.props.noteData._id,
            "reminder": null
        }
        updateNote(reminderDelete)
            .then(res => {
                console.log("response from reminderUpdate==>", res.data.reminder);


                this.setState({
                    menuopen: false,
                    reminder: null
                })
            })
            .catch(error => {
                console.log("Error occured during updating reminder", error);
            })


    }

    // updateColor=()=>{

    // }


    render() {



        let reminderChip = this.state.reminder

        if (reminderChip != null) {
            reminderChip = <Chip
                style={{ marginRight: 30 }}
                label={this.state.reminder}
                onDelete={this.deleteReminder} />
        }


        const noteCardShadow = "3px 5px 10px grey"
        const layout = this.props.layout ? "noteCard" : "noteCardList"
        let displayNote = "block"
        let displayDialog = "none"
        if (this.state.openDialog) {
            displayNote = "none"
            displayDialog = "block"
        }


        return (
            <div>
                <Card className={layout} style={{ background: this.state.color, display: displayNote, boxShadow: noteCardShadow }}>
                    <CardContent className="cardContent" onClick={this.handleNotePopUp}>

                        <div className='title'>{this.props.noteData.title}</div>
                        <div className='description'>{this.props.noteData.description}</div>
                        {reminderChip}
                    </CardContent>
                    <CardActions >
                        <div className="flex-container">
                            <div ><ReminderComponent note_id={this.props.noteData._id} noteData={this.state.noteData}  /></div>
                            <div ><img src={require("../assets/images/collaborator.svg")} alt="collab" /></div>
                            <div><ColorPalette note_id={this.props.noteData._id} noteColor={this.noteColor} /></div>
                            <div><img src={require('../assets/images/addimage.svg')} alt="addImage" /></div>
                            <div><img src={require("../assets/images/archive.svg")} alt="archive" /></div>
                            <DialogBox onClick={this.openDialog} note_id={this.props.noteData._id}
                                noteData={this.state.noteData} openD={this.state.open}
                            />
                        </div>
                    </CardActions>

                </Card>

                <Dialog open={this.state.openDialog} className="noteCardPopUp" style={{ display: displayDialog }}
                    PaperProps={{
                        style: {
                            width: "90%",
                            height: "auto"
                        }
                    }}>
                    <DialogTitle>
                        <InputBase
                            name="title"
                            style={{ width: "90%" }}
                            multiline={true}
                            defaultValue={this.state.title}
                            className="EditTitle"
                            placeholder="Title"
                            onChange={this.handleOnChange} />
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                        <InputBase
                            name="description"
                            style={{ width: "90%" }}
                            multiline={true}
                            defaultValue={this.state.description}
                            className="EditDescription"
                            placeholder="Note"
                            onChange={this.handleOnChange} />

                    </DialogContent>
                    <DialogActions>

                        <div className="flex-container">
                            <div ><img src={require("../assets/images/reminder.svg")} alt="reminder" /></div>
                            <div ><img src={require("../assets/images/collaborator.svg")} alt="collab" /></div>
                            <div><ColorPalette note_id={this.props.noteData._id} noteColor={this.noteColor} /></div>
                            <div><img src={require('../assets/images/addimage.svg')} alt="addImage" /></div>
                            <div><img src={require("../assets/images/archive.svg")} alt="archive" /></div>

                            <DialogBox onClick={this.openDialog} note_id={this.props.noteData._id}
                                openD={this.state.open}
                            />
                            <div onClick={this.updateNote} style={{ marginLeft: "55%" }}>close</div>

                        </div>

                    </DialogActions>
                </Dialog>
            </div>
        );

    }

}

export default NoteCard;