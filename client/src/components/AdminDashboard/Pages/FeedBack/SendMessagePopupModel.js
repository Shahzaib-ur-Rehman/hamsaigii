import { Dialog, DialogContent } from '@material-ui/core'
import React from 'react'
import SendMessageForm from './SendMessageForm'
const SendMessagePopupModel = (props) => {
    
    return (
       <Dialog open={props.openpopup}>
           <DialogContent>
               <SendMessageForm setopenpopup={props.setopenpopup} replyBack={props.replyBack}></SendMessageForm>
           </DialogContent>
       </Dialog>
    )
}

export default SendMessagePopupModel
