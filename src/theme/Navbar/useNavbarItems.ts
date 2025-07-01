import {useThemeConfig} from '@docusaurus/theme-common';
import {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import {useLocation} from '@docusaurus/router';
import {sections} from '@site/src/pages/index';

export function useNavbarItems() {
  // 检查当前路由
  const location = useLocation();
  // 获取 docusaurus.config.ts 中定义的默认导航项
  const defaultItems = useThemeConfig().navbar.items as NavbarItemConfig[];

  // 如果是首页，就使用自定义的导航项
  if (location.pathname === '/') {
    // 根据 sections 数组创建导航项
    return sections.map((section) => {
      // 如果是下拉菜单类型
      if (section.type === 'dropdown') {
        return {
          label: section.name,
          to: `/#${section.id}`,
          position: 'right',
          type: 'dropdown',
          items: section.items, // 将子项传递给导航栏组件
        };
      }
      // 否则，创建普通链接
      return {
        label: section.name,
        to: `/#${section.id}`,
        position: 'right',
      };
    }) as NavbarItemConfig[];
  }

  // 否则，返回默认导航项
  return defaultItems;
} 