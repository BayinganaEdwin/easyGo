import React from 'react';
import { Card, Col, Row, Divider, Space } from 'antd';
import { Flex } from 'antd';
import Typography from '@components/shared/typography';
import { LoggedInUserLogo } from '@components/home/Navbar';

const data = [
  {
    id: 'cm8z5xybc0005pf24u6q30xyz',
    user_id: 'cm8tp1rowc0001s7243g4abcd',
    schedule_id: 'cm8spf4pb000os724t4d1xyz9',
    status: 'CONFIRMED',
    booking_date: '2025-04-02T10:15:20.123Z',
    updatedAt: '2025-04-02T11:20:30.123Z',
    user: {
      name: 'John Doe',
      email: 'j.doe@example.com',
      phone: '+250 788123456',
    },
    schedule: {
      id: 'cm8spf4pb000os724t4d1xyz9',
      route_id: 'cm8souagu0006s724tsbaopqr',
      departure_time: '2025-05-12T15:30:00.000Z',
      available_seats: 25,
      price: 1500,
      createdAt: '2025-03-30T14:00:45.789Z',
      route: {
        from: 'Kigali',
        to: 'Huye',
        bus_company: {
          name: 'Ritco',
          phone: '+250 788654321',
          email: 'info@ritco.rw',
        },
      },
    },
  },
  {
    id: 'cm8z6lmnc0006pf24u6q31lmn',
    user_id: 'cm8yq1rowc0002s7243g4efgh',
    schedule_id: 'cm8spf4pb000os724t4d1efg9',
    status: 'PENDING',
    booking_date: '2025-04-03T08:45:10.567Z',
    updatedAt: '2025-04-03T08:45:10.567Z',
    user: {
      name: 'Jane Smith',
      email: 'j.smith@example.com',
      phone: '+250 799987654',
    },
    schedule: {
      id: 'cm8spf4pb000os724t4d1efg9',
      route_id: 'cm8souagu0006s724tsbaoxyz',
      departure_time: '2025-05-15T10:00:00.000Z',
      available_seats: 18,
      price: 2200,
      createdAt: '2025-03-31T09:20:50.456Z',
      route: {
        from: 'Musanze',
        to: 'Rubavu',
        bus_company: {
          name: 'Volcano',
          phone: '+250 794339362',
          email: 'volcano@bus.rw',
        },
      },
    },
  },
  {
    id: 'cm8z7qopc0007pf24u6q32opq',
    user_id: 'cm8zr2rowc0003s7243g4ijkl',
    schedule_id: 'cm8spf4pb000os724t4d1hij9',
    status: 'CANCELLED',
    booking_date: '2025-04-04T14:20:30.890Z',
    updatedAt: '2025-04-05T09:00:00.100Z',
    user: {
      name: 'Alice Brown',
      email: 'a.brown@example.com',
      phone: null,
    },
    schedule: {
      id: 'cm8spf4pb000os724t4d1hij9',
      route_id: 'cm8souagu0006s724tsbaomno',
      departure_time: '2025-05-18T07:45:00.000Z',
      available_seats: 10,
      price: 1800,
      createdAt: '2025-04-01T16:45:25.890Z',
      route: {
        from: 'Rubavu',
        to: 'Kigali',
        bus_company: {
          name: 'Kigali Express',
          phone: '+250 785432109',
          email: 'contact@kigaliexpress.rw',
        },
      },
    },
  },
  {
    id: 'cm8z8rstc0008pf24u6q33rst',
    user_id: 'cm8zs3rowc0004s7243g4mnop',
    schedule_id: 'cm8spf4pb000os724t4d1klm9',
    status: 'CONFIRMED',
    booking_date: '2025-04-05T18:30:40.345Z',
    updatedAt: '2025-04-05T18:45:50.567Z',
    user: {
      name: 'Michael Johnson',
      email: 'm.johnson@example.com',
      phone: '+250 782345678',
    },
    schedule: {
      id: 'cm8spf4pb000os724t4d1klm9',
      route_id: 'cm8souagu0006s724tsbaoqrs',
      departure_time: '2025-05-20T13:15:00.000Z',
      available_seats: 12,
      price: 2000,
      createdAt: '2025-04-02T11:30:50.123Z',
      route: {
        from: 'Huye',
        to: 'Musanze',
        bus_company: {
          name: 'Horizon',
          phone: '+250 786789012',
          email: 'support@horizon.rw',
        },
      },
    },
  },
  {
    id: 'cm8z9uvw00009pf24u6q34uvw',
    user_id: 'cm8zt4rowc0005s7243g4qrst',
    schedule_id: 'cm8spf4pb000os724t4d1nop9',
    status: 'PENDING',
    booking_date: '2025-04-06T12:10:15.789Z',
    updatedAt: '2025-04-06T12:10:15.789Z',
    user: {
      name: 'Sarah Williams',
      email: 's.williams@example.com',
      phone: '+250 781234567',
    },
    schedule: {
      id: 'cm8spf4pb000os724t4d1nop9',
      route_id: 'cm8souagu0006s724tsbaouvw',
      departure_time: '2025-05-25T09:50:00.000Z',
      available_seats: 20,
      price: 1700,
      createdAt: '2025-04-03T08:15:35.678Z',
      route: {
        from: 'Kigali',
        to: 'Butare',
        bus_company: {
          name: 'Volcano',
          phone: '+250 794339362',
          email: 'volcano@bus.rw',
        },
      },
    },
  },
];

const HistoryComponent = () => {
  return (
    <Flex vertical className="p-4">
      <Flex justify="space-between">
        <Typography variant="subTitle">Ticket History</Typography>
        <LoggedInUserLogo />
      </Flex>
      <Row gutter={[16, 16]} className="py-3">
        {data.map((ticket) => (
          <Col xs={24} sm={12} md={8} lg={8} key={ticket.id}>
            <Card
              headStyle={{
                borderBottom: 'none',
                backgroundColor: '#6d54b510',
                boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
              }}
              title={
                <Typography className="font-bold">
                  {ticket.schedule.route.from} ➔ {ticket.schedule.route.to}
                </Typography>
              }
              style={{
                width: '100%',
                borderRadius: '10px',
                boxShadow: '0 8px 8px rgba(0, 0, 0, 0.1)',
              }}
              className="bg-white"
              variant="borderless">
              <Space direction="vertical" size={12} style={{ width: '100%' }}>
                <Typography>Booking Date:</Typography>
                <Typography>{new Date(ticket.booking_date).toLocaleString()}</Typography>
                <Divider className="border-black/10" />
                <Typography>Departure Time:</Typography>
                <Typography>{new Date(ticket.schedule.departure_time).toLocaleString()}</Typography>
                <Divider className="border-black/10" />
                <Typography>Price:</Typography>
                <Typography>RWF {ticket.schedule.price}</Typography>
                <Divider className="border-black/10" />
                <Typography>Bus Company:</Typography>
                <Typography>{ticket.schedule.route.bus_company.name}</Typography>
                <Typography>{ticket.schedule.route.bus_company.phone}</Typography>
                <Typography>{ticket.schedule.route.bus_company.email}</Typography>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default HistoryComponent;
