import React from 'react'

function Footer() {
    return (
        <div style={{position:"absolute", bottom:"0", width:"100%", textAlign:"center"}}>
            <p>{new Date().getFullYear()} - Gerardo Velasquez</p>
            <p>Copyright &copy; </p>
        </div>
    )
}

export default Footer
