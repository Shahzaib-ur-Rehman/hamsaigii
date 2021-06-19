import React from 'react'
import { Dialog,DialogContent } from '@material-ui/core';
import AcceptRequestForm from './AcceptRequestForm';
const ResponseModalPopup = (props) => {
    return (
       <Dialog open={props.openPopup}>
           <DialogContent>
               <AcceptRequestForm setOpenPopup={props.setOpenPopup} id={props.id} userId={props.userId}></AcceptRequestForm>
           </DialogContent>
       </Dialog>
    )
}

export default ResponseModalPopup
