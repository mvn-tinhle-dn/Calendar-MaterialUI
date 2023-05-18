import { Grid } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Schedule from "./components/Schedule";
import { FlexContainer, GridNoPadding } from "./common/common";
import dayjs from "dayjs";
import CalendarContext from "./store/CalendarContext";
import { useState } from "react";
import {
  GridContainer,
  GridSchedule,
  GridSideBar,
} from "./components/Schedule/styles";
import { matchEventsToCalendarRows } from "./helper/Calendar.help";
import { eventData } from "./components/Schedule/event";
import { Helmet } from "react-helmet";

function App() {
  const [isHideSideBar, setIsHideSideBar] = useState(false);
  const currentDay = dayjs();

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
  };

  const toggleSideBar = () => {
    setIsHideSideBar(!isHideSideBar);
  };

  const dataMatchEventsToCalendarRows = matchEventsToCalendarRows(
    calendarRows,
    eventData
  );

  return (
    <CalendarContext.Provider value={currentDay}>
      <Helmet>
        <link
          rel="icon"
          href={`https://calendar.google.com/googlecalendar/images/favicons_2020q4/calendar_${
            currentDay.date() || 1
          }.ico`}
        />
      </Helmet>
      <div className="App">
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
              className={isHideSideBar ? "isScheduleFull" : ""}
            >
              <GridSideBar
                item
                className={isHideSideBar ? "isHideSideBar" : ""}
              >
                <Sidebar />
              </GridSideBar>
              <GridSchedule item borderLeft={true} xs>
                <Schedule
                  calendarRows={dataMatchEventsToCalendarRows}
                  currentDay={currentDay}
                  currentMonth={currentMonth}
                />
              </GridSchedule>
            </GridContainer>
          </GridNoPadding>
        </FlexContainer>
      </div>
    </CalendarContext.Provider>
  );
}

export default App;
