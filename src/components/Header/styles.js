import styled from "@emotion/styled";
import { AppBar, Box, Button } from "@mui/material";

const AppBarHeader = styled(AppBar)({
  boxShadow: "none",
  borderBottom: "1px solid #d9dce0 ",
});

const BoxHeaderLeft = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "32px",
  "& .MuiSvgIcon-root": {
    cursor: "pointer",
  },
});

const LogoImage = styled.img({
  width: "40px",
});

const ButtonToday = styled(Button)((props) => ({
  border: `1px solid ${props.theme.palette.borderGray.main}`,
  color: `${props.theme.palette.textPrimary.main}`,
}));

export { AppBarHeader, BoxHeaderLeft, LogoImage, ButtonToday };
