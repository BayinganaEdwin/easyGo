import { Flex, Card } from 'antd';
import Typography from '@components/shared/typography';
import DataComponentTable, { DataComponetContext } from '.';

const tripsData = [
  { id: '1', tripID: 'T-1001', route: 'Route A', bus: 'RA 1234', passengers: 40 },
  { id: '2', tripID: 'T-1002', route: 'Route B', bus: 'RB 5678', passengers: 35 },
  { id: '3', tripID: 'T-1003', route: 'Route C', bus: 'RC 9101', passengers: 50 },
];

const columns = [
  { title: 'Trip ID', dataIndex: 'tripID', key: 'tripID' },
  { title: 'Route', dataIndex: 'route', key: 'route' },
  { title: 'Bus', dataIndex: 'bus', key: 'bus' },
  { title: 'Passengers', dataIndex: 'passengers', key: 'passengers' },
];

const TripsTable = () => (
  <DataComponetContext.Provider value={{ columns, dataSource: tripsData, isLoading: false }}>
    <Card className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
      <Flex vertical gap={10}>
        <Typography variant="subTitle" className="text-gray-800">
          Trips
        </Typography>
        <DataComponentTable />
      </Flex>
    </Card>
  </DataComponetContext.Provider>
);

export default TripsTable;
