import React, { useState, useEffect } from 'react';
import { Col, Flex, Row, Spin } from 'antd';
import Navbar from './Navbar';
import Typography from '@components/shared/typography';
import Input from '@components/shared/input';
import { IoSwapHorizontalOutline } from 'react-icons/io5';
import TicketCard, { ITicketType } from '@components/shared/card/Ticket';
import { useGetSchedulesQuery } from '@store/actions/booking';

const HomeContent: React.FC = () => {
  const mostKnownPlaces = ['Kigali', 'Musanze', 'Nyanza', 'Huye'];
  const { data: tickets, isLoading } = useGetSchedulesQuery();

  const [ticketList, setTicketList] = useState<ITicketType[]>([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  useEffect(() => {
    if (tickets) {
      setTicketList(tickets);
    }
  }, [tickets]);

  useEffect(() => {
    if (tickets) {
      const filtered = tickets.filter(
        (ticket: ITicketType) =>
          ticket.route.from.toLowerCase().includes(from.toLowerCase()) &&
          ticket.route.to.toLowerCase().includes(to.toLowerCase()),
      );
      setTicketList(filtered);
    }
  }, [from, to, tickets]);

  const handlePlaceClick = (place: string) => {
    setFrom((prevFrom) => (prevFrom === place ? '' : place));
    setTo((prevTo) => (prevTo === place ? '' : prevTo || place));
  };

  return (
    <Flex vertical gap={20} className="bg-neutral-200 w-full py-5 px-4 md:px-10">
      <Navbar />

      <Flex
        style={{
          backgroundImage:
            'url(https://africa.itdp.org/wp-content/uploads/2021/04/27345699295_6163aab6f1_o-scaled.jpg)',
        }}
        align="center"
        justify="center"
        className="relative h-[30vh] md:h-[40vh] bg-cover bg-center rounded-[20px]">
        <div className="absolute inset-0 bg-black/70 rounded-[20px]" />
        <Flex vertical className="absolute text-center" align="center" gap={10}>
          <Typography variant="header" className="text-white text-lg md:text-2xl">
            Reserve your ticket!
          </Typography>
          <Typography variant="body" className="text-white text-sm md:text-base">
            If you don&apos;t see your ticket, we&apos;re still processing it.
          </Typography>
          <Flex align="center" gap={3} className="w-full max-w-xl mt-3">
            <Input
              className="bg-white w-2/5 text-sm md:text-base"
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <IoSwapHorizontalOutline size={30} className="text-white cursor-pointer" />
            <Input
              className="bg-white w-2/5 text-sm md:text-base"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </Flex>
        </Flex>
      </Flex>

      <Flex vertical gap={10} className="px-2 md:px-0">
        <Typography className="text-lg font-semibold">Most Known Places</Typography>
        <Flex gap={3} className="flex-wrap">
          {mostKnownPlaces.map((place, index) => (
            <Flex
              key={index}
              className={`py-2 px-4 rounded-full cursor-pointer text-sm md:text-base transition-all duration-200 ${
                from === place || to === place
                  ? 'bg-primary text-white'
                  : 'bg-primaryBackground/70 text-neutral-800'
              }`}
              // onClick={() => handlePlaceClick(place)}
            >
              <Typography>{place}</Typography>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {isLoading ? (
        <Spin />
      ) : (
        <Flex>
          <Row gutter={[16, 16]} className="w-full">
            {ticketList.length > 0 ? (
              ticketList.map((ticket, index) => (
                <Col key={index} xs={24} sm={24} md={24} lg={12} xl={12} xxl={8}>
                  <TicketCard ticket={ticket} />
                </Col>
              ))
            ) : (
              <Typography className="text-center w-full text-gray-500">No tickets found</Typography>
            )}
          </Row>
        </Flex>
      )}
    </Flex>
  );
};

export default HomeContent;
