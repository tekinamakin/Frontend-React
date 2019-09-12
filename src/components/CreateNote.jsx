import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, InputBase, CardActions, Button } from '@material-ui/core';
import { createNote } from "../Services/userServices";
import DialogBox from './DialogBox'
class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description:"",
            noteEdit: "block",
            noteEditExpand: "none",
            reminder:"",
            color:"",
            label:"",
            archive:"",
            open:true,
            openD:""
        }
        this.handleNoteExpand = this.handleNoteExpand.bind(this)
        this.createNoteData=this.createNoteData.bind(this)
    }

    async openDialog(){
        await this.setState({
            open:!this.state.open
        
        })
    }

    handleOnChange= e=>{
        console.log("title===>"+e.target.value);
 this.setState({
        [e.target.name]:e.target.value

    })
    console.log("title 2===>"+this.state.title);
    
    }

    handleNoteExpand = event => {
        this.setState({
            noteEdit: "none",
            noteEditExpand: "block"
        })
    }
    handleClose=event=>{

        this.setState({
            noteEdit:"block",
            noteEditExpand:"none"
        })
    }

    componentDidMount(){
      
        this.createNoteData()

    }

    createNoteData() {
       
            // var data = {
                
            //     title: this.state.title,
            //     description: this.state.description

            // }
            this.setState({
                noteEdit:"block",
                noteEditExpand:"none"
            })
        
            console.log("create note", this.state.title)
            createNote(this.state.title,this.state.description)                    
            .then((response) => {
                console.log('response===>',response.data);
                console.log("properties",this.props)
                
             

                // this.props.history.push('/register');
                            })
            .catch((err) => {
                console.log('error===>',err);
               
            });
        
        }

    

    render() {
       
        return (
            
            <div>
                <Card className="createnote-card" style={{ display: this.state.noteEdit }}>
                    <CardContent>
                        <InputBase
                            className="take-note-input"
                            placeholder="Take a note..."
                           
                            onClick={this.handleNoteExpand}
                        />
                    </CardContent>
                </Card>
                <Card className="createnote-card" style={{ display: this.state.noteEditExpand,height:"auto", background:"darkwhite" }}>
                    <CardContent>
                        <InputBase
                            name="title"
                            style={{ width: "80%" }}
                            multiline={true}
                            value={this.state.title}
                            className="take-note-input"
                            placeholder="Title"
                            onChange={this.handleOnChange}
                        />
                        <InputBase
                            name="description"
                            style={{ width: "80%" }}
                            multiline={true}
                            className="take-note-input"
                            placeholder="Take a note.."
                            onChange={this.handleOnChange}
                        />
                    </CardContent>
                    <CardActions> 
                    <div className="flex-container">
                    <div ><img src={require("../assets/images/reminder.svg")} alt="reminder"/></div>     
                    <div ><img src={require("../assets/images/collaborator.svg")} alt="collab"/></div>
                    <div><img src={require("../assets/images/colorPallete.svg")} alt="colorPallete"/></div>  
                   <div><img src={require('../assets/images/addimage.svg')}   alt="addImage" /></div>   
                    <div><img src={require("../assets/images/archive.svg")} alt="archive"/></div>    
                    <DialogBox onClick={this.openDialog} 
                    openD={this.state.open}
                    />
                    <Button className="closeButton" style={{ marginLeft: 200}}
                        onClick={this.createNoteData}>Close</Button>
                    </div>
                        
                    </CardActions>
                </Card>

               
                </div>
        );
    }
}


export default CreateNote;  