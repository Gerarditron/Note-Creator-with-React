import { Fab, Paper, TextField } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import { SettingsRounded } from '@material-ui/icons';

function FormArea({addNote}) {
    const [note, setNote] = useState({
        title:"",
        content:"",
    });
    
    function changeHandler(e){
        const{name,value} = e.target
        setNote(preValues =>{
            return{
                ...preValues,
                [name]: value,
            };
        });
    }
    
    function clickHandler(){
        addNote(note);
        setNote({
            title:"",
            content:"",
        })
    }

    return (
        <Paper style={{margin:"10px 10%", padding:"25px 50px"}}>
            <form>
                <TextField
                    onChange={changeHandler}
                    name="title"
                    value={note.title}
                    label="Title"
                    fullWidth autoComplete="off" />
                <TextField
                    onChange={changeHandler}
                    name="content"
                    value={note.content}
                    label="Content"
                    fullWidth autoComplete="off"
                    multiline rows={4} />
                
            </form>
            <Fab onClick={clickHandler} style={{marginTop:"20px", background:"lightblue"}}><AddIcon/></Fab>
        </Paper>
    )
}

export default FormArea
