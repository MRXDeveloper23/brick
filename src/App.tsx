import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { MantineProvider } from "@mantine/core";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons CSS

const App = () => {
  return (
    <div>
      <MantineProvider>
        <PrimeReactProvider>
          <RouterProvider router={router} />
        </PrimeReactProvider>
      </MantineProvider>
    </div>
  );
};

export default App;
