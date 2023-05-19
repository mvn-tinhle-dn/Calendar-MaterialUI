import React, { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import { FlexContainer } from "../../common/common";
import { CalendarContext } from "../../store/CalendarContext";
import { AppBarHeader, BoxHeaderLeft, ButtonToday, LogoImage } from "./styles";

const Header = ({
  handlePrevMonth,
  handleNextMonth,
  currentMonth,
  handleCurrentMonth,
  toggleSideBar,
}) => {
  const currentDay = useContext(CalendarContext);
  const day = currentDay.date();

  return (
    <FlexContainer>
      <AppBarHeader position="static" color="default">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            sx={{ mr: 2 }}
            onClick={() => toggleSideBar()}
          >
            <MenuIcon />
          </IconButton>
          <BoxHeaderLeft>
            <Typography component="div">
              <LogoImage
                src={`https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${
                  day || 1
                }_2x.png`}
                alt="Logo"
              />
            </Typography>
            <Typography variant="h5" noWrap component="div">
              Calendar
            </Typography>
            <ButtonToday
              color="gray"
              variant="outlined"
              onClick={handleCurrentMonth}
            >
              Today
            </ButtonToday>
            <ArrowBackIosNewIcon
              color="icon"
              fontSize="inherit"
              onClick={handlePrevMonth}
            />
            <ArrowForwardIosIcon
              color="icon"
              fontSize="inherit"
              onClick={handleNextMonth}
            />
            <Typography variant="h5" noWrap component="div">
              {currentMonth.format("MMMM YYYY")}
            </Typography>
          </BoxHeaderLeft>
          <FlexContainer />
          <Box>
            <IconButton>
              <Avatar
                alt="TiLe"
                src="https://ca.slack-edge.com/T7Z35JWLQ-U024QU07JUA-9c8090b1b1f1-512"
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBarHeader>
    </FlexContainer>
  );
};

export default Header;
