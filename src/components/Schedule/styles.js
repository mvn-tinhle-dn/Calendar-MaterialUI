import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const GridNameDayHeader = styled(Grid)({
  flexGrow: 0,
  marginBottom: "16px",
});

const GridBdGrayBR = styled(Grid)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.borderGray.main}`,
  borderRight: `1px solid ${theme.palette.borderGray.main}`,
  cursor: "pointer",
  "&.item-day": {
    padding: "14px 10px",
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
  " & .item-day": {
    "& .MuiTypography-root.day-number": {
      borderRadius: "50%",
      display: "inline-block",
      padding: "8px",
    },
  },
  "& .is-to-day": {
    "& .MuiTypography-root.day-number": {
      color: "#fff",
      backgroundColor: "#1565c0",
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
  maxHeight: "58px",
  overflow: "hidden",
});

const TypoEvent = styled(Typography)(({ theme }) => ({
  display: "flex",
  gap: "5px",
  alignItems: "center",
  marginTop: "6px",
  borderRadius: "10px",
  "& span": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  cursor: "pointer",
  "&:hover": {
    color: `${theme.palette.liveDark.main}`,
  },
}));

const BoxLoading = styled(Box)({
  display: "flex",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
});

const IconPoint = styled(FiberManualRecordIcon)({
  width: "12px",
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
  IconPoint,
};
