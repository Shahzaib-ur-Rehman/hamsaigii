import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import RejectionForm from "./RejectionForm";
const PopupModel = (props) => {
  return (
    <>
      <Dialog open={props.openPopup}>
        <DialogContent>
            <RejectionForm setOpenPopup={props.setOpenPopup} rejectedPost={props.rejectedPost}/>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PopupModel;
