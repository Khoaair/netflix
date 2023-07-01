import {
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  FormatListBulleted,
  MailOutline,
  PersonOutline,
  PlayCircleOutline,
  Report,
  Timeline,
  TrendingUp,
  WorkOffOutlined,
} from '@mui/icons-material';

export const dashboard = [
  { text: 'Home', icon: <LineStyle />, path: '/' },
  { text: 'Analytics', icon: <Timeline />, path: '/' },
  { text: 'Sales', icon: <TrendingUp />, path: '/' },
];
export const quickMenu = [
  { text: 'Users', icon: <PersonOutline />, path: '/users' },
  { text: 'Movies', icon: <PlayCircleOutline />, path: '/movies' },
  { text: 'List', icon: <FormatListBulleted />, path: '/list' },
  { text: 'Reports', icon: <BarChart />, path: '/' },
];
export const notification = [
  { text: 'Mail', icon: <MailOutline />, path: '/' },
  { text: 'Feedback', icon: <DynamicFeed />, path: '/' },
  { text: 'Messages', icon: <ChatBubbleOutline />, path: '/' },
];
export const staff = [
  { text: 'Manage', icon: <WorkOffOutlined />, path: '/' },
  { text: 'Analytics', icon: <Timeline />, path: '/' },
  { text: 'Report', icon: <Report />, path: '/' },
];
