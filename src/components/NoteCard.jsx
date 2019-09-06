import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardActions } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import DialogBox from './DialogBox'

class NoteCard extends Component {
constructor(props){
super(props)
this.state={
    
    openD:"",
    open:true
}
this.openDialog=this.openDialog.bind(this)
}
async openDialog(){
await this.setState({
    open:!this.state.open

})

}

    render() {
        const layout=this.props.layout?"noteCard":"noteCardList"
        
        return (
                <div>
                <Card className={layout} >
                    <CardContent className="cardContent"> 
                  
                    <div className='title'>{this.props.noteData.title}</div>
                    <div className='description'>{this.props.noteData.description}</div>
                    </CardContent>
                    <CardActions >
                    <div className="flex-container">
                    <div ><img src={require("../assets/images/reminder.svg")} alt="reminder"/></div>     
                    <div ><img src={require("../assets/images/collaborator.svg")} alt="collab"/></div>
                    <div><img src={require("../assets/images/colorPallete.svg")} alt="colorPallete"/></div>  
                   <div><img src={require('../assets/images/addimage.svg')}   alt="addImage" /></div>   
                    <div><img src={require("../assets/images/archive.svg")} alt="archive"/></div>    
                    <DialogBox onClick={this.openDialog} note_id={this.props.noteData._id}
                    openD={this.state.open}
                    />
                    </div>
                    </CardActions>
                    
                </Card>
            
                </div>




        );
    }
}

export default NoteCard;