import React, { useState } from 'react';
import { Flex } from 'antd';
import Sidebar, { sidebarOptions } from './Sidebar';
import { ISidebarOption, SIDEBAR_LABEL_ENUMS } from '@utils/types/global';
import TicketsComponent from './Tickets';
import ScheduleComponent from './Schedule';
import HistoryComponent from './History';
import SupportComponent from './Support';
import SettingsComponent from './Settings';
import HomeComponent from './Home';

const HomeContent: React.FC = () => {
  const [selectedSidebarOption, setSelectedSidebarOption] = useState<ISidebarOption | undefined>(
    sidebarOptions[0],
  );
  return (
    <Flex className="h-screen bg-primaryBackground w-full">
      <Sidebar onOptionSelect={setSelectedSidebarOption} />

      <Flex className="text-black bg-secondaryBackground w-full lg:w-[85%] m-2 lg:m-5 p-3 rounded-2xl overflow-y-auto scrollbar-hide">
        {selectedSidebarOption?.label == SIDEBAR_LABEL_ENUMS.HOME && <HomeComponent />}
        {selectedSidebarOption?.label === SIDEBAR_LABEL_ENUMS.TICKETS && <TicketsComponent />}
        {selectedSidebarOption?.label === SIDEBAR_LABEL_ENUMS.SCHEDULE && <ScheduleComponent />}
        {selectedSidebarOption?.label === SIDEBAR_LABEL_ENUMS.HISTORY && <HistoryComponent />}
        {selectedSidebarOption?.label === SIDEBAR_LABEL_ENUMS.SUPPORT && <SupportComponent />}
        {selectedSidebarOption?.label === SIDEBAR_LABEL_ENUMS.SETTINGS && <SettingsComponent />}
      </Flex>
    </Flex>
  );
};

export default HomeContent;
