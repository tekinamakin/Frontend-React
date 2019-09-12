import React, { Component } from 'react';
//import { getAllNotes } from "../Services/userServices";
import {getAllNotes} from '../Services/userServices'
import NoteCard from './NoteCard';
import Grid from '@material-ui/core/Grid';
 //const noteService=new userServices().getAllNotes
class GetAllNotes extends Component {
    constructor(props){
        super(props)
        
        this.state={
            
            notes:[],
            h1Data:[]    
        }
    }
    componentDidMount (){
        this.getAllNoteData()
     //await   fetch("http://localhost:7777/getAllNotes",{header:{"token":token}})
    }

    getAllNoteData=(event)=>{
        getAllNotes()
        .then(res=> {
        console.log(res);
        this.setState({
            h1Data:res.data
        })
        })
        .catch(error=>{
            console.log(error)
        })    
    }
    
   
    render() {
        const list=this.props.layout? "getAllNote" : "getAllNoteList"

        console.log("DATA in STATE", this.state.h1Data)

        const datamap = this.state.h1Data.map(note=>{
            console.log("========================>",note);
           
            return (
                    <NoteCard getAllNoteData={this.getAllNoteData} layout={this.props.layout} key={note._id} noteData={note}/>
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