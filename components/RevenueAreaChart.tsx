'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';
import { FC } from 'react'

interface RevenueAreaChartProps {
  data: any;
}

const RevenueAreaChart: FC<RevenueAreaChartProps> = ({data}) => {
  return (
    <Card className="mt-8 p-4">
      <Title>Revenue History</Title>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={['sales', 'profit']}
        index="month"
        colors={['indigo', 'fuchsia']}
        valueFormatter={(number: number) =>
          `$ ${Intl.NumberFormat('us').format(number).toString()}`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}

export default RevenueAreaChart