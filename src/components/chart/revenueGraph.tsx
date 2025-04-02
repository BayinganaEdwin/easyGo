import Typography from '@components/shared/typography';
import formatNumber from '@utils/helpers/formatNumber';
import { Card, Empty, Spin } from 'antd';
import { FC } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const RevenueGraph: FC = () => {
  const data = [
    { date: 'Mar', amount: 11050 },
    { date: 'Apr', amount: 15000 },
    { date: 'May', amount: 16500 },
    { date: 'Jun', amount: 18000 },
    { date: 'Jul', amount: 14050 },
    { date: 'Aug', amount: 17500 },
    { date: 'Sep', amount: 19000 },
    { date: 'Oct', amount: 20050 },
    { date: 'Nov', amount: 21500 },
    { date: 'Dec', amount: 22500 },
    { date: 'Jan', amount: 12000 },
    { date: 'Feb', amount: 13500 },
    { date: 'Mar', amount: 14500 },
  ];

  return (
    <Spin spinning={false}>
      <Card
        className="min-h-[480px] bg-white border-neutral-200 bg-gradient-to-l shadow-lg text-black"
        styles={{ body: { paddingLeft: 0 } }}>
        {data.length === 0 ? (
          <div className="flex items-center justify-center h-[350px]">
            <Empty />
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6d54b5" stopOpacity={1} />
                  <stop offset="95%" stopColor="#6d54b590" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" />
              <YAxis dataKey="amount" tickFormatter={(value) => formatNumber(value)} />
              <Tooltip
                content={({ payload, label }) => {
                  if (payload?.length) {
                    const { amount } = payload[0]?.payload || {};
                    return (
                      <Card
                        variant="borderless"
                        size="small"
                        styles={{ body: { padding: 18 } }}
                        className="border-neutral-400 bg-white shadow-lg text-black ">
                        <Typography className="block">
                          Revenue:{' '}
                          <span className="text-neutral-500">{formatNumber(amount)} RWF</span>
                        </Typography>
                        <Typography className="block">
                          Date: <span className="text-neutral-500">{label} 2024</span>
                        </Typography>
                      </Card>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="#6d54b5"
                strokeWidth={2}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </Card>
    </Spin>
  );
};

export default RevenueGraph;
