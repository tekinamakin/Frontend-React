import React, { Component } from 'react';
//import { getAllNotes } from "../Services/userServices";

import NoteCard from './NoteCard';
import Grid from '@material-ui/core/Grid';
 //const noteService=new userServices().getAllNotes
class GetAllNotes extends Component {
    constructor(props){
        super(props)
        
        this.state={
            
            notes:props.notes,
               
        }
    }
   
    
   
    render() {
        const list=this.props.layout? "getAllNote" : "getAllNoteList"

        console.log("DATA in STATE", this.props.notes)

        const datamap = this.props.notes.map(note=>{
            console.log("========================>",note);
           
            return (
                    <NoteCard noteArchived={this.props.noteArchived} getAllNoteData={this.props.getAllNoteData} layout={this.props.layout} key={note._id} noteData={note}/>
            )
        })
      
        return (
            <Grid container className={list} style={{width:"70%", marginLeft:"15%"}}>
                {datamap}
                </Grid>
                
            
        );
    }
}

export default GetAllNotes;