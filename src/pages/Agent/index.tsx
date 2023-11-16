import { Box, Paper } from "@mui/material";
import Card from "./components/Card";
import CardDescription from "./components/CardDescription";

export default function Agent() {
  return (
    <Box component={Paper}>
      <Box>
        <Card />
      </Box>
      <Box>
        <CardDescription />
      </Box>
    </Box>
  );
}
