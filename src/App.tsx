import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import Layout from "./components/Layout";
import Sotuv from "./pages/sotuv/Sotuv";
import Statistic from "./pages/statistic/Statistic";
import Rasxod from "./pages/rasxod/Rasxod";
import Oylik from "./pages/oylik/Oylik";
import IshlabChiqarish from "./pages/ishlabChoqarish/IshlabChiqarish";
import Ombor from "./pages/ombor/Ombor";
import Settings from "./pages/settings/Settings";
import Hodimlar from "./pages/hodimlar/Hodimlar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Hodimlar />
      </Layout>
    ),
  },
  {
    path: "/statistika",
    element: (
      <Layout>
        <Statistic />
      </Layout>
    ),
  },
  {
    path: "/rasxodlar",
    element: (
      <Layout>
        <Rasxod />
      </Layout>
    ),
  },
  {
    path: "/oyliklar",
    element: (
      <Layout>
        <Oylik />
      </Layout>
    ),
  },
  {
    path: "/sotuv",
    element: (
      <Layout>
        <Sotuv />
      </Layout>
    ),
  },
  {
    path: "/ishlabchiqarish",
    element: (
      <Layout>
        <IshlabChiqarish />
      </Layout>
    ),
  },
  {
    path: "/ombor",
    element: (
      <Layout>
        <Ombor />
      </Layout>
    ),
  },
  {
    path: "/sozlamalar",
    element: (
      <Layout>
        <Settings />
      </Layout>
    ),
  },
  { path: "/login", element: <Login /> },
]);

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
