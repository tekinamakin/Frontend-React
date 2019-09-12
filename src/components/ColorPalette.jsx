import React, { Component } from 'react';
import { Menu,  Avatar, Grid } from '@material-ui/core';


class ColorPalette extends Component {
    constructor(){
        super();
 
        this.state={

            menuOpen:false,
            anchorEl:null,
            colors:[
                {values:"#fff"},
                {values:"#f28b82"},
                {values:"#fbbc04"},
                {values:"#fff475"},
                {values:"#ccff90"},
                {values:"#a7ffeb"},
                {values:"#cbf0f8"},
                {values:"#aecbfa"},
                {values:"#d7aefb"},
                {values:"#fdcfe8"},
                {values:"#e6c9a8"},
                {values:"#e8eaed"}
                          ]
                } 
            
            
            }
    handleMenu=(event)=>{

        this.setState({
            menuOpen:true,
            anchorEl:event.target
        })
    }
    changeColor=(e)=>{

        // this.setState({

        //     color:e.target.id
        // })

        this.props.noteColor(e.target.id);
        this.handleMenuClose()
        
        console.log("++++++",e.target.id);
        
    }

    handleMenuClose=(event)=>{

        this.setState({
            menuOpen:false,
            anchorEl:null
        })
    }
    //'noteID':this.props.note_id



    render() {
        const colorSet=this.state.colors.map((color)=>{

            return <Avatar 
            id={color.values}
            key={color.values}
            onClick={this.changeColor}
            style={{
                background:color.values,
                height:25,
                width:25,
                borderColor:"grey",
                borderStyle:"solid",
                borderWidth:1,
                margin:1
            }}

            />
            
            
        })
        return (
            <div>
                    <img 
                    src={require("../assets/images/colorPallete.svg")} 
                    alt="colorPallete"
                    onClick={this.handleMenu}/>
                <Menu id="ColorMenu" onClose={this.handleMenuClose} anchorEl={this.state.anchorEl} open={this.state.menuOpen}>
                <Grid 
                container
                justify="space-evenly"
                style={{width:120}}>
                {colorSet}

                </Grid>
                
                </Menu>
            </div>
        );
    }
}

export default ColorPalette;