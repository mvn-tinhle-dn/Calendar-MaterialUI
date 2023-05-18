const matchEventsToCalendarRows = (calendarRows, eventData) => {
  const matchedData = calendarRows.map((row) =>
    row.map((day) => {
      const dayNum = day.date();

      const events = eventData.filter((event) => {
        const eventMonth = event.start.getMonth();
        const eventStartDate = event.start.getDate();
        const eventEndDate = event.end.getDate();
        if (eventMonth !== day.month()) {
          return null;
        }
        return dayNum >= eventStartDate && dayNum <= eventEndDate;
      });

      return { day, events: events };
    })
  );

  return matchedData;
};
export { matchEventsToCalendarRows };
