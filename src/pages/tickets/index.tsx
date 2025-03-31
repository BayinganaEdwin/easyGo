import TicketCard, { ITicketType } from '@components/shared/card/Ticket';
import Navbar from '@components/home/Navbar';
import React from 'react';
import { Col, Row, Flex } from 'antd';
import Typography from '@components/shared/typography';
import Input from '@components/shared/input';
import { IoSwapHorizontalOutline } from 'react-icons/io5';
import { CgSearch } from 'react-icons/cg';

const TicketPage: React.FC = () => {
  const knownPlaces = ['Kigali', 'Musanze', 'Nyanza', 'Huye'];
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
      from: 'Kigali',
      to: 'Huye',
      busCompanyName: 'Volcano',
      busPlateNumber: 'RAE546A',
      remainingSeats: 7,
      departure: '8:15 AM',
      arrival: '11:15 AM',
      price: 3000,
    },
    {
      from: 'Kigali',
      to: 'Huye',
      busCompanyName: 'Volcano',
      busPlateNumber: 'RAC312K',
      remainingSeats: 1,
      departure: '8:30 AM',
      arrival: '11:30 AM',
      price: 3000,
    },
    {
      from: 'Kigali',
      to: 'Huye',
      busCompanyName: 'Volcano',
      busPlateNumber: 'RAC910X',
      remainingSeats: 5,
      departure: '9:00 AM',
      arrival: '12:00 PM',
      price: 3000,
    },
    {
      from: 'Kigali',
      to: 'Huye',
      busCompanyName: 'Volcano',
      busPlateNumber: 'RAD215A',
      remainingSeats: 20,
      departure: '10:00 AM',
      arrival: '13:00 PM',
      price: 3000,
    },
    {
      from: 'Kigali',
      to: 'Musanze',
      busCompanyName: 'Volcano',
      busPlateNumber: 'RAE917P',
      remainingSeats: 9,
      departure: '8:00 AM',
      arrival: '12:00 PM',
      price: 3750,
    },
    {
      from: 'Kigali',
      to: 'Musanze',
      busCompanyName: 'Volcano',
      busPlateNumber: 'RAC111Z',
      remainingSeats: 15,
      departure: '10:00 AM',
      arrival: '14:00 PM',
      price: 3750,
    },
    {
      from: 'Kigali',
      to: 'Huye',
      busCompanyName: 'Volcano',
      busPlateNumber: 'RAB426C',
      remainingSeats: 19,
      departure: '8:00 AM',
      arrival: '11:00 AM',
      price: 3000,
    },
    {
      from: 'Kigali',
      to: 'Nyanza',
      busCompanyName: 'Volcano',
      busPlateNumber: 'RAD817B',
      remainingSeats: 10,
      departure: '9:00 AM',
      arrival: '11:15 AM',
      price: 2715,
    },
  ];
  return (
    <Flex vertical gap={20} className="bg-neutral-200 w-full py-5 px-10">
      <Navbar />

      <Flex
        style={{
          backgroundImage:
            'url(https://africa.itdp.org/wp-content/uploads/2021/04/27345699295_6163aab6f1_o-scaled.jpg)',
        }}
        align="center"
        justify="center"
        className="relative h-[40vh] bg-cover bg-center rounded-[30px]">
        <div className="absolute inset-0 bg-black/70 rounded-[30px]" />
        <Flex vertical className="absolute" align="center" gap={10}>
          <Typography variant="header" className="text-white">
            Reserve your ticket!
          </Typography>
          <Typography variant="body" className="text-white">
            If you don&apos;t see your ticket, don&apos;t worry! We&apos;re still processing it.
          </Typography>

          <Flex align="center" gap={10}>
            <Input className="bg-white" placeholder="From" />
            <IoSwapHorizontalOutline size={50} className="text-white cursor-pointer" />
            <Input className="bg-white" placeholder="To" />
            <Flex
              align="center"
              justify="center"
              className="bg-primary p-3 rounded-full cursor-pointer">
              <CgSearch size={15} className="text-white " />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex vertical gap={10}>
        <Typography variant="subTitle">Most known places</Typography>

        <Flex gap={10}>
          {knownPlaces.length &&
            knownPlaces.map((place, index) => (
              <Flex
                key={index}
                className="text-neutral-800 bg-primaryBackground/70 py-2 px-4 rounded-full cursor-pointer">
                <Typography className="font-semibold text-[1rem]">{place}</Typography>
              </Flex>
            ))}
        </Flex>
      </Flex>

      <Flex>
        <Row gutter={[16, 16]}>
          {tickets.map((ticket, index) => (
            <Col key={index} xs={24} sm={24} md={12} lg={12}>
              <TicketCard ticket={ticket} />
            </Col>
          ))}
        </Row>
      </Flex>
    </Flex>
  );
};

export default TicketPage;
