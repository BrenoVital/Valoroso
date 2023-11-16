import {
  AppBar,
  Box,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useAppThemeContext } from "../../context/ThemeContext";
import { useDrawerContext } from "../../context/DrawerContex";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IListMenuItem {
  label: string;
  icon: string;
  path: string;
}

const ListMenuItems = ({ data }: { data: IListMenuItem }) => {
  const ResolverPath = useResolvedPath(data.path);
  const match = useMatch({ path: ResolverPath.pathname, end: false });

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(data.path);
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{data.icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={data.label} />
    </ListItemButton>
  );
};

export default function Header({ children }: any) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { toggleTheme } = useAppThemeContext();
  const { drawerOptions } = useDrawerContext();
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Valoroso
          </Typography>
          <Box flex={1}>
            <List component="nav">
              {drawerOptions?.map((data, index) => (
                <ListMenuItems key={index} data={data} />
              ))}
            </List>
          </Box>
          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>dark_mode</Icon>
                </ListItemIcon>
                <ListItemText primary="Alternar tema" />
              </ListItemButton>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Box marginLeft={smDown ? 0 : theme.spacing(28)}>{children}</Box>
    </>
  );
}
