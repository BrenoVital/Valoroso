import { Outlet, useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
  useTheme,
} from "@mui/material";
import { useAppThemeContext } from "../../context/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export default function MainLayout() {
  const navigate = useNavigate();
  const { toggleTheme } = useAppThemeContext();
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="main"
        sx={{
          boxSizing: "border-box",
          flexGrow: 1,
          p: 1,
          height: "100%",
          overflow: "auto",
        }}
      >
        <List
          component="nav"
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ListItemButton onClick={() => navigate("/")}>
            <Typography variant="h6" color={theme.palette.primary.contrastText}>
              Página Inicial
            </Typography>
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/agentes")}>
            <Typography variant="h6" color={theme.palette.primary.contrastText}>
              Agentes
            </Typography>
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/mapas")}>
            <Typography variant="h6" color={theme.palette.primary.contrastText}>
              Mapas
            </Typography>
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/elos")}>
            <Typography variant="h6" color={theme.palette.primary.contrastText}>
              Elos
            </Typography>
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/armas")}>
            <Typography variant="h6" color={theme.palette.primary.contrastText}>
              Armas
            </Typography>
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/cards-agentes")}>
            <Typography variant="h6" color={theme.palette.primary.contrastText}>
              Cards Agentes
            </Typography>
          </ListItemButton>

          <ListItemButton onClick={toggleTheme}>
            <ListItemIcon>
              <Brightness4Icon />
            </ListItemIcon>
          </ListItemButton>
        </List>
        <Outlet />
      </Box>
    </Box>
  );
}
