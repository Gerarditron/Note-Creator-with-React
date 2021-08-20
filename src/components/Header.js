import React from 'react'
import Paper from '@material-ui/core/Paper';

function Header() {
    return (
        <Paper elevation={3} style={{padding: "5px"}}>
            <img style={{width:"50px", display:"flex"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" />
            <h1 style={{margin:0, fontFamily:'cursive', fontWeight: "100"}}>Header</h1>
        </Paper>
    )
}

export default Header
