import React, { useContext, useState } from "react";
import { Grid } from "@mui/material";
import { useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";

import {
  BoxLoading,
  GridContainer,
  GridSchedule,
  GridSideBar,
} from "../../components/Schedule/styles";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Schedule from "../../components/Schedule";
import { CalendarContext } from "../../store/CalendarContext";
import { FlexContainer, GridNoPadding } from "../../common/common";
import { matchEventsToCalendarRows } from "../../helper/Calendar.help";
import { fetchEventData } from "../../api/api";

const CalendarScreen = () => {
  const currentDay = useContext(CalendarContext);

  const { data: eventData, isLoading } = useQuery("eventData", fetchEventData);

  const [isHideSideBar, setIsHideSideBar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(currentDay);

  const [currentMonth, setCurrentMonth] = useState(currentDay);

  const daysInMonth = currentMonth.daysInMonth();
  const startDayOfWeek = currentMonth.startOf("month").day();

  const previousMonth = currentMonth.subtract(1, "month");
  const daysInPreviousMonth = previousMonth.daysInMonth();

  const calendarDays = [
    ...Array(startDayOfWeek)
      .fill()
      .map((_, i) =>
        previousMonth.date(daysInPreviousMonth - startDayOfWeek + i + 1)
      ),
    ...Array(daysInMonth)
      .fill()
      .map((_, i) => currentMonth.date(i + 1)),
    ...Array(6 - currentMonth.endOf("month").day())
      .fill()
      .map((_, i) => currentMonth.add(1, "month").date(i + 1)),
  ];

  const calendarRows = Array(Math.ceil(calendarDays.length / 7))
    .fill()
    .map((_, i) => calendarDays.slice(i * 7, (i + 1) * 7));

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const handleCurrentMonth = () => {
    setCurrentMonth(currentDay);
    setSelectedDate(currentDay);
  };

  const toggleSideBar = () => {
    setIsHideSideBar(!isHideSideBar);
  };

  const dataMatchEventsToCalendarRows = matchEventsToCalendarRows(
    calendarRows,
    eventData || []
  );

  if (isLoading) {
    return (
      <BoxLoading sx={{ display: "flex" }}>
        <CircularProgress />
      </BoxLoading>
    );
  }

  return (
    <FlexContainer>
      <GridNoPadding container spacing={0}>
        <Grid item xs={12}>
          <Header
            handleNextMonth={handleNextMonth}
            handlePrevMonth={handlePrevMonth}
            handleCurrentMonth={handleCurrentMonth}
            currentMonth={currentMonth}
            toggleSideBar={toggleSideBar}
          />
        </Grid>
        <GridContainer
          container
          spacing={0}
          className={isHideSideBar ? "is-hide-sidebar" : ""}
        >
          <GridSideBar item>
            <Sidebar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              events={eventData || []}
            />
          </GridSideBar>
          <GridSchedule item borderLeft={true} xs>
            <Schedule
              calendarRows={dataMatchEventsToCalendarRows}
              currentDay={currentDay}
              currentMonth={currentMonth}
              events={eventData || []}
            />
          </GridSchedule>
        </GridContainer>
      </GridNoPadding>
    </FlexContainer>
  );
};

export default CalendarScreen;
