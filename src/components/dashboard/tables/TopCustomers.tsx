import Typography from '@components/shared/typography';
import { Flex } from 'antd';
import DataComponentTable, { DataComponetContext } from '.';
import { useGetMyBookingsQuery } from '@store/actions/booking';
import { dateFormatterNth } from '@utils/helpers/formatDate';

const data = [
  {
    id: 'cm8z4wvqc0004pf24u6q29vpq',
    user_id: 'cm8sorowc0000s7243g4luima',
    schedule_id: 'cm8spf4pb000os724t4d1bfh9',
    status: 'PENDING',
    booking_date: '2025-04-01T23:33:57.540Z',
    updatedAt: '2025-04-01T23:33:57.540Z',
    is_admin: false,
    user: {
      name: 'Apoh Eldrige',
      email: 'a.eldrige@alustudent.com',
      phone: null,
    },
    schedule: {
      id: 'cm8spf4pb000os724t4d1bfh9',
      route_id: 'cm8souagu0006s724tsbaonbw',
      departure_time: '2025-03-23T00:08:00.000Z',
      available_seats: 30,
      price: 3000,
      createdAt: '2025-03-28T11:33:38.063Z',
      route: {
        from: 'Kigali',
        to: 'Musanze',
        bus_company: {
          name: 'Volcano',
          phone: '+250 794339362',
          email: 'volcano@bus.rw',
        },
      },
    },
  },
  {
    id: 'cm8z4wvqc0004pf24u6q29vpq',
    user_id: 'cm8sorowc0000s7243g4luima',
    schedule_id: 'cm8spf4pb000os724t4d1bfh9',
    status: 'SUCCESS',
    booking_date: '2025-04-01T23:33:57.540Z',
    updatedAt: '2025-04-01T23:33:57.540Z',
    is_admin: false,
    user: {
      name: 'Divine Birasa',
      email: 'b.divine@alustudent.com',
      phone: null,
    },
    schedule: {
      id: 'cm8spf4pb000os724t4d1bfh9',
      route_id: 'cm8souagu0006s724tsbaonbw',
      departure_time: '2025-05-10T00:08:00.000Z',
      available_seats: 12,
      price: 2700,
      createdAt: '2025-01-13T11:33:38.063Z',
      route: {
        from: 'Huye',
        to: 'Musanze',
        bus_company: {
          name: 'Volcano',
          phone: '+250 794339362',
          email: 'volcano@bus.rw',
        },
      },
    },
  },
  {
    id: 'cm8z4wvqc0004pf24u6q29vpq',
    user_id: 'cm8sorowc0000s7243g4luima',
    schedule_id: 'cm8spf4pb000os724t4d1bfh9',
    status: 'SUCCESS',
    booking_date: '2025-04-01T23:33:57.540Z',
    updatedAt: '2025-04-01T23:33:57.540Z',
    is_admin: false,
    user: {
      name: 'Milka Isingizwe',
      email: 'm.isingizwe1@alustudent.com',
      phone: null,
    },
    schedule: {
      id: 'cm8spf4pb000os724t4d1bfh9',
      route_id: 'cm8souagu0006s724tsbaonbw',
      departure_time: '2024-12-19T00:08:00.000Z',
      available_seats: 30,
      price: 3000,
      createdAt: '2025-03-28T11:33:38.063Z',
      route: {
        from: 'Kigali',
        to: 'Huye',
        bus_company: {
          name: 'Volcano',
          phone: '+250 794339362',
          email: 'volcano@bus.rw',
        },
      },
    },
  },
  {
    id: 'cm8z4wvqc0004pf24u6q29vpq',
    user_id: 'cm8sorowc0000s7243g4luima',
    schedule_id: 'cm8spf4pb000os724t4d1bfh9',
    status: 'SUCCESS',
    booking_date: '2025-04-01T23:33:57.540Z',
    updatedAt: '2025-04-01T23:33:57.540Z',
    is_admin: false,
    user: {
      name: 'Milka Isingizwe',
      email: 'm.isingizwe1@alustudent.com',
      phone: null,
    },
    schedule: {
      id: 'cm8spf4pb000os724t4d1bfh9',
      route_id: 'cm8souagu0006s724tsbaonbw',
      departure_time: '2024-12-19T00:08:00.000Z',
      available_seats: 30,
      price: 2500,
      createdAt: '2025-03-28T11:33:38.063Z',
      route: {
        from: 'Huye',
        to: 'Nyagatare',
        bus_company: {
          name: 'Volcano',
          phone: '+250 794339362',
          email: 'volcano@bus.rw',
        },
      },
    },
  },
  {
    id: 'cm8z4wvqc0004pf24u6q29vpq',
    user_id: 'cm8sorowc0000s7243g4luima',
    schedule_id: 'cm8spf4pb000os724t4d1bfh9',
    status: 'SUCCESS',
    booking_date: '2025-04-01T23:33:57.540Z',
    updatedAt: '2025-04-01T23:33:57.540Z',
    is_admin: false,
    user: {
      name: 'Milka Isingizwe',
      email: 'm.isingizwe1@alustudent.com',
      phone: null,
    },
    schedule: {
      id: 'cm8spf4pb000os724t4d1bfh9',
      route_id: 'cm8souagu0006s724tsbaonbw',
      departure_time: '2024-07-19T00:08:00.000Z',
      available_seats: 30,
      price: 3000,
      createdAt: '2025-03-28T11:33:38.063Z',
      route: {
        from: 'Nyagatare',
        to: 'Kigali',
        bus_company: {
          name: 'Volcano',
          phone: '+250 794339362',
          email: 'volcano@bus.rw',
        },
      },
    },
  },
];

const TopCustomersTable = () => {
  const columns = [
    { title: 'Route', dataIndex: 'route', key: 'route' },
    { title: 'Bus Company', dataIndex: 'busCompany', key: 'busCompany' },
    { title: 'Date', dataIndex: 'departureTime', key: 'departureTime' },
    { title: 'Price (RWF)', dataIndex: 'price', key: 'price' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
  ];

  const { isLoading } = useGetMyBookingsQuery();

  const formattedData =
    data?.map((booking, index) => ({
      key: index.toString(),
      name: booking.user.name,
      email: booking.user.email,
      route: `${booking.schedule.route.from} - ${booking.schedule.route.to}`,
      busCompany: booking.schedule.route.bus_company.name,
      // departureTime: new Date(booking.schedule.departure_time).toLocaleString(),
      departureTime: dateFormatterNth(booking.schedule.departure_time, 'D, MMM YYYY'),
      price: booking.schedule.price,
      status: booking.status,
    })) || [];

  return (
    <DataComponetContext.Provider value={{ columns, dataSource: formattedData, isLoading }}>
      <Flex vertical gap={10}>
        <Typography variant="subTitle" className="text-gray-800">
          Recent Tickets
        </Typography>
        <DataComponentTable />
      </Flex>
    </DataComponetContext.Provider>
  );
};

export default TopCustomersTable;
