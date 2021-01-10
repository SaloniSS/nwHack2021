
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import '../styles/styling.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 700,
        margin: "auto",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    input: {
        marginBottom: 15,
    },
});

function Register() {
    const classes = useStyles();
    return (
        <div className="Register">
            
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Cerv
            </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Register with your E-mail and phone number.
            </Typography>
                    <form noValidate autoComplete="off">
                        <TextField
                            className={classes.input}
                            id="outlined-basic"
                            label="E-Mail"
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            className={classes.input}
                            id="outlined-basic"
                            label="Phone Number"
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            className={classes.input}
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                        />
                        
                    </form>
                </CardContent>
                <CardActions>
                    <Link to='/home' style={{margin: "auto"}}>
                        <button className="formBtn">Register</button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
}

export default Register;
