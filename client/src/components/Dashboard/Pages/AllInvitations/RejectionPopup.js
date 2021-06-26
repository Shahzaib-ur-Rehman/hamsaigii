import React from 'react'
import { Dialog,DialogContent } from '@material-ui/core';
import RejectionForm from './RejectionForm';
const RejectionPopup = (props) => {
    return (
        <>
            <Dialog open={props.openpopup}>
           <DialogContent>
                <RejectionForm></RejectionForm>
           </DialogContent>
       </Dialog>
        </>
    )
}

export default RejectionPopup
