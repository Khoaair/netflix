// import { useState } from 'react';
// import Chart from '../components/Chart';
import FeatureInfo from '../components/FeatureInfo';
import WidgetSm from '../components/WidgetSm';
import WidgetLg from '../components/WidgetLg';

const Home = () => {
  // const MONTHS = useMemo(
  //   () => [
  //     'Jan',
  //     'Feb',
  //     'Mar',
  //     'Apr',
  //     'May',
  //     'Jun',
  //     'Jul',
  //     'Agu',
  //     'Sep',
  //     'Oct',
  //     'Nov',
  //     'Dec',
  //   ],
  //   []
  // );
  // const [userStats, setUserStats] = useState([]);

  return (
    <div className='flex-[4]'>
      <FeatureInfo />
      {/* <Chart data={userStats} title='User Analytics' grid dataKey='New User' /> */}
      <div className='flex gap-5'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};
export default Home;
