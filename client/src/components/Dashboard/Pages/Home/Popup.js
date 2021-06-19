import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import React from "react";
import ContractPopup from "./ContractPopup";
import './popup.css';
const Popup = (props) => {
  const { openPopup, setOpenPopup, neighborData } = props;
  return (
    <Dialog open={openPopup} maxWidth="lg" className="popup_div">
      <DialogContent>
        <ContractPopup setOpenPopup={setOpenPopup} neighborData={neighborData}/>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
