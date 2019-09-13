import React, { Component } from 'react';
//import { GetAllTrashed } from "../Services/userServices";

import NoteCard from './NoteCard';
import Grid from '@material-ui/core/Grid';
 //const noteService=new userServices().GetAllTrashed
class GetAllTrashed extends Component {
    constructor(props){
        super(props)
        
        this.state={
            
            trash:props.trashedNotes
               
        }
    }
   
    
   
    render() {
        const list=this.props.layout? "getAllNote" : "getAllNoteList"

        // console.log("DATA in STATE", this.props.trashedNotes)

        const datamap = this.props.trashedNotes.map((note)=>{
            console.log("========================>",note);
           
            return (
                    <NoteCard getTrashedNotes={this.props.getTrashedNotes} layout={this.props.layout} key={note._id} noteData={note}/>
            )
        })
      
        return (
            <Grid container className={list} style={{width:"70%", marginLeft:"15%"}}>
                {datamap}
                </Grid>
                
            
        );
    }
}

export default GetAllTrashed;