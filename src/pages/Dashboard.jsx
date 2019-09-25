import React, { Component } from 'react';
import CreateNote from '../components/CreateNote';
import PrimarySearchAppBar from '../components/Appbar';
import GetAllNotes from '../components/GetAllNotes';
import { getAllTrashedNotes } from '../Services/userServices';
import { getAllNotes, getAllArchived, getAllReminder } from '../Services/userServices'
import { DrawerLabelGet } from "../Services/userServices"
import GetAllTrashed from '../components/GetAllTrashed'
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: false,
            trashedNotes: [],
            notesArray: [],
            trashed: false,
            archive: false,


        }
    }


    //==========get all remninder notes==========================================================//
    getAllReminder = () => {
        console.log("inside getAllReminder method in dashboard");
        this.setState({
            notesArray: []
        })
        getAllReminder()
            .then(response => {
                console.log("response data==>" + JSON.stringify(response.data.result));

                this.setState({
                    notesArray: response.data.result,
                    archive: false,
                    trashed: false
                })
            })
            .catch(error => {
                console.log("Error while getting reminder notes", error.response);

            })
    }

    //==========get all archived notes==========================================================//    
    getAllArchived = () => {

        console.log("inside getAllArchived method in dashboard");
        this.setState({
            notesArray: []
        })
        getAllArchived()
            .then(response => {
                console.log("Archive inside .then method", response.data);


                this.setState({
                    notesArray: response.data,
                    archive: true,
                    trashed: false
                })
            })
            .catch(error => {
                console.log("Error while archiving notes", error.response);

            })

    }

    //==========get all labels on drawer ==========================================================//      
    DrawerLabels = () => {
        DrawerLabelGet()
            .then(res => {
                this.setState({
                    labels: res.data.result
                })
                console.log("response in ==>" + JSON.stringify(res.data.result));


            })
            .catch(error => {
                console.log("label error", error)
            })
    }



    //==========get all trashed notes ==========================================================//  
    getTrashedNotes = () => {
        getAllTrashedNotes()
            .then(res => {
                console.log(res.data, 'in trash');
                this.setState({
                    trashedNotes: res.data,
                    trashed: true,
                    archive: false
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



    componentDidMount() {
        this.getAllNoteData()

    }


    getAllNoteData = () => {
        console.log("getAllNote from dashboard");

        getAllNotes()
            .then(res => {
                console.log("===123==>", res.data);
                this.setState({
                    notesArray: res.data,
                    trashed: false
                })
                console.log("after setstate in getallnoteData" + JSON.stringify(this.state.notesArray));


            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        //console.log("this is my dashboard render", this.state.list);

        return (
            <div>
                <PrimarySearchAppBar DrawerLabels={this.DrawerLabels} getAllReminder={this.getAllReminder} getAllNoteData={this.getAllNoteData} getAllArchived={this.getAllArchived} getTrashedNotes={this.getTrashedNotes} changeGrid={this.changeGrid} />
                <div>
                    <CreateNote getAllNoteData={this.getAllNoteData} />
                </div>
                <div>
                    {this.state.trashed === false
                        ?
                        <GetAllNotes noteArchived={this.props.noteArchived} getAllNoteData={this.getAllNoteData} notes={this.state.notesArray} layout={this.state.list} />
                        :
                        <GetAllTrashed getTrashedNotes={this.getTrashedNotes} trashedNotes={this.state.trashedNotes} layout={this.state.list} />

                    }       </div>
            </div>
        );
    }
}

export default Dashboard;