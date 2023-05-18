import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";

const PaperModalEvent = styled(Paper)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  padding: 16,
  backgroundColor: theme.palette.white.main,
  "&:focus-visible": {
    outline: "unset",
  },
}));

const BoxHeaderModal = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
});

const BoxBodyModal = styled(Box)({
  padding: "0 16px 16px 16px",
});

const BoxContentModal = styled(Box)({
  display: "flex",
  gap: 16,
  alignItems: "center",
  "&.time-event": {
    marginTop: 10,
    paddingLeft: 16,
  },
});

export { PaperModalEvent, BoxHeaderModal, BoxBodyModal, BoxContentModal };
