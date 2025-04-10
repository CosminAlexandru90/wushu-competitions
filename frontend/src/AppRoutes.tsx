import {createBrowserRouter, Outlet, RouteObject} from "react-router";
import {UserList} from "./user/UserList.tsx";
import {UserInfo} from "./user/details/UserInfo.tsx";
import {Home} from "./home/Home.tsx";
import Layout from "./layout/Layout.tsx";
import {JudgeList} from "./judge/JudgeList.tsx";
import {JudgeInfo} from "./judge/details/JudgeInfo.tsx";
import {CourseList} from "./course/CourseList.tsx";
import {CourseInfo} from "./course/details/CourseInfo.tsx";
import {CompetitionList} from "./competition/CompetitionList.tsx";
import {CompetitionInfo} from "./competition/details/CompetitionInfo.tsx";
import {Onboarding} from "./onboarding/Onboarding.tsx";

const AppRoutes: RouteObject[] = [
  {
    path: '/',
    element: <><Outlet /></>,
    children:[
      {
        path:'/',
        element:<Layout />,
        children:[
          {
            index: true,
            element: <Home />
          },
          {
            path: 'user',
            children: [
              {
                index: true,
                element: <UserList />
              },
              {
                path: 'id',
                element: <UserInfo />
              },
            ]
          },
          {
            path: 'judge',
            children: [
              {
                index: true,
                element: <JudgeList />
              },
              {
                path: 'id',
                element: <JudgeInfo />
              },
            ]
          },
          {
            path: 'competition',
            children: [
              {
                index: true,
                element: <CompetitionList />
              },
              {
                path: 'id',
                element: <CompetitionInfo />
              },
            ]
          },
          {
            path: 'course',
            children: [
              {
                index: true,
                element: <CourseList />
              },
              {
                path: 'id',
                element: <CourseInfo />
              },
            ]
          },
        ]
      },
      {
        path:'/onboarding',
        element: <Onboarding />
      }
    ]
  },
]

export const router = createBrowserRouter(AppRoutes);