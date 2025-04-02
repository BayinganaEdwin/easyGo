import Typography from '@components/shared/typography';
import { Flex } from 'antd';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { VscHistory } from 'react-icons/vsc';
import { PiChatsCircle, PiHouse } from 'react-icons/pi';
import { ISidebarOption, SIDEBAR_LABEL_ENUMS } from '@utils/types/global';
import { useRouter } from 'next/router';

type SidebarIconProps = {
  item: ISidebarOption;
  key?: number;
  includeSettings?: boolean;
  onClick: () => void;
  isSelected?: boolean;
};

const SidebarOption = ({
  key,
  item,
  isSelected,
  includeSettings = true,
  onClick,
}: SidebarIconProps) => {
  if (!includeSettings && item.label === 'Settings') return;

  const Icon = () => <>{item.icon}</>;

  return (
    <Flex
      key={key}
      align="center"
      gap={15}
      className={`pl-3 py-2 my-2 text-secondary rounded-lg cursor-pointer ${isSelected && 'bg-primary text-white'}`}
      onClick={onClick}>
      <Icon />
      <Typography className={`${isSelected ? 'text-white font-semibold' : 'text-textGray'}`}>
        {item.label}
      </Typography>
    </Flex>
  );
};

const iconSize: number = 20;

export const sidebarOptions = [
  {
    label: SIDEBAR_LABEL_ENUMS.ANALYTICS,
    icon: <PiHouse size={iconSize} />,
  },
  // {
  //   label: SIDEBAR_LABEL_ENUMS.TRIPS,
  //   icon: <BsTicketPerforated size={iconSize} />,
  // },
  // {
  //   label: SIDEBAR_LABEL_ENUMS.SCHEDULE,
  //   icon: <IoCalendarOutline size={iconSize} />,
  // },
  {
    label: SIDEBAR_LABEL_ENUMS.HISTORY,
    icon: <VscHistory size={iconSize} />,
  },
  {
    label: SIDEBAR_LABEL_ENUMS.SUPPORT,
    icon: <PiChatsCircle size={iconSize} />,
  },
  {
    label: SIDEBAR_LABEL_ENUMS.SETTINGS,
    icon: <IoSettingsOutline size={iconSize} />,
  },
];

const Sidebar = ({
  onOptionSelect,
}: {
  onOptionSelect: Dispatch<SetStateAction<ISidebarOption | undefined>>;
}) => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<ISidebarOption>(sidebarOptions[0]);

  const handleOptionClick = (item: ISidebarOption) => {
    setSelectedOption(item);
    onOptionSelect(item);
  };
  // const settingsOption = sidebarOptions[sidebarOptions.length - 1];

  const handleLogoClick = () => {
    router.replace('/');
  };

  return (
    <Flex justify="space-between" className="hidden lg:flex flex-col pl-2 my-8 w-[15%]">
      <Flex justify="space-between" className="flex-col pl-2">
        <Typography variant="title" className="pl-3 cursor-pointer" onClick={handleLogoClick}>
          easyGo.
        </Typography>

        <Flex className="flex-col mt-6">
          {sidebarOptions.map((item, index) => {
            // if (item.label === 'Settings') return;
            const isSelected = selectedOption.label === item.label;
            return (
              <SidebarOption
                key={index}
                item={item}
                onClick={() => handleOptionClick(item)}
                isSelected={isSelected}
              />
            );
          })}
        </Flex>
      </Flex>

      {/* <div className="pl-2">
        <SidebarOption
          item={settingsOption}
          isSelected={selectedOption.label === settingsOption.label}
          onClick={() => handleOptionClick(settingsOption)}
        />
      </div> */}
    </Flex>
  );
};

export default Sidebar;
