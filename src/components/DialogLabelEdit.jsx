import React, { Component } from 'react';
import { ListItem, ListItemIcon, ListItemText, InputBase } from '@material-ui/core';
import Label from "@material-ui/icons/Label";
import Delete from "@material-ui/icons/Delete";
import Done from "@material-ui/icons/Done";
import Edit from "@material-ui/icons/Edit"
class DialogLabelEdit extends Component {
constructor(props){
    super(props)
    this.state={
        ishover:false,
        isRename:false
    }
}

handleMouseEnter=()=>{
    this.setState({
        ishover:true
    })
}

handleMouseLeave=()=>{
    this.setState({
        ishover:false
    })

}
handleEditIcon=()=>{
    this.setState({
        isRename:true
    })
}

    render() {
        return (
            <ListItem onMouseEnter={this.handleMouseEnter} 
            onMouseLeave={this.handleMouseLeave} className="DialogLabelEdit" 
            key={this.props.label.id}> 
            {this.state.ishover
            ?<ListItemIcon><Delete oncClick={this.deleteLabel}/></ListItemIcon>
            :<ListItemIcon><Label/></ListItemIcon>
            }

            <div className="Editlabel">
                {this.state.isRename 
                ? <ListItem>
                <ListItemText>
                    <InputBase
                    className=""
                    defaultValue={this.props.label.label}
                    />
                 
                </ListItemText>
               <ListItemIcon>
                    <Done/>
                    </ListItemIcon>
            </ListItem>
            :    <ListItem>
                 <ListItemText><p>{this.props.label.label}</p></ListItemText>
            <ListItemIcon>
                <Edit onClick={this.handleEditIcon} 
                className="EditLabelTool"/></ListItemIcon></ListItem>}

            


            </div>

        

            
            
            </ListItem>
        );
    }
}

export default DialogLabelEdit;

{/* <ListItem  key={label.id}><ListItemIcon><Label/></ListItemIcon><p>{label.label}</p><ListItemIcon><Edit className="EditLabelTool"/></ListItemIcon></ListItem> */}