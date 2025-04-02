import React, { useState, useEffect } from 'react';
import { Col, Flex, Row } from 'antd';
import Navbar from './Navbar';
import Typography from '@components/shared/typography';
import Input from '@components/shared/input';
import { IoSwapHorizontalOutline } from 'react-icons/io5';
import TicketCard, { ITicketType } from '@components/shared/card/Ticket';

const HomeContent: React.FC = () => {
  const mostKnownPlaces = ['Kigali', 'Musanze', 'Nyanza', 'Huye'];

  const tickets: ITicketType[] = [
    {
      from: 'Kigali',
      to: 'Huye',
      busCompanyName: 'Volcano',
      busPlateNumber: 'RAD800T',
      remainingSeats: 10,
      departure: '8:00 AM',
      arrival: '11:00 AM',
      price: 3000,
    },
    {
      from: 'Musanze',
      to: 'Kigali',
      busCompanyName: 'Virunga Express',
      busPlateNumber: 'RAC450K',
      remainingSeats: 5,
      departure: '9:30 AM',
      arrival: '11:30 AM',
      price: 4000,
    },
    {
      from: 'Rubavu',
      to: 'Musanze',
      busCompanyName: 'RITCO',
      busPlateNumber: 'RAB123M',
      remainingSeats: 8,
      departure: '7:00 AM',
      arrival: '9:00 AM',
      price: 3000,
    },
    {
      from: 'Muhanga',
      to: 'Kayonza',
      busCompanyName: 'Horizon Express',
      busPlateNumber: 'RAF567N',
      remainingSeats: 12,
      departure: '6:45 AM',
      arrival: '9:15 AM',
      price: 4500,
    },
    {
      from: 'Nyagatare',
      to: 'Kigali',
      busCompanyName: 'KBS',
      busPlateNumber: 'RAE678P',
      remainingSeats: 6,
      departure: '10:00 AM',
      arrival: '12:30 PM',
      price: 6000,
    },
    {
      from: 'Rusizi',
      to: 'Huye',
      busCompanyName: 'Volcano',
      busPlateNumber: 'RAH234Q',
      remainingSeats: 15,
      departure: '4:30 AM',
      arrival: '9:30 AM',
      price: 7500,
    },
    {
      from: 'Kayonza',
      to: 'Rwamagana',
      busCompanyName: 'RITCO',
      busPlateNumber: 'RAJ678R',
      remainingSeats: 9,
      departure: '11:00 AM',
      arrival: '12:30 PM',
      price: 2500,
    },
    {
      from: 'Gicumbi',
      to: 'Musanze',
      busCompanyName: 'Horizon Express',
      busPlateNumber: 'RAK345S',
      remainingSeats: 4,
      departure: '5:00 PM',
      arrival: '6:45 PM',
      price: 3500,
    },
    {
      from: 'Huye',
      to: 'Rubavu',
      busCompanyName: 'Volcano',
      busPlateNumber: 'RAD123T',
      remainingSeats: 7,
      departure: '3:15 PM',
      arrival: '7:00 PM',
      price: 5000,
    },
  ];

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [filteredTickets, setFilteredTickets] = useState(tickets);

  // Live search filtering
  useEffect(() => {
    const filtered = tickets.filter(
      (ticket) =>
        ticket.from.toLowerCase().includes(from.toLowerCase()) &&
        ticket.to.toLowerCase().includes(to.toLowerCase()),
    );
    setFilteredTickets(filtered);
  }, [from, to]);

  const handlePlaceClick = (place: string) => {
    setFrom((prevFrom) => (prevFrom === place ? '' : place));
    setTo((prevTo) => (prevTo === place ? '' : prevTo || place));
  };

  return (
    <Flex vertical gap={20} className="bg-neutral-200 w-full py-5 px-4 md:px-10">
      <Navbar />

      {/* Hero Section */}
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

          {/* Search Inputs */}
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

      {/* Most Known Places */}
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
              onClick={() => handlePlaceClick(place)}>
              <Typography>{place}</Typography>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* Ticket List */}
      <Flex>
        <Row gutter={[16, 16]} className="w-full">
          {filteredTickets.length > 0 ? (
            filteredTickets.map((ticket, index) => (
              <Col key={index} xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
                <TicketCard ticket={ticket} />
              </Col>
            ))
          ) : (
            <Typography className="text-center w-full text-gray-500">No tickets found</Typography>
          )}
        </Row>
      </Flex>
    </Flex>
  );
};

export default HomeContent;
