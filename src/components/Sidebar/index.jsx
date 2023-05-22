import dayjs from "dayjs";
import React, { useEffect, useRef, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Grid, ListItem, ListItemText, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import EventModal from "../EventModal";
import { CalendarCustom, ListContent, GridListEvent, GridList } from "./styles";

function Sidebar({ selectedDate, setSelectedDate, events }) {
  const scrollToRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");

  const onShowModal = (event) => {
    setShowModal(true);
    setSelectedEvent(event);
  };

  //auto scroll to event highlight
  useEffect(() => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [selectedDate]);

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CalendarCustom
          autoFocus={true}
          showDaysOutsideCurrentMonth
          fixedWeekNumber={5}
          onChange={setSelectedDate}
          value={selectedDate}
        />
      </LocalizationProvider>
      <GridListEvent container>
        <Grid item xs={12} className="header-list-event">
          <Typography variant="h6" component="div">
            Events
          </Typography>
        </Grid>
        <GridList item xs={12}>
          <ListContent>
            {events.map((event, index) => {
              const isHighlighted = selectedDate.isBetween(
                event.start,
                event.end,
                "day",
                "[]"
              );
              const startDay = dayjs(event.start)
                .toDate()
                .toLocaleDateString("en-GB");
              const endDay = dayjs(event.end)
                .toDate()
                .toLocaleDateString("en-GB");

              return (
                <ListItem
                  key={`listItem-${index}`}
                  className={isHighlighted ? "highlighted" : ""}
                  ref={isHighlighted ? scrollToRef : null}
                  onClick={() => onShowModal(event)}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={`${startDay} - ${endDay}`}
                  />
                </ListItem>
              );
            })}
          </ListContent>
        </GridList>
      </GridListEvent>
      {showModal && (
        <EventModal
          open={showModal}
          event={selectedEvent}
          onClose={() => setShowModal(false)}
        />
      )}
    </Box>
  );
}

export default Sidebar;
