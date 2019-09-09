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
            console.log(error.response.data)
        })
        
        // .then(json=>{
        //     console.log(json.data.data.data);
            
        //     this.setState({
        //         isLoaded:true,
        //         notes:json
        //     })

        // });
    
    }
    
   
    render() {
        const list=this.props.layout? "getAllNote" : "getAllNoteList"

        console.log("DATA in STATE", this.state.h1Data)

        const datamap = this.state.h1Data.map((note)=>{
            console.log("========================>",note);
            
            // return <div style={{background:"red"}} key={key._id} >
            //         <h2>{key.title}</h2>
            //         <h4>{key.description}</h4>
            //         <h5>{key.createdAt}</h5>
            // </div> 
            return (
                    <NoteCard getAllNoteData={this.getAllNoteData} layout={this.props.layout} key={note._id} noteData={note}/>
            )
        })
        // var {isLoaded,notes} = this.state

        // if(!isLoaded)
        //     return <div>Loading...</div>
        

        //testing getallnotes api on webpage 
// else
        return (
            <Grid container className={list}>
                {datamap}
                </Grid>
                
            
        );
    }
}

export default GetAllNotes;