import Image from '@components/shared/image';
import Typography from '@components/shared/typography';
import { BusImageHome, ProfileImage } from '@utils/images';
import { Flex } from 'antd';
import React from 'react';
import { PiBellSimple, PiBusFill } from 'react-icons/pi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Input from '@components/shared/input';
import { TbBusStop } from 'react-icons/tb';
import { IoCalendarOutline } from 'react-icons/io5';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const HomeComponent = () => {
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
            <MdKeyboardArrowDown size={20} />
          </Flex>
        </Flex>
      </Flex>

      <Flex gap={20} justify="space-between" className="h-full flex-col md:flex-row">
        <Flex
          justify="space-between"
          className="flex-col lg:flex-row bg-white md:w-2/3 rounded-2xl p-3 pt-7">
          <Flex className="flex-col w-full">
            <Typography className="font-semibold">Where would you like to travel to?</Typography>
            <Typography variant="title" className="font-semibold text-[30px] mt-2">
              Book a Ticket
            </Typography>
            <Image
              src={BusImageHome}
              alt="User Profile Image"
              className="h-full w-full object-cover"
              preview={false}
            />
          </Flex>

          <Flex className="flex-col w-full">
            <Flex gap={5} className="flex-col mb-2">
              <Typography className="">From</Typography>
              <Input
                addonBefore={<TbBusStop size={20} className="text-primary" />}
                placeholder="Select Location"
              />
            </Flex>
            <Flex gap={5} className="flex-col mb-2">
              <Typography className="">To</Typography>
              <Input
                addonBefore={<PiBusFill size={20} className="text-primary" />}
                placeholder="Select Destination"
              />
            </Flex>

            <Flex gap={10} className="">
              <Flex gap={5} className="flex-col mb-2 w-full">
                <Typography className="">Date</Typography>
                <Input
                  addonBefore={<IoCalendarOutline size={20} className="text-primary" />}
                  placeholder="DD / MM / YYYY"
                />
              </Flex>
              <Flex gap={5} className="flex-col mb-2 w-1/3 md:w-2/3">
                <Typography className="">Passenger(s)</Typography>

                <Flex
                  align="center"
                  justify="space-evenly"
                  className="w-full bg-secondaryBackground rounded-lg px-3 py-0.5">
                  <FaMinus />
                  <Input placeholder="Qty." className="bg-transparent w-20" />
                  <FaPlus />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex className="h-full md:w-1/3 bg-white rounded-2xl p-3">Right</Flex>
      </Flex>
    </Flex>
  );
};

export default HomeComponent;
