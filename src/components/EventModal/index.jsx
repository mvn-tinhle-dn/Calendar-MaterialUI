import React from "react";
import { IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EventIcon from "@mui/icons-material/Event";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

import {
  BoxBodyModal,
  BoxHeaderModal,
  PaperModalEvent,
  BoxContentModal,
} from "./styles";

const EventModal = ({ open, onClose, event }) => {
  return (
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
            <Typography variant="h5">{event.title}</Typography>
          </BoxContentModal>
          <BoxContentModal className="time-event">
            <RadioButtonCheckedIcon fontSize="inherit" color="liveDark" />
            <Typography variant="subtitle2">
              Start day: {event.start.toLocaleDateString("en-GB")}
            </Typography>
          </BoxContentModal>
          <BoxContentModal className="time-event">
            <RadioButtonCheckedIcon fontSize="inherit" color="liveDark" />
            <Typography variant="subtitle2">
              End day: {event.end.toLocaleDateString("en-GB")}
            </Typography>
          </BoxContentModal>
        </BoxBodyModal>
      </PaperModalEvent>
    </Modal>
  );
};

export default EventModal;
