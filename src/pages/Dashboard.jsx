import React, { Component } from 'react';
import CreateNote from '../components/CreateNote'
import PrimarySearchAppBar from '../components/Appbar'
import GetAllNotes from '../components/GetAllNotes';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            list:false
        }
    }


    changeGrid=()=>{
        this.setState({
            list:!this.state.list
        })
                }

    render() {
        
        console.log("this is my dashboard render",this.state.list);
        
        return (
            <div>
                <PrimarySearchAppBar changeGrid={this.changeGrid}/>
                <div>
                <CreateNote/>
                </div>
                
                
                <GetAllNotes layout={this.state.list}/>
                    
                
                
        
            </div>
        );
    }
}

export default Dashboard;