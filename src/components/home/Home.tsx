import Image from '@components/shared/image';
import Typography from '@components/shared/typography';
import { BusImageHome, ProfileImage } from '@utils/images';
import { Checkbox, ConfigProvider, DatePicker, Flex } from 'antd';
import React from 'react';
import { PiBellSimple, PiBusFill } from 'react-icons/pi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Input from '@components/shared/input';
import { TbBusStop } from 'react-icons/tb';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import Button from '@components/shared/button';
import { RxCross2 } from 'react-icons/rx';
import PriceSelector from '@components/shared/input/PriceSelector';

const HomeComponent = () => {
  const inputIconSize = 20;
  const tripClasses = ['All', 'Business', 'Economy', 'Private'];
  const busScedules = [
    '6:00 AM - 9:00 AM',
    '7:00 AM - 10:00 AM',
    '9:00 AM - 12:00 PM',
    '11:00 AM - 2:00 PM',
    '1:00 PM - 4:00 PM',
    '3:00 PM - 6:00 PM',
  ];
  const busCompanies = [
    {
      name: 'Volcano Ltd',
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/65a17d6335ed8079ddfc87f9/52ec6633-4b80-4bee-88ec-23548678bf1d/ark-basigo_Volcano+express.png',
    },
    {
      name: 'Excel Tours',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3XGNEaX_5zerh_dIczJcl_lVITMrd5DQ5jA&s',
    },
    {
      name: 'Yahoo Car Express',
      imageUrl: 'https://1000logos.net/wp-content/uploads/2017/05/Yahoo-Logo-1996.png',
    },
    {
      name: 'Virunga Express',
      imageUrl: 'https://pbs.twimg.com/media/F8JuO-2WIAAJoFb.png',
    },
    {
      name: 'Royal Express',
      imageUrl: 'https://www.mhrinstitute.org/wp-content/uploads/2019/03/Royal-Express.png',
    },
  ];
  return (
    <Flex gap={30} className="flex-col w-full text-black">
      <Flex justify="space-between" className="">
        <Flex className="rounded-2xl p-2">
          <Typography variant="title">Home</Typography>
        </Flex>

        <Flex gap={10} align="center" className="rounded-2xl">
          <PiBellSimple size={24} />
          <Image
            src={ProfileImage}
            alt="User Profile Image"
            className="h-6 w-6 rounded-full object-cover"
            preview={false}
          />
          <Flex gap={5} className="max-w-[150px] cursor-pointer">
            <Typography className="font-semibold line-clamp-1">Edwin Bayingana</Typography>
            <MdKeyboardArrowDown size={inputIconSize} />
          </Flex>
        </Flex>
      </Flex>

      <Flex gap={20} justify="space-between" className="flex-col lg:flex-row">
        <Flex
          justify="space-between"
          gap={10}
          className="flex-col bg-primaryBackground lg:flex-row lg:h-[40vh] lg:w-2/3 rounded-2xl p-3 pt-7">
          <Flex justify="space-between" className="flex-col w-full">
            <span>
              <Typography className="font-semibold">Where would you like to travel to?</Typography>
              <Typography variant="title" className="font-semibold text-[30px] mt-2">
                Book a Ticket
              </Typography>
            </span>
            <Image
              src={BusImageHome}
              alt="User Profile Image"
              className="h-full md:h-[200px] w-full object-cover"
              preview={false}
            />
          </Flex>

          <Flex className="flex-col w-full">
            <Flex gap={5} className="flex-col mb-2">
              <Typography className="">From</Typography>
              <Input
                addonBefore={<TbBusStop size={inputIconSize} className="text-primary" />}
                placeholder="Select Location"
              />
            </Flex>
            <Flex gap={5} className="flex-col mb-2">
              <Typography className="">To</Typography>
              <Input
                addonBefore={<PiBusFill size={inputIconSize} className="text-primary" />}
                placeholder="Select Destination"
              />
            </Flex>

            <Flex gap={10}>
              <Flex gap={5} className="flex-col mb-2 w-full">
                <Typography className="">Date</Typography>
                <Flex
                  align="center"
                  gap={10}
                  className="w-full pl-5 bg-secondaryBackground py-1.5 rounded-lg">
                  <IoCalendarNumberOutline size={inputIconSize} className="text-primary" />

                  <DatePicker
                    placeholder="DD / MM / YYYY"
                    className="w-full text-black bg-transparent border-none"
                    rootClassName="text-black"
                  />
                </Flex>
              </Flex>
              <Flex gap={5} className="flex-col mb-2 w-1/3 md:w-2/3">
                <Typography className="">Passenger</Typography>

                <Flex
                  align="center"
                  justify="space-evenly"
                  className="w-full bg-secondaryBackground rounded-lg px-3 py-0.5">
                  <FaMinus />
                  <Input placeholder="Qty." className="bg-transparent w-16" />
                  <FaPlus />
                </Flex>
              </Flex>
            </Flex>

            <Button type="primary" className="my-3">
              Search
            </Button>
          </Flex>
        </Flex>

        <Flex
          justify="space-between"
          gap={30}
          className="flex-col pt-5 lg:w-1/3 bg-primaryBackground rounded-2xl p-3">
          <Flex justify="space-between" align="center">
            <RxCross2 size={inputIconSize} />
            <Typography className="font-semibold">Filter</Typography>
            <Typography className="font-semibold">Reset</Typography>
          </Flex>

          <Flex className="flex-col">
            <Typography className="font-semibold">Trip Class</Typography>
            <Flex
              justify="start"
              className="overflow-x-auto whitespace-nowrap scrollbar-hide gap-2 p-2"
              style={{ scrollBehavior: 'smooth' }}>
              {tripClasses.map((item, index) => {
                const selectedClass = index === 2;
                return (
                  <Typography
                    key={index}
                    className={`p-3 border rounded-xl ${selectedClass ? 'bg-primary text-white' : ''} cursor-pointer`}>
                    {item}
                  </Typography>
                );
              })}
            </Flex>
          </Flex>

          <Flex className="flex-col">
            <Typography className="font-semibold">Price...</Typography>
            <PriceSelector />
          </Flex>

          <Flex className="flex-col">
            <Typography className="font-semibold">Departure</Typography>
            <Flex
              justify="start"
              className="overflow-x-auto whitespace-nowrap scrollbar-hide gap-2 py-2"
              style={{ scrollBehavior: 'smooth' }}>
              {busScedules.map((item, index) => {
                const selectedSchedule = index === 0;
                return (
                  <Typography
                    key={index}
                    className={`p-3 border rounded-xl ${selectedSchedule ? 'bg-primary text-white' : ''} cursor-pointer`}>
                    {item}
                  </Typography>
                );
              })}
            </Flex>
          </Flex>

          <Flex className="flex-col">
            <Flex justify="space-between" className="mb-2">
              <Typography className="font-semibold">Bus Companies</Typography>
              <Typography className="font-semibold">Select All</Typography>
            </Flex>
            <Flex
              justify="start"
              gap={10}
              className="flex-col bg-secondaryBackground p-4 rounded-xl"
              style={{ scrollBehavior: 'smooth' }}>
              {busCompanies.map((item, index) => {
                const selectedCompany = index === 2;

                return (
                  <Flex key={index} gap={10} align="center" justify="space-between">
                    <Flex gap={10}>
                      <Image src={item.imageUrl} alt={item.name} className="h-5 w-5" />
                      <Typography className="font-semibold">{item.name}</Typography>
                    </Flex>

                    <ConfigProvider
                      theme={{
                        components: {
                          Checkbox: {
                            colorPrimary: '#6d54b5', // Checked color
                            size: 20, // Adjusts checkbox size
                            colorBgContainer: '#6d54b520',
                            colorBorder: '#6d54b510',
                          },
                        },
                      }}>
                      <Checkbox defaultChecked={selectedCompany} />
                    </ConfigProvider>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>

          <Button type="primary" className="my-3">
            Apply Filters
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeComponent;
