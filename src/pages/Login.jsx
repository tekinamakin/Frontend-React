import React, { Component } from "react"
import '../App.css'
//import { userRegister } from "../Services/userServices";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions';
import { Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography'
import { userLogin } from "../Services/userServices";
import Snackbar from '@material-ui/core/Snackbar';
//import { makeStyles } from '@material-ui/core/styles';
class Login extends Component {
    constructor() {
        super()
        this.state = {
          
            email: "",
            password: ""


        }
        
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
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

    handleLogin(event) {
        event.preventDefault();
       

         if (this.state.email === "") {
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
                
                email: this.state.email,
                password: this.state.password

            }
            console.log("Login data", data)
            userLogin(data)                    
            .then((response) => {
                console.log('response===>',response);
                this.setState({
                    openSnackBar: true,
                    snackBarMessage: "Login Successfull!!"
                });
                localStorage.setItem('token',response.data.token);
                console.log("propperties",this.props)
                this.props.history.push('/dashboard');

                // this.props.history.push('/register');
                            })
            .catch((err) => {
                console.log('error===>',err);
                this.setState({
                    openSnackBar: true,
                    snackBarMessage: "Login failed!!"
                });
            });





        }
    };

    render() {
        return (<div>
            
                <Card className="logincard">

                    <form className="form">
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
                            
                            
                            <main className="main" > <h3>Sign In</h3></main>
                            <div className="login-textfields">

                                <br />

                                <TextField  
                                    required
                                    label="Username"
                                    className="textField"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                    value={this.state.email} 
                                    onChange={this.handleEmailChange}
                                    variant="outlined"
                                />

                                <br />

                                <TextField 
                                   required
                                    label="Password"
                                    className="textField"
                                    type="password"
                                    name="password"
                                    autoComplete="password"
                                    margin="normal"
                                    value={this.state.password} 
                                    onChange={this.handlePasswordChange}
                                    variant="outlined"
                                />

                            </div>
                        </CardContent>
                        <CardActions>
                        <a href="http://localhost:3000/registration" style={{fontWeight: 'bold'}}>Forgot password?</a>
                            <Button variant="contained" color="primary" className="buttons"
                                style={{ marginLeft: 150 }}
                                onClick={this.handleLogin}>Submit</Button>
                        </CardActions>
                    </form>
                </Card>
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


export default Login