import { FC, ReactNode } from 'react';
import Link from 'next/link';

interface NavItem {
  name: string;
  href: string;
  icon: ReactNode;
}

interface SideBarProps {
  navigation: NavItem[];
  navsFooter: NavItem[];
}

export const SideBar: FC<SideBarProps> = ({ navigation, navsFooter }) => {
  return (
    <nav className="fixed top-0 left-0 w-full h-full border-r bg-white space-y-8 sm:w-80">
      <div className="flex flex-col h-full">
        <div className="h-20 flex items-center px-8">
          <a href="javascript:void(0)" className="flex-none">
            <img
              src="https://floatui.com/logo.svg"
              width={140}
              className="mx-auto"
            />
          </a>
        </div>
        <div className="flex-1 flex flex-col h-full overflow-auto">
          <ul className="px-4 text-sm font-medium flex-1">
            {navigation.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} passHref>
                  <a
                    href={item.href}
                    className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                  >
                    <div className="text-gray-500">{item.icon}</div>
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <ul className="px-4 pb-4 text-sm font-medium">
              {navsFooter.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} passHref>
                    <a
                      href={item.href}
                      className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="py-4 px-4 border-t">
              <div className="flex items-center gap-x-4">
                <img
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <span className="block text-gray-700 text-sm font-semibold">
                    Alivika tony
                  </span>
                  <a
                    href="javascript:void(0)"
                    className="block mt-px text-gray-600 hover:text-indigo-600 text-xs"
                  >
                    View profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
