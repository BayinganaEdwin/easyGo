import { Flex, Card } from 'antd';
import Typography from '@components/shared/typography';
import DataComponentTable, { DataComponetContext } from '.';

const routesData = [
  { id: '1', routeName: 'Route A', origin: 'City 1', destination: 'City 2', distance: '120km' },
  { id: '2', routeName: 'Route B', origin: 'City 3', destination: 'City 4', distance: '200km' },
  { id: '3', routeName: 'Route C', origin: 'City 5', destination: 'City 6', distance: '150km' },
];

const columns = [
  { title: 'Route Name', dataIndex: 'routeName', key: 'routeName' },
  { title: 'Origin', dataIndex: 'origin', key: 'origin' },
  { title: 'Destination', dataIndex: 'destination', key: 'destination' },
  { title: 'Distance', dataIndex: 'distance', key: 'distance' },
];

const RoutesTable = () => (
  <DataComponetContext.Provider value={{ columns, dataSource: routesData, isLoading: false }}>
    <Card className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
      <Flex vertical gap={10}>
        <Typography variant="subTitle" className="text-gray-800">
          Routes
        </Typography>
        <DataComponentTable />
      </Flex>
    </Card>
  </DataComponetContext.Provider>
);

export default RoutesTable;
