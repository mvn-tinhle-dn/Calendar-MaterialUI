import React, { useState } from "react";
import { Grid, Typography, Tooltip } from "@mui/material";

import {
  GridNameDayHeader,
  GridBdGrayBR,
  Typography500,
  GridGrowFull,
  BoxEvents,
  TypoEvent,
} from "./styles";
import EventModal from "../EventModal";
import ModalAddEvent from "../ModalAddEvent";
import { CloseModalContext } from "../../store/CalendarContext";

function Schedule({ calendarRows, currentMonth, currentDay }) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");

  const onShowModal = (event, e) => {
    e.stopPropagation();
    setShowModal(true);
    setSelectedEvent(event);
  };
  const [showModalAddEvent, setShowModalAddEvent] = useState(false);

  const onShowModalAddEvent = () => {
    setShowModalAddEvent(true);
  };

  return (
    <CloseModalContext.Provider value={setShowModalAddEvent}>
      <Grid container spacing={0} direction="column">
        <GridNameDayHeader container>
          {daysOfWeek.map((day, columnIndex) => (
            <GridBdGrayBR item key={`day-${columnIndex}`} xs>
              <Typography500 color="gray" styles="svm" textAlign="center">
                {day}
              </Typography500>
            </GridBdGrayBR>
          ))}
        </GridNameDayHeader>
        <GridGrowFull container spacing={2}>
          {calendarRows.map((row, index) => (
            <Grid className="row-week" container item key={`row-week-${index}`}>
              {row.map((date, index) => {
                const dateInfo = date.day;
                const events = date.events;
                const isCurrentMonth =
                  dateInfo.month() !== currentMonth.month();
                const isToday = dateInfo.isSame(currentDay, "day");
                return (
                  <GridBdGrayBR
                    item
                    xs
                    className={`item-day ${isCurrentMonth ? "muted-day" : ""} ${
                      isToday ? "is-to-day" : ""
                    }`}
                    key={`item-day-${index}`}
                    onClick={() => onShowModalAddEvent()}
                  >
                    <Typography className="day-number">
                      {dateInfo.date()}
                    </Typography>
                    <BoxEvents>
                      {events.map((item, index) => (
                        <Tooltip
                          title={item.title}
                          placement="top-end"
                          key={`event-${index}`}
                          onClick={(e) => onShowModal(item, e)}
                        >
                          <TypoEvent variant="subtitle2">
                            {item.title}
                          </TypoEvent>
                        </Tooltip>
                      ))}
                    </BoxEvents>
                  </GridBdGrayBR>
                );
              })}
            </Grid>
          ))}
        </GridGrowFull>
      </Grid>
      {showModal && (
        <EventModal
          open={showModal}
          event={selectedEvent}
          onClose={() => setShowModal(false)}
        />
      )}
      {showModalAddEvent && (
        <ModalAddEvent
          open={showModalAddEvent}
          onClose={() => setShowModalAddEvent(false)}
        />
      )}
    </CloseModalContext.Provider>
  );
}

export default Schedule;
