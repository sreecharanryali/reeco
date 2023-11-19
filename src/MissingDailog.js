import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const MissingDailog = ({
  open,
  onClose,
  onUrgentClick,
  onNotUrgentClick,
  content,
}) => {
  const handleClose = () => {
    onClose();
  };

  const urgentClicked = () => {
    onUrgentClick();
    handleClose();
  };

  const notUrgentClicked = () => {
    onNotUrgentClick();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Missing Product</DialogTitle>
      <DialogContent>
        <p className="p-8">Is '{content?.productName}' urgent?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={urgentClicked}>Yes</Button>
        <Button onClick={notUrgentClicked}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MissingDailog;
