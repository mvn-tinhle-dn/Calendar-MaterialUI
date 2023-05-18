import { Box, Grid, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { CalendarCustom, ListContent, GridListEvent, GridList } from "./styles";
import { eventData } from "../Schedule/event";
import CalendarContext from "../../store/CalendarContext";
import EventModal from "../EventModal";

function Sidebar() {
  const currentDay = useContext(CalendarContext);
  const [selectedDate, setSelectedDate] = useState(currentDay);
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
        block: "start",
        inline: "nearest",
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
            {eventData.map((event, index) => {
              const isHighlighted = selectedDate.isBetween(
                event.start,
                event.end,
                "day",
                "[]"
              );

              return (
                <ListItem
                  key={`listItem-${index}`}
                  className={isHighlighted ? "highlighted" : ""}
                  ref={isHighlighted ? scrollToRef : null}
                  onClick={() => onShowModal(event)}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={`${event.start.toLocaleDateString(
                      "en-GB"
                    )} - ${event.end.toLocaleDateString("en-GB")}`}
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
