import { Table, TableProps } from 'antd';
import {
  createContext,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useContext,
} from 'react';

type OnChange = NonNullable<TableProps<any>['onChange']>;
interface Props {
  isSmall?: boolean;
  onChange?: OnChange;
}

export const DataComponetContext = createContext<any>({
  view: 'table',
  columns: [],
  dataSource: [],
  setView: () => null,
  isLoading: false,
  renderGrid: () => <></>,
});

const DataComponentTable = ({ isSmall = false, onChange }: Props) => {
  const { columns, dataSource, isLoading } = useContext(DataComponetContext);

  const modifiedColumns = columns.map((col: any, index: number) => {
    if (index === 0) {
      return {
        ...col,
        render: (
          text:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined,
        ) => <span>{text}</span>,
      };
    }
    return col;
  });

  return (
    <div className={`${!isSmall && 'mt-5'} mb-5 w-full`}>
      <Table
        rowKey={(record) => record.id}
        dataSource={dataSource}
        onChange={onChange}
        columns={modifiedColumns}
        size={isSmall ? 'small' : 'middle'}
        bordered={false}
        loading={isLoading}
        scroll={{
          x: 500,
          y: isSmall ? 300 : undefined,
        }}
        pagination={false}
        rowClassName={() => 'bg-white text-black hover:text-white'}
      />
    </div>
  );
};

export default DataComponentTable;
