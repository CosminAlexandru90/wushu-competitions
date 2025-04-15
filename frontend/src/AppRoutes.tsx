import {createBrowserRouter, Outlet, RouteObject} from "react-router";
import {Home} from "./home/Home.tsx";
import Layout from "./layout/Layout.tsx";
import {CourseList} from "./course/CourseList.tsx";
import {CourseInfo} from "./course/details/CourseInfo.tsx";
import {CompetitionList} from "./competition/CompetitionList.tsx";
import {CompetitionInfo} from "./competition/details/CompetitionInfo.tsx";
import {Onboarding} from "./onboarding/Onboarding.tsx";
import {JudgeLanding} from "./judge/JudgeLanding.tsx";
import {UserContextProvider} from "./session/UserContext.tsx";

const AppRoutes: RouteObject[] = [
  {
    path: '/',
    element: <UserContextProvider><Outlet /></UserContextProvider>,
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
      },
      {
        path: 'judge',
        children: [
          {
            index: true,
            element: <JudgeLanding />
          },
          {
            path: 'id',
            element: <>Vedem si aici</>
          },
        ]
      },
    ]
  },
]

export const router = createBrowserRouter(AppRoutes);