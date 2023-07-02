import { useState, useEffect, useMemo } from 'react';
import Chart from '../components/Chart';
import FeatureInfo from '../components/FeatureInfo';
import WidgetSm from '../components/WidgetSm';
import WidgetLg from '../components/WidgetLg';
import customFetch from '../utils/axios';
import { getAccessToken } from '../utils/getAccessToken';

const Home = () => {
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await customFetch.get(`users/stats`, {
          headers: {
            token: getAccessToken(),
          },
        });
        const statsList = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        statsList.map(item =>
          setUserStats(prev => [
            ...prev,
            { name: MONTHS[item._id - 1], 'New User': item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className='flex-[4]'>
      <FeatureInfo />
      <Chart data={userStats} title='User Analytics' grid dataKey='New User' />
      <div className='flex gap-5'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};
export default Home;
