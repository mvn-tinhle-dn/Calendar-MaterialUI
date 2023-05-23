import React, { useState } from "react";
import { Grid, Typography, Tooltip, Badge } from "@mui/material";

import {
  IconPoint,
  BoxEvents,
  TypoEvent,
  GridGrowFull,
  GridBdGrayBR,
  Typography500,
  GridNameDayHeader,
} from "./styles";
import EventModal from "../EventModal";
import ModalAddEvent from "../ModalAddEvent";
import { EventModalContext } from "../../store/CalendarContext";

function Schedule({ calendarRows, currentMonth, currentDay }) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const [showModal, setShowModal] = useState(false);
  const [showModalAddEvent, setShowModalAddEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedDay, setSelectedDay] = useState(currentDay);

  const onShowModal = (event, e) => {
    e.stopPropagation();
    setShowModal(true);
    setSelectedEvent(event);
  };

  const handleClickDay = (day) => {
    setSelectedDay(day);
    setShowModalAddEvent(true);
  };

  return (
    <EventModalContext.Provider value={{ setShowModalAddEvent, selectedDay }}>
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
                    onClick={() => handleClickDay(dateInfo)}
                  >
                    <Badge
                      badgeContent={events.length}
                      color="live"
                      invisible={events.length < 2}
                    >
                      <Typography className="day-number">
                        {dateInfo.date()}
                      </Typography>
                    </Badge>

                    <BoxEvents>
                      {events.map((item, index) => (
                        <Tooltip
                          title={item.title}
                          placement="top-end"
                          key={`event-${index}`}
                          onClick={(e) => onShowModal(item, e)}
                        >
                          <TypoEvent variant="subtitle2">
                            <IconPoint color="liveDark" />
                            <span>{item.title}</span>
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
          setShowModal={setShowModal}
        />
      )}
      {showModalAddEvent && (
        <ModalAddEvent
          open={showModalAddEvent}
          onClose={() => setShowModalAddEvent(false)}
        />
      )}
    </EventModalContext.Provider>
  );
}

export default Schedule;
