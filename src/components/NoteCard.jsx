import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardActions, Dialog, DialogTitle, InputBase, Divider, DialogContent, DialogActions } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import DialogBox from './DialogBox'
import ColorPalette from './ColorPalette';
import { updateNote } from "../Services/userServices";
class NoteCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openDialog:false,
            openD: "",
            open: true,
            dialogOpen: false ,
            color: "#fff",
            noteCard: "block",
            noteCardPopUp: "none",
            title:props.noteData.title,
            description:props.noteData.description


        }
        this.openDialog = this.openDialog.bind(this)
    }
    async openDialog() {
        await this.setState({
            open: !this.state.open

        })

    }

    noteColor = (data) => {
        this.setState({
            color: data
        })
        console.log("noteColor", this.state.color);

    }
    handleNotePopUp = event => {

        this.setState({
            // dialogOpen:true,
            // noteCard: "none",
            // noteCardPopUp: "block"
            openDialog:true

        })

    }

    handleNotePopUpClose = event => {
        this.setState({
            // noteCard: "block",
            // noteCardPopUp: "none"
            openDialog:false        })

    }

    handleOnChange= e=>{
        console.log("title===>"+e.target.value);
 this.setState({
        [e.target.name]:e.target.value

    })
    console.log("title 2===>"+this.state.title);
    console.log("title 2===>"+this.state.description);
    
    }

    updateNote=()=>{
    var noteData={
        noteID:this.props.noteData._id,
        title:this.state.title,
        description:this.state.description
    }
    console.log("printing noteData before sending to updateNote",noteData)
    updateNote(noteData)
    .then((res)=>{
    
    this.setState({
        openDialog:false
    })
    this.props.getAllNoteData()

    })
    .catch((err) => {
        console.log('error===>',err);
        
    });
    
   }


    render() {
      const  noteCardShadow="3px 5px 10px grey"
        const layout = this.props.layout ? "noteCard" : "noteCardList"
        let displayNote="block"
        let displayDialog="none"
        if(this.state.openDialog){
            displayNote="none",
            displayDialog="block"
        }


        return (
            <div>
                <Card className={layout} style={{ background: this.state.color, display: displayNote,boxShadow:noteCardShadow }}>
                    <CardContent className="cardContent" onClick={this.handleNotePopUp}>

                        <div className='title'>{this.props.noteData.title}</div>
                        <div className='description'>{this.props.noteData.description}</div>
                    </CardContent>
                    <CardActions >
                        <div className="flex-container">
                            <div ><img src={require("../assets/images/reminder.svg")} alt="reminder" /></div>
                            <div ><img src={require("../assets/images/collaborator.svg")} alt="collab" /></div>
                            <div><ColorPalette note_id={this.props.noteData._id} noteColor={this.noteColor} /></div>
                            <div><img src={require('../assets/images/addimage.svg')} alt="addImage" /></div>
                            <div><img src={require("../assets/images/archive.svg")} alt="archive" /></div>
                            <DialogBox onClick={this.openDialog} note_id={this.props.noteData._id}
                                openD={this.state.open}
                            />
                        </div>
                    </CardActions>

                </Card>

                <Dialog  open={this.state.openDialog} className="noteCardPopUp" style={{ display: displayDialog ,width:"90%", height:"auto"}}>
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
                            <div onClick={this.updateNote}>close</div>

                        </div>
                        
                    </DialogActions>
                </Dialog>
         </div>
        );
        
    }

}

export default NoteCard;