import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`APP__CONTAINER ${classNames}`}>
      {/* <SocialMedia /> */}
      <div className="APP__WRAPPER APP__FLEX">
        <Component />

        {/* <div className="copyright">
          <p className="p-text">@2022 Isaiah Simon</p>
          <p className="p-text">All rights reserved</p>
        </div> */}
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;
