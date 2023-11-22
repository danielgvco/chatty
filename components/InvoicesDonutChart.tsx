'use client'

import { Card, DonutChart, Title } from "@tremor/react";
import { FC } from 'react'

interface InvoicesDonutChartProps {
  data: any;
}

const InvoicesDonutChart: FC<InvoicesDonutChartProps> = ({data}) => {
    return (
        <Card className="max-w-lg">
          <Title>Invoices</Title>
          <DonutChart
            className="mt-6"
            data={data}
            category="count"
            index="status"
            valueFormatter={(number: number) =>
                `${Intl.NumberFormat('us').format(number).toString()}`
              }
            colors={["red", "green", "gray", "orange"]}
            showAnimation={true}
            variant="pie"
          />
        </Card>
      );
}

export default InvoicesDonutChart