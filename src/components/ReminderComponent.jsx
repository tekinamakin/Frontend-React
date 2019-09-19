import React, { Component } from 'react';
import { MenuItem, Menu } from '@material-ui/core';
import { updateNote } from '../Services/userServices';

class ReminderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

            menuOpen: false,
            anchorEl: null,
        }
    }

    handleMenu = (event) => {

        this.setState({
            menuOpen: true,
            anchorEl: event.target
        })
    }

    handleMenuClose = () => {

        this.setState({
            menuOpen: false,
            anchorEl: null
        })
    }

    reminderDate = (e) => {
        var today = new Date()
        var date = today.getDate()
        today.setHours(8, 0)
        if (e.target.id === "Today") {
            today.setDate(date)
        }
        if (e.target.id === "Tomorrow") {
            today.setDate(date + 1)
        }
        if (e.target.id === "NextWeek") {
            today.setDate(date + 7)

        }


        console.log("============>", this.state.title);

        let reminderData = {

            'noteID': this.props.note_id,
            "reminder": today.toJSON(),

        }

        updateNote(reminderData)
            .then(res => {
                
                console.log("response from reminderUpdate==>", res.data);
                this.props.noteData()
                this.setState({
                    menuopen: false
                })
            })
            .catch(error => {
                console.log("Error occured during updating reminder", error);
            })
    }


    render() {
        return (
            <div>
                <img
                    src={require("../assets/images/reminder.svg")}
                    aria-controls="Reminder"
                    onClick={this.handleMenu} alt="reminder" />

                <Menu style={{ width: 250, height: 370 }}
                    open={this.state.menuOpen}
                    id="Reminder"
                    anchorEl={this.state.anchorEl}
                    onClick={this.handleMenuClose}>
                    <MenuItem>Reminder :</MenuItem>
                    <MenuItem><p id="Today" onClick={this.reminderDate}>Today</p></MenuItem>
                    <MenuItem><p id="Tomorrow" onClick={this.reminderDate}>Tomorrow</p></MenuItem>
                    <MenuItem><p id="NextWeek" onClick={this.reminderDate}>Next Week</p></MenuItem>

                </Menu>

            </div>
        );
    }
}

export default ReminderComponent;