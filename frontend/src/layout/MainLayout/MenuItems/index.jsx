// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  IconHome2,
  IconRadioactive,
  IconAffiliate,
  IconNotebook,
  IconSchool,
  IconExchange,
  IconMail,
  IconFileStack
} from '@tabler/icons-react';
import { IconBrandSpeedtest, IconPackages } from '@tabler/icons-react';
// project import
import { useSelector } from 'react-redux';

// assets

const icons = {
  dashboardOutlined: IconBrandSpeedtest,
  goldOutlined: IconPackages
};

// ==============================|| MENU ITEMS ||============================== //

export const menuItems = {
  items: [
    {
      id: 'sample',
      type: 'group',
      children: [
        {
          id: 'sample-page',
          title: <FormattedMessage id={'sample-page'} defaultMessage={'My Innofuse'} />,
          type: 'item',
          url: 'sample-page',
          disabled: false,
          icon: IconHome2
        }
      ]
    }
  ]
};

const DashboardMenu = () => {
  const { menuDashboard } = useSelector((state) => state.menuReducer);

  const SubChildrenLis = (SubChildrenList) => {
    return SubChildrenList?.map((subList) => {
      return {
        ...subList,
        title: <FormattedMessage id={`${subList.title}`} />,
        icon: icons[subList.icon]
      };
    });
  };

  const menuList = (subList) => {
    let list = {
      ...subList,
      title: <FormattedMessage id={subList.title === 'components' ? `${subList.title}` : `${subList.title}`} />,
      icon: icons[subList.icon]
    };

    if (subList.type === 'collapse') {
      list.children = SubChildrenLis(subList.children);
    }
    return list;
  };
  const ChildrenList = menuDashboard?.children?.map((subList) => {
    return menuList(subList);
  });

  const dashboardList = {
    ...menuDashboard,
    title: <FormattedMessage id={`${menuDashboard.title}`} />,
    icon: icons[menuDashboard.icon],
    children: ChildrenList
  };

  return dashboardList;
};

export default DashboardMenu;
