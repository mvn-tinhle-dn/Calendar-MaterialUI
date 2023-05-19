import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import EventIcon from "@mui/icons-material/Event";
import { IconButton, Modal, Typography } from "@mui/material";

import {
  BoxBodyModal,
  BoxContentModal,
  BoxHeaderModal,
  PaperModalEvent,
} from "../EventModal/styles";
import FormCreateEvent from "../FormCreateEvent";

const ModalAddEvent = ({ open, onClose }) => {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <PaperModalEvent elevation={3}>
          <BoxHeaderModal>
            <IconButton onClick={() => onClose()}>
              <CloseIcon />
            </IconButton>
          </BoxHeaderModal>
          <BoxBodyModal>
            <BoxContentModal>
              <EventIcon />
              <Typography variant="h5">Create Event</Typography>
            </BoxContentModal>
            <BoxContentModal>
              <FormCreateEvent />
            </BoxContentModal>
          </BoxBodyModal>
        </PaperModalEvent>
      </Modal>
    </>
  );
};

export default ModalAddEvent;
