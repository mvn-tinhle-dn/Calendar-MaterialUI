import dayjs from "dayjs";

const matchEventsToCalendarRows = (calendarRows, eventData) => {
  const matchedData = calendarRows.map((row) =>
    row.map((day) => {
      const dayNum = day.date();
      const events = eventData.filter((event) => {
        const eventStartDate = dayjs(event.start).toDate();
        const eventEndDate = dayjs(event.end).toDate();
        const eventMonth = eventStartDate.getMonth();

        if (eventMonth !== day.month()) {
          return null;
        }

        return (
          dayNum >= eventStartDate.getDate() && dayNum <= eventEndDate.getDate()
        );
      });

      return { day, events };
    })
  );

  return matchedData;
};

export { matchEventsToCalendarRows };
