import React, { useState } from "react";
import { SERVER_URL } from '../constants.js';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function NewAssignment(props) {
    const [name, setName] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [course, setCourse] = useState("");

    // when submit button pressed, send updated grades to back end 
    //  and then fetch the new grades.
    function handleSubmit() {
        console.log("Gradebook.handleSubmit");
        const token = Cookies.get('XSRF-TOKEN');

        fetch(`${SERVER_URL}/assignment?id=${course}&name=${name}&due_date=${dueDate}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-XSRF-TOKEN': token
                },
            });
    };

    return (
        <div style={styles.container}>
            <h1>Create a New Assignment</h1>

            <div style={styles.inputContainer}>
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                        console.log(name);
                    }}
                />

                <TextField
                    id="course"
                    label="Course"
                    variant="outlined"
                    value={course}
                    onChange={(event) => {
                        setCourse(event.target.value);
                        console.log(course);
                    }}
                />

                <TextField
                    id="dueDate"
                    label="Due Date"
                    variant="outlined"
                    value={dueDate}
                    onChange={(event) => {
                        setDueDate(event.target.value);
                        console.log(dueDate);
                    }}
                />

                <Button
                    component={Link}
                    to={{ pathname: '/newAssignment' }}
                    variant="outlined"
                    color="primary"
                    style={{ margin: 10 }}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: "100%",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    inputContainer: {
        width: "40%",
        height: "40%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    }
}

export default NewAssignment;