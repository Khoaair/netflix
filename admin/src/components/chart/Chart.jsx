import React from 'react';
import './chart.css';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Chart({ title, data, dataKey, grid }) {
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
    <div className='chart'>
      {isVisible && (
        <>
          <h3 className='chartTitle'>{title}</h3>
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
}
