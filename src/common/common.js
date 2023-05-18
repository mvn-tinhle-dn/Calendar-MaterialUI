import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const GridNoPadding = styled(Grid)({
  padding: 0,
});

const FlexContainer = styled.div`
  flex-grow: 1;
`;

export { FlexContainer, GridNoPadding };
