// components/Layouts/MainLayout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BottomNavigation from '../ui/BottomNavigation.jsx';

const MainLayout = () => {
  const location = useLocation(); 

  return (
    <div className="bg-black text-white">
      <TransitionGroup>
        <CSSTransition
          key={location.key} 
          timeout={500} 
          classNames="fade" 
        >
          <div className="page-content">
            <Outlet /> 
          </div>
        </CSSTransition>
      </TransitionGroup>

      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
