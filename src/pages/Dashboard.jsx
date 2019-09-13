import React, { Component } from 'react';
import CreateNote from '../components/CreateNote';
import PrimarySearchAppBar from '../components/Appbar';
import GetAllNotes from '../components/GetAllNotes';
import { getAllTrashedNotes } from '../Services/userServices';
import { getAllNotes } from '../Services/userServices'
import GetAllTrashed from '../components/GetAllTrashed';
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: false,
            trashedNotes: [],
            notesArray: [],
            trashed: false,
            archive:false,
            reminder:false
        }
    
    }

   getTrashedNotes = () => {
        // this.setState({
        //     trashed: true
        // })
        // console.log("value of trashed in dashboared==>"+this.state.trashed);
        

        getAllTrashedNotes()
            .then(res => {
                console.log(res.data);
                this.setState({
                    trashedNotes: res.data,
                    trashed: true
                })
            })
            .catch(error => {
                console.log(error.response)
            })
    }


    changeGrid = () => {
        this.setState({
            list: !this.state.list
        })
    }

    //get all trashed notes
    //    getAllTrashedNotes=()=>{



    //    }


    //    getAllNoteData=(event)=>{
    //     getAllNotes()
    //     .then(res=> {
    //     console.log(res);
    //     this.setState({
    //         notesArray:res.data
    //     })
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })    
    // }

    componentDidMount() {
        this.getAllNoteData()

    }



    getAllNoteData = () => {
        console.log("getAllNote from dashboard");

        getAllNotes()
            .then(res => {
                console.log("===123==>", res.data);
                this.setState({
                    notesArray: res.data
                })
                console.log("after setstate in getallnoteData");

            })
            .catch(error => {
                console.log(error)
            })
    }



    render() {

        //console.log("this is my dashboard render", this.state.list);

        return (
            <div>
                <PrimarySearchAppBar getTrashedNotes={this.getTrashedNotes} changeGrid={this.changeGrid} />
                <div>
                    <CreateNote getAllNoteData={this.getAllNoteData} />
                </div>
                <div>
                    {this.state.trashed == false
                        ?
                         <GetAllNotes getAllNoteData={this.getAllNoteData} notes={this.state.notesArray} layout={this.state.list} />
                        :
                         <GetAllTrashed getTrashedNotes={this.getTrashedNotes} trashedNotes={this.state.trashedNotes} layout={this.state.list} />

                    }       </div>
            </div>
        );
    }
}

export default Dashboard;