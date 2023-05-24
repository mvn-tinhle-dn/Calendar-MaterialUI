import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";

const ConFirmModal = ({
  titleSubmit,
  titleConfirm,
  textConfirm,
  onSubmit,
  icon,
}) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    onSubmit();
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>{icon}</IconButton>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle style={{ cursor: "move", minWidth: 400 }}>
          {titleConfirm || "Confirmation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {textConfirm || "Are you sure you want to proceed?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>{titleSubmit}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConFirmModal;
