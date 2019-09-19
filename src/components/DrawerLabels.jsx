import React, { Component } from 'react';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Label from "@material-ui/icons/Label";

class DrawerLabels extends Component {
    constructor(props){
        super(props);
        this.state={
            label:props.label
        }
    }
    render() {
        return (
            <ListItem className="DrawerLabel">
               <ListItemIcon><Label/> </ListItemIcon> <ListItemText>{this.props.label.label}</ListItemText>
            </ListItem>
        );
    }
}

export default DrawerLabels;
