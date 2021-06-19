import { Dialog, DialogContent } from '@material-ui/core'
import React from 'react'
import UpdateSociety from './UpdateSociety';

const UpdatePopupModel = (props) => {
    const { updatepopup, setupdatepopup,_id,name,location,description } = props;
    return (
        <div>
            <Dialog open={updatepopup}>
                <DialogContent>
                   <UpdateSociety _id={_id} name={name} location={location} description={description} setupdatepopup={setupdatepopup}/>
                </DialogContent>
            </Dialog>
        </div>
    )
}
 
export default UpdatePopupModel
