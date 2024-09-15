import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

const App = () => {
  return (
    <div className="bg-[#203674] h-[100vh] py-6  p-8 ">
      <div className="flex h-full bg-[#071A50] rounded-[22px] ">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
