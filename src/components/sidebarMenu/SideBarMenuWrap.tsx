import React, { ReactNode, useState } from 'react';
import SideBarMenu from './SideBarMenu';
import IconsComponent from '../icons/IconsComponent';
type MenuItem = {
  name: string;
  link: string;
  icons: string;
  children?: MenuItem[];
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

interface SidebarMenuContentWrapProps {
  children?: ReactNode;
  sidebarMenus: MenuSection[];
  imageSrc?: string;
}

const SidebarMenuContentWrap: React.FC<SidebarMenuContentWrapProps> = ({
  children,
  sidebarMenus,
  imageSrc, // Destructure sidebarBottomChildren here
}) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className='sidebar-with-content-area flex min-h-screen w-full items-start justify-start'>
      <SideBarMenu
        expandSideBar={open}
        sidebarMenus={sidebarMenus} // Pass sidebarBottomChildren here
        imageSrc={imageSrc}
      />
      <div
        className={`content-area relative p-6 ${
          open
            ? 'expanded left-[288px] w-[calc(100%_-_288px)]'
            : 'left-[96px] w-[calc(100%_-_96px)]'
        } transition duration-150 ease-in-out`}
      >
        <div className='icon-wrap'>
          <span onClick={() => setOpen(!open)}>
            <IconsComponent
              fill='red'
              icon='reg-sidebar-expand'
              size='4xl'
            />
          </span>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SidebarMenuContentWrap;
