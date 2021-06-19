import { Dialog, DialogContent } from '@material-ui/core'
import React from 'react'
import ChangePasswordForm from './ChangePasswordForm'

const ChangePasswordPopupModal = (props) => {
    return (
        <Dialog open={props.openpopup}>
            <DialogContent>
                <ChangePasswordForm setOpenPopup={props.setOpenPopup}></ChangePasswordForm>
            </DialogContent>
        </Dialog>
    )
}

export default ChangePasswordPopupModal
