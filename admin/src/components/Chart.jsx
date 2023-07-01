/* eslint-disable react/prop-types */
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useEffect, useState } from 'react';
const Chart = ({ title, data, dataKey, grid }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(true);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='m-5 p-5 shadow-lg rounded-[10px]'>
      {isVisible && (
        <>
          <h3 className='mb-5 text-2xl font-semibold'>{title}</h3>
          <ResponsiveContainer width='100%' aspect={4 / 1}>
            <LineChart data={data}>
              <XAxis dataKey='name' stroke='#5550bd' />
              <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
              <Tooltip />
              {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
            </LineChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};
export default Chart;
