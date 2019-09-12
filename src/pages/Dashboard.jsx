import React, { Component } from 'react';
import CreateNote from '../components/CreateNote';
import PrimarySearchAppBar from '../components/Appbar';
import GetAllNotes from '../components/GetAllNotes';
import {getAllTrashedNotes} from '../Services/userServices';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: false,
            isTrashed:[]
        }
    }


    changeGrid = () => {
        this.setState({
            list: !this.state.list
        })
    }

//get all trashed notes
   getAllTrashedNotes(){

    getAllTrashedNotes()
    .then(res=> {
    console.log(res);
    this.setState({
        isTrashed:res.data
    })
    })
    .catch(error=>{
        console.log(error.response.data)
    })    
       
   }

    render() {

        console.log("this is my dashboard render", this.state.list);

        return (
            <div>
                <PrimarySearchAppBar changeGrid={this.changeGrid} />
                <div>
                    <CreateNote />
                </div>
                    <GetAllNotes layout={this.state.list} />


            </div>
        );
    }
}

export default Dashboard;