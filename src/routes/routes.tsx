import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Hodimlar from "../pages/hodimlar/Hodimlar";
import { Settings, Statistic } from "../assets/sitebar/SitebarSvgIcons";
import Rasxod from "../pages/rasxod/Rasxod";
import Oylik from "../pages/oylik/Oylik";
import Sotuv from "../pages/sotuv/Sotuv";
import IshlabChiqarish from "../pages/ishlabChoqarish/IshlabChiqarish";
import Ombor from "../pages/ombor/Ombor";
import Login from "../pages/login/Login";

export const router = createBrowserRouter([
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
