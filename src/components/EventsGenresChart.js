import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

const EventsGenreChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
  const colors = ['#23706e', '#7a7922', '#7a3a22', '#66227a', '#7a224a'];

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return percent ? (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'middle' : 'middle'}
        dominantBaseline='central'
        angle={80}
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  const getData = () => {
    const dataEvents = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );
      return {
        name: genre,
        value: filteredEvents.length
      };
    });
    return dataEvents;
  };

  return (
    <ResponsiveContainer width='100%' height={400}>
      <PieChart>
        <Legend verticalAlign='bottom' height={38} align='center' />
        <Pie
          data={data}
          dataKey='value'
          fill='#8884d8'
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={175}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventsGenreChart;
