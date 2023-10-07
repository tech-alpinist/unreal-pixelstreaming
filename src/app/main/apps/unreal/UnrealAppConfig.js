import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const UnrealAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/apps/unreal/scene/:id',
      component: lazy(() => import('./scene/Scene')),
    },
    {
      path: '/apps/unreal/scenes',
      component: lazy(() => import('./scenes/Scenes')),
    },
    {
      path: '/apps/unreal',
      component: () => <Redirect to="/apps/unreal/scenes" />,
    },
  ],
};

export default UnrealAppConfig;
