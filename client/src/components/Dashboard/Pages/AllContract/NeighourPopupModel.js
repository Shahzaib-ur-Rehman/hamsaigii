import { Dialog, DialogContent } from "@material-ui/core";
import React from "react";
import NeighourRejectReq from "./NeighourRejectReq";

const NeighourPopupModel = (porps) => {
  return (
    <Dialog open={porps.openPopUp}>
        <DialogContent>
            <NeighourRejectReq setOpenPopUp={porps.setOpenPopUp} rejectedPost={porps.rejectedPost}></NeighourRejectReq>
        </DialogContent>
    </Dialog>
  );
};

export default NeighourPopupModel;
