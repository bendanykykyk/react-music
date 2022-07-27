import YKDiscover from "@/pages/discover";
import YKMine from "@/pages/mine";
import YKFriend from "@/pages/friend";
import {Redirect} from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => {
      return <Redirect to="/discover"></Redirect>;
    },
  },
  {
    path: "/discover",
    component: YKDiscover,
  },
  {
    path: "/mine",
    component: YKMine,
  },
  {
    path: "/friend",
    component: YKFriend,
  },
];

export default routes;
