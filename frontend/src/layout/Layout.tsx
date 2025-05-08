import React from 'react';
import {Header} from "./Header.tsx";
import {Navigation} from "./Navigation.tsx";
import {Outlet} from "react-router";
import {Footer} from "./Footer.tsx";

const Layout: React.FC = () => {
    return (
        <div className={'flex flex-col w-screen min-h-screen p-2 bg-gradient-to-r from-indigo-900 from-10% via-sky-900 via-30% to-emerald-900 to-90%'}>
          <Header />
            <div className={'flex flex-row flex-grow'}>
              <Navigation />
              <Outlet />
            </div>
          <Footer />
        </div>
    );
};

export default Layout;