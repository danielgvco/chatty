'use client'

import { Card, DonutChart, Title } from "@tremor/react";
import { FC } from 'react'

interface BookingDonutChartProps {
    data: any;
}

const BookingDonutChart: FC<BookingDonutChartProps> = ({data}) => {
  return (
    <Card className="max-w-lg">
      <Title>Bookings</Title>
      <DonutChart
        className="mt-6"
        data={data}
        category="count"
        index="status"
        valueFormatter={(number: number) =>
            `${Intl.NumberFormat('us').format(number).toString()}`
          }
        colors={["orange", "green", "red", "gray"]}
        showAnimation={true}
        variant="pie"
      />
    </Card>
  );
}

export default BookingDonutChart