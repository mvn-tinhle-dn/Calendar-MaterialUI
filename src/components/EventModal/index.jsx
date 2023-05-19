import React from "react";
import dayjs from "dayjs";
import EventIcon from "@mui/icons-material/Event";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Modal, Typography } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

import {
  BoxBodyModal,
  BoxHeaderModal,
  PaperModalEvent,
  BoxContentModal,
} from "./styles";

const EventModal = ({ open, onClose, event }) => {
  const startDay = dayjs(event.start).toDate().toLocaleDateString("en-GB");
  const endDay = dayjs(event.end).toDate().toLocaleDateString("en-GB");

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
            <Typography variant="subtitle2">Start day: {startDay}</Typography>
          </BoxContentModal>
          <BoxContentModal className="time-event">
            <RadioButtonCheckedIcon fontSize="inherit" color="liveDark" />
            <Typography variant="subtitle2">End day: {endDay}</Typography>
          </BoxContentModal>
        </BoxBodyModal>
      </PaperModalEvent>
    </Modal>
  );
};

export default EventModal;
