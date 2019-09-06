import React, { Component } from "react"
import '../App.css'
//import { userRegister } from "../Services/userServices";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions';
import { Button } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { userRegister } from "../Services/userServices";
import Snackbar from '@material-ui/core/Snackbar';
//import { makeStyles } from '@material-ui/core/styles';
const theme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            input: {
        height: "0.2em",
        width: "150px"

            }
        },
        MuiFormControl:{
            marginNormal:{
                marginLeft:"4%"
            }
        }
    }
})


class Registration extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            openSnackBar:false,
            snackBarMessage:""


        }
        this.handlefirstNameChange = this.handlefirstNameChange.bind(this)
        this.handlelastNameChange = this.handlelastNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
    }



    handlefirstNameChange = event => {
        const firstName = event.target.value;
        this.setState({ firstName: firstName });
        console.log("firstName ==>", firstName);

    }

    handlelastNameChange = event => {
        const lastName = event.target.value;
        this.setState({ lastName: lastName });
        console.log("lastName ==>", lastName);

    }

    handleEmailChange = event => {
        const email = event.target.value;
        this.setState({ email: email });
        console.log("email ==>", email);

    }

    handlePasswordChange = event => {
        const password = event.target.value;
        this.setState({ password: password });
        console.log("password ==>", password);

    }

    handleRegister=(event)=>{
        event.preventDefault();
        if (this.state.firstName === "") {
            this.setState({
                openSnackBar: true,
                //display message on the snackbar
                snackBarMessage: "firstName cannot be empty..!"
            })
        }

        else if (this.state.lastName === "") {
            this.setState({
                openSnackBar: true,
                //display message on the snackbar
                snackBarMessage: "lastName cannot be empty..!"
            })
        }

        else if (this.state.email === "") {
            this.setState({
                openSnackBar: true,
                //display message on the snackbar
                snackBarMessage: "Email cannot be empty..!"
            })
        }
        else if (!this.state.password) {
            this.setState({
                openSnackBar: true,
                //display message on the snackbar
                snackBarMessage: "Password cannot be empty..!"
            })
        }

        else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)) {
            this.setState({
                openSnackBar: true,
                //display message on the snackbar
                snackBarMessage: "Invalid email..!"
            });
        } else if (this.state.password.length < 6) {
            this.setState({
                openSnackBar: true,
                //display message on the snackbar
                snackBarMessage: "Password must be of atleast 6 characters long..!"
            });

        } else {
            var data = {
                'firstName': this.state.firstName,
                'lastName': this.state.lastName,
                'email': this.state.email,
                'password': this.state.password

            }
            console.log("Registration data", data)
            userRegister(data)
            .then(response=>{
                console.log("Registration successful",response);
            })
                
        }
    }

     handleSnackClose=() =>{
      this.setState({
          openSnackbar : false
        })
        console.log(this.state.openSnackBar);
        
    }

    render() {
        return (<div>
            <main>
                <MuiThemeProvider theme={theme}>
                    <Card className="card">
                    <CardContent>
                    <Typography>
                        <span className="fundoo-title">
                        <span className="fundoo-f" >F</span>
                        <span className="fundoo-u" >U</span>
                        <span className="fundoo-n" >N</span>
                        <span className="fundoo-d" >D</span>
                        <span className="fundoo-o1" >O</span>
                        <span className="fundoo-o" >O</span>
                        </span>
                         </Typography>
                       
                            <main className="main" > <h3>Create your Fundoo Account</h3></main>
                            <div>
                                <TextField
                                    id="outlined-firstName-input"
                                    label="First name"
                                    type="First name"
                                    name="First name"
                                    autoComplete="First name"
                                    margin="normal"
                                    value={this.state.firstName} 
                                    onChange={this.handlefirstNameChange}
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-lastName-input"
                                    label="Last name"
                                    type="Last name"
                                    name="Last name"
                                    autoComplete="Last name"
                                    margin="normal"
                                    value={this.state.lastName} 
                                    onChange={this.handlelastNameChange}
                                    variant="outlined"
                                />
                            </div>
                            <div className="email-text">
                                <TextField
                                    id="outlined-email-input"
                                    label="Email"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                    value={this.state.email} 
                                    onChange={this.handleEmailChange}
                                    variant="outlined"
                                    style={{width: "90.5%"}}
                                />
                            </div>
                            <div>

                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    autoComplete="password"
                                    margin="normal"
                                    value={this.state.password} 
                                    onChange={this.handlePasswordChange}
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-password-input"
                                    label="Confirm"
                                    type="Confirm"
                                    name="Confirm"
                                    autoComplete="Confirm"
                                    margin="normal"
                                    value={this.state.password} 
                                    onChange={this.handlePasswordChange}
                                    variant="outlined"
                                />

                            </div>
                        </CardContent>



                        <CardActions>
                            <Button variant="contained" color="primary" className="buttons"
                            style={{marginLeft:300}}
                                onClick={this.handleRegister}>Submit</Button>
                        </CardActions>


                    </Card>
                </MuiThemeProvider>

            </main>
            <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.openSnackBar}
                    autoHideDuration={1000}
                    onClose={this.handleSnackClose}
                    variant="error"
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id"> {this.state.snackBarMessage} </span>}
                    action={[
                        <div key="undo">
                            <Button key="undo" color="primary" size="small" onClick={this.handleSnackClose}>
                                UNDO
                        </Button>
                        </div>
                    ]}
                />

            </div>
        )
    }
}


export default Registration