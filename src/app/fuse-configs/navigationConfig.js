import { authRoles } from 'app/auth';
import i18next from 'i18next';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'unreal',
        title: 'Unreal Engine',
        translate: 'UNREAL ENGINE',
        type: 'item',
        icon: '3d_rotation',
        url: '/apps/unreal',
      },
      {
        id: 'dashboards',
        title: 'Dashboards',
        translate: 'DASHBOARDS',
        type: 'collapse',
        icon: 'dashboard',
        children: [
          {
            id: 'analytics-dashboard',
            title: 'Analytics',
            type: 'item',
            url: '/apps/dashboards/analytics',
          },
          {
            id: 'project-dashboard',
            title: 'Project',
            type: 'item',
            url: '/apps/dashboards/project',
          },
        ],
      },
      {
        id: 'calendar',
        title: 'Calendar',
        translate: 'CALENDAR',
        type: 'item',
        icon: 'today',
        url: '/apps/calendar',
      },
      {
        id: 'chat',
        title: 'Chat',
        translate: 'CHAT',
        type: 'item',
        icon: 'chat',
        url: '/apps/chat',
        badge: {
          title: 13,
          bg: 'rgb(9, 210, 97)',
          fg: '#FFFFFF',
        },
      },
    ],
  },
];

export default navigationConfig;
