import {Redirect} from "react-router-dom";

import YKDiscover from "@/pages/discover";
import YKMine from "@/pages/mine";
import YKFriend from "@/pages/friend";
import YKRecommend from "@/pages/discover/recommend";
import YKAlbum from "../pages/discover/album";
import YKArtist from "../pages/discover/artist";
import YKDjRadio from "../pages/discover/djradio";
import YKRanking from "../pages/discover/ranking";
import YKSongs from "../pages/discover/songs";

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

    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => {
          return <Redirect to="/discover/recommend" />;
        },
      },
      {
        path: "/discover/recommend",
        component: YKRecommend,
      },
      {
        path: "/discover/album",
        component: YKAlbum,
      },
      {
        path: "/discover/artist",
        component: YKArtist,
      },
      {
        path: "/discover/djradio",
        component: YKDjRadio,
      },
      {
        path: "/discover/ranking",
        component: YKRanking,
      },
      {
        path: "/discover/songs",
        component: YKSongs,
      },
    ],
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
