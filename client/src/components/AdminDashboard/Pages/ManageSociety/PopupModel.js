import { Dialog, DialogContent } from '@material-ui/core'
import React, { useState } from 'react'
import AddSociety from './AddSociety'

const PopupModel = (props) => {
    const { openPopup, setOpenPopup } = props;
    return (
        <Dialog open={openPopup}>
            <DialogContent>
                <AddSociety setOpenPopup={setOpenPopup}/>
            </DialogContent>
        </Dialog>
    )
}

export default PopupModel
