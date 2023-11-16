import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppThemeProvider } from "./shared/context/ThemeContext";
import { globalStyles } from "./shared/themes";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {globalStyles}
          <AppRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </AppThemeProvider>
  );
}
