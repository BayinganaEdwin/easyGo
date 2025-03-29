import { Flex } from 'antd';
import React from 'react';
import Typography from '../typography';
import { MdChair } from 'react-icons/md';
import { LuBus } from 'react-icons/lu';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoLocation } from 'react-icons/io5';
import Button from '../button';

export type ITicketType = {
  from: string;
  to: string;
  busCompanyName: string;
  busPlateNumber: string;
  remainingSeats: number;
  departure: string;
  arrival: string;
  price: number;
};

const TicketCard = ({ ticket }: { ticket: ITicketType }) => {
  return (
    <Flex vertical gap={10} className="w-full bg-primaryBackground/50 p-5 rounded-2xl">
      <Flex gap={10} align="center">
        <Flex gap={5} align="center" className="px-3 py-1 rounded-full bg-neutral-300">
          <LuBus className="text-neutral-600" />
          <Typography>{ticket.busPlateNumber}</Typography>
        </Flex>

        <Flex gap={5} align="center" className="px-3 py-1 rounded-full bg-neutral-300">
          <MdChair className="text-neutral-600" />
          <Typography>
            {ticket.remainingSeats > 0 ? ticket.remainingSeats : 'No'} Seats Left
          </Typography>
        </Flex>
      </Flex>

      <Flex justify="space-between">
        <Flex align="center" gap={5}>
          <IoLocation size={30} className="text-primary" />
          <Typography variant="subTitle">{ticket.from}</Typography>
          <FaArrowRightLong size={20} className="text-neutral-500 mx-3" />
          <Typography variant="subTitle">{ticket.to}</Typography>
        </Flex>

        <Flex vertical>
          <Typography variant="subTitle">{ticket.price.toLocaleString()} RWF</Typography>
          <Typography variant="body">Travel Cost</Typography>
        </Flex>
      </Flex>

      <Typography className="text-neutral-500">{ticket.busCompanyName}</Typography>

      <Flex justify="space-between" align="center" gap={10}>
        <Flex justify="space-between" className="w-2/3 border-t border-t-neutral-300">
          <Flex vertical className="pt-2">
            <Typography variant="body" className="text-neutral-500">
              Departure Time
            </Typography>
            <Typography className="font-bold">{ticket.departure}</Typography>
          </Flex>

          <Flex vertical className="pt-2">
            <Typography variant="body" className="text-neutral-500">
              Arrival Time
            </Typography>
            <Typography className="font-bold">{ticket.arrival}</Typography>
          </Flex>
        </Flex>

        <Flex vertical>
          <Button>Buy Ticket</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TicketCard;
