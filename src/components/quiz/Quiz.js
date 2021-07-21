import React from 'react'
import "./Style.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function Quiz() {
    const classes = useStyles();

    return (
        <div className="questionS">
            <form>
                <h3 className="textS">What are the 3 basic functions of management?</h3>

                <div className="answesS">
                    <div></div>
                    <input type="checkbox" />
                    <span>Planning</span>

                    <div></div>
                    <input type="checkbox" />
                    <span>Organizing</span>

                    <div></div>
                    <input type="checkbox" />
                    <span>Controlling</span>

                </div>
                <br />
                <div>
                    <span className="buttonS">
                        <Button variant="contained" color="primary">  Bcak   </Button>
                    </span>
                    <span className="buttonS">
                        <Button variant="contained" color="primary">  Next   </Button>
                    </span>
                </div>

            </form>
        </div>
    )
}

export default Quiz
