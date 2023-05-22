import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";

const GridNameDayHeader = styled(Grid)({
  flexGrow: 0,
  marginBottom: "16px",
});

const GridBdGrayBR = styled(Grid)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.borderGray.main}`,
  borderRight: `1px solid ${theme.palette.borderGray.main}`,
  cursor: "pointer",
  "&.item-day": {
    padding: "10px",
    overflow: "auto",
  },
}));

const GridContainer = styled(Grid)({
  padding: 0,
  marginLeft: 0,
  transition: "all 250ms ease-in-out",
  flexGrow: "unset",
  "&.is-hide-sidebar": {
    marginLeft: "-320px",
    flexGrow: 1,
  },
});

const GridSideBar = styled(Grid)({
  display: "flex",
  height: "calc(100vh - 65px)",
  width: "320px",
});

const GridSchedule = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  height: "calc(100vh - 65px)",
  borderLeft: `1px solid ${theme.palette.borderGray.main}`,
}));

const Typography500 = styled(Typography)((props) => ({
  fontWeight: "500",
  color: props.color || props.theme.palette.textPrimary.main,
}));

const GridGrowFull = styled(Grid)({
  flexGrow: 1,
  "& .MuiGrid-item.row-week": {
    paddingTop: 0,
    minHeight: "100px",
  },
  "& .is-to-day": {
    "& .MuiTypography-root.day-number": {
      borderRadius: "50%",
      color: "#fff",
      backgroundColor: "#1565c0",
      display: "inline-block",
      padding: "8px",
      " & + .MuiBox-root": {
        marginTop: "0px",
      },
    },
  },
  "& .MuiGrid-item.muted-day": {
    backgroundColor: "#EFF3F6",
    "& .MuiTypography-root": {
      opacity: 0.5,
    },
  },
});

const BoxEvents = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  marginTop: "16px",
  overflow: "hidden",
});

const TypoEvent = styled(Typography)(({ theme }) => ({
  padding: "0 10px",
  marginTop: "6px",
  backgroundColor: `${theme.palette.live.main}`,
  borderRadius: "10px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: `${theme.palette.liveDark.main}`,
    color: `${theme.palette.whiteText.main}`,
  },
}));

const BoxLoading = styled(Box)({
  display: "flex",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
});

export {
  GridNameDayHeader,
  GridBdGrayBR,
  Typography500,
  GridGrowFull,
  GridContainer,
  GridSchedule,
  GridSideBar,
  BoxEvents,
  TypoEvent,
  BoxLoading,
};
