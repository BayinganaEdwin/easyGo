import { Flex } from 'antd';
import React from 'react';
import Typography from '../typography';
import { MdChair } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoLocation } from 'react-icons/io5';
import Button from '../button';
import { useRouter } from 'next/router';

export type ITicketType = {
  id: string;
  route_id: string;
  departure_time: string;
  available_seats: number;
  price: number;
  route: {
    id: string;
    from: string;
    to: string;
  };
};

const formatTime = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
};

const TicketCard = ({ ticket }: { ticket: ITicketType }) => {
  const router = useRouter();
  const handleBuyTicket = () => {
    router.push(`/buyticket?ticketId=${ticket.id}`);
  };

  return (
    <Flex vertical gap={10} className="w-full bg-primaryBackground/50 p-5 rounded-2xl">
      <Flex gap={10} align="center">
        <Flex gap={5} align="center" className="px-3 py-1 rounded-full bg-neutral-300">
          <MdChair className="text-neutral-600" />
          <Typography>
            {ticket.available_seats > 0 ? ticket.available_seats : 'No'} Seats Left
          </Typography>
        </Flex>
      </Flex>

      <Flex justify="space-between">
        <Flex align="center" gap={5}>
          <IoLocation size={30} className="text-primary" />
          <Typography variant="subTitle">{ticket.route.from}</Typography>
          <FaArrowRightLong size={20} className="text-neutral-500 mx-3" />
          <Typography variant="subTitle">{ticket.route.to}</Typography>
        </Flex>

        <Flex vertical>
          <Typography variant="subTitle">{ticket.price.toLocaleString()} RWF</Typography>
          <Typography variant="body">Travel Cost</Typography>
        </Flex>
      </Flex>

      <Typography className="text-neutral-500">Volcano</Typography>

      <Flex justify="space-between" align="center" gap={10}>
        <Flex justify="space-between" className="w-2/3 border-t border-t-neutral-300">
          <Flex vertical className="pt-2">
            <Typography variant="body" className="text-neutral-500">
              Departure Time
            </Typography>
            <Typography className="font-bold">{formatTime(ticket.departure_time)}</Typography>
          </Flex>
        </Flex>

        <Flex vertical>
          <Button onClick={handleBuyTicket}>Buy Ticket</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TicketCard;
