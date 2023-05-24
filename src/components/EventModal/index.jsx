import React from "react";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import EventIcon from "@mui/icons-material/Event";
import CloseIcon from "@mui/icons-material/Close";
import { useMutation, useQueryClient } from "react-query";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { CircularProgress, IconButton, Modal, Typography } from "@mui/material";

import {
  BoxBodyModal,
  BoxHeaderModal,
  PaperModalEvent,
  BoxContentModal,
} from "./styles";
import ConFirmModal from "../ConfirmModal";
import { deleteEvent } from "../../api/api";
import { DeleteOutline } from "@mui/icons-material";

const EventModal = ({ open, onClose, event, setShowModal }) => {
  const startDay = dayjs(event.start).toDate().toLocaleDateString("en-GB");
  const endDay = dayjs(event.end).toDate().toLocaleDateString("en-GB");
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation((event) => deleteEvent(event.id), {
    onSuccess: () => {
      queryClient.invalidateQueries("eventData");
      toast.success("Delete event is success!");
      setShowModal(false);
    },
    onError: () => toast.success("Delete event is failed!"),
  });

  return (
    <Modal open={open} onClose={onClose}>
      <PaperModalEvent elevation={3}>
        <BoxHeaderModal>
          <ConFirmModal
            titleSubmit="delete"
            onSubmit={() => mutate(event)}
            icon={<DeleteOutline />}
          />
          <IconButton onClick={() => onClose()}>
            <CloseIcon />
          </IconButton>
        </BoxHeaderModal>
        <BoxBodyModal>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <BoxContentModal>
                <EventIcon />
                <Typography variant="h5">{event.title}</Typography>
              </BoxContentModal>
              <BoxContentModal className="time-event">
                <RadioButtonCheckedIcon fontSize="inherit" color="liveDark" />
                <Typography variant="subtitle2">
                  Start day: {startDay}
                </Typography>
              </BoxContentModal>
              <BoxContentModal className="time-event">
                <RadioButtonCheckedIcon fontSize="inherit" color="liveDark" />
                <Typography variant="subtitle2">End day: {endDay}</Typography>
              </BoxContentModal>
            </>
          )}
        </BoxBodyModal>
      </PaperModalEvent>
    </Modal>
  );
};

export default EventModal;
