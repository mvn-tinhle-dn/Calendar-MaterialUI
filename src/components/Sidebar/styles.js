import styled from "@emotion/styled";
import { Grid, List } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";

const CalendarCustom = styled(DateCalendar)(({ theme }) => ({
  "& .MuiDayCalendar-weekContainer ": {
    "& > .MuiPickersDay-today": {
      backgroundColor: theme.palette.today.main,
      color: theme.palette.whiteText.main,
      border: "unset",
    },
    "& > .Mui-selected": {
      backgroundColor: theme.palette.liveDark.main,
    },
  },
  " & .MuiPickersSlideTransition-root": {
    minHeight: 196,
  },
}));

const GridListEvent = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  padding: "12px 0",
  "& .header-list-event": {
    paddingLeft: "24px",
  },
});

const GridList = styled(Grid)({
  maxHeight: "calc(100vh - 420px)",
  overflow: "scroll",
  "&::-webkit-scrollbar": {
    width: "2px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#19acf8",
  },
});

const ListContent = styled(List)(({ theme }) => ({
  padding: 0,
  "& .MuiListItem-root": {
    paddingLeft: "40px",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.liveDark.main,
      color: theme.palette.white.main,
      "& .MuiListItemText-secondary": {
        color: "currentColor",
      },
    },
  },
  "& .highlighted": {
    backgroundColor: theme.palette.live.main,
    "& + .highlighted": {
      borderTop: `1px solid ${theme.palette.white.main}`,
    },
  },
}));

export { CalendarCustom, ListContent, GridListEvent, GridList };
