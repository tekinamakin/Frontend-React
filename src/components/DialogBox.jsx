import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import moreIcon from '../assets/images/more.svg';
import { trashNote } from '../Services/userServices'

// const options = [
//   'Delete note',
//   'Add label',

// ];

const ITEM_HEIGHT = 48;

class DialogBox extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  noteDelete = () => {
    console.log(
      "PRINTING NOTE ID IN NOTEDELETE HANDLER OF DIALOG" + this.props.note_id
    );

    var noteDeldata = {
      'noteID': this.props.note_id,
    }
    trashNote(noteDeldata)
      .then((response) => {

        console.log('response===>', response);

        console.log("note trashed");
        this.handleClose();
        this.props.noteData()
      })
      .catch((err) => {
        console.log('error===>', err);

      });
  }

  render() {

    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <img src={moreIcon} alt="more"
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        />


        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >


          <MenuItem onClick={this.noteDelete}>
            Delete Note
          </MenuItem>

        </Menu>

      </div>
    );
  }
}

export default DialogBox;