import { useRoutes } from "react-router-dom";
import { HomePage } from "../components/layout/HomePage/HomePage";
import { MyFlights } from "../components/layout/MyFlights/MyFlights";

const Router = ({allFlightsData}) => {
  const routes = useRoutes([
    { path: "/", element: <HomePage  allFlightsData={allFlightsData}/> },
    { path: "/myflights", element: <MyFlights/> },
  ]);
  return routes;
};

export default Router;
