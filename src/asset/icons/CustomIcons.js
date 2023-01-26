import Icon from '@ant-design/icons';

const MessageSvg = () => (
  <svg width="fit-content" height="fit-content" fill="currentColor" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MailOutlineOutlinedIcon" tabindex="-1" title="MailOutlineOutlined">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
  </svg>
);
export const MessageIcon = (props) => <Icon component={MessageSvg} {...props} />;

const NotificationSvg = () => (
  <svg width="fit-content" height="fit-content" fill="currentColor" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NotificationsNoneOutlinedIcon" tabindex="-1" title="NotificationsNoneOutlined">
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
  </svg>
);
export const NotificationIcon = (props) => <Icon component={NotificationSvg} {...props} />;

const DownSvg = () => (
  <svg width="fit-content" height="fit-content" fill="currentColor" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowDownOutlinedIcon" tabindex="-1" title="KeyboardArrowDownOutlined">
    <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
);
export const DownIcon = (props) => <Icon component={DownSvg} {...props} />;

const HomeSvg = () => (
  <svg width="fit-content" height="fit-content" fill="currentColor" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CottageOutlinedIcon" tabindex="-1" title="CottageOutlined">
    <path d="M12 3 6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4 12 3zm6 16h-5v-4h-2v4H6v-8.9l6-4.58 6 4.58V19zM10 1c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1h2z" />
  </svg>
);
export const HomeIcon = (props) => <Icon component={HomeSvg} {...props} />;

const SchoolSvg = () => (
  <svg width="fit-content" height="fit-content" fill="currentColor" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CastForEducationOutlinedIcon" tabindex="-1" title="CastForEducationOutlined">
    <path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm10 1.09v2L14.5 15l3.5-1.91v-2L14.5 13 11 11.09zM14.5 6 9 9l5.5 3L20 9l-5.5-3z" />
  </svg>
);
export const SchoolIcon = (props) => <Icon component={SchoolSvg} {...props} />;

const StatisticSvg = () => (
  <svg width="fit-content" height="fit-content" fill="currentColor" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InsertChartOutlinedRoundedIcon" tabindex="-1" title="InsertChartOutlinedRounded">
    <path d="M8 17c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm2 2H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm1-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </svg>
);
export const StatisticIcon = (props) => <Icon component={StatisticSvg} {...props} />;

const CloseSvg = () => (
  <svg width="fit-content" height="fit-content" fill="currentColor" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CancelIcon" tabindex="-1" title="Cancel">
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
  </svg>
);
export const CloseIcon = (props) => <Icon component={CloseSvg} {...props} />;

const DeleteSvg = () => (
  <svg width="fit-content" height="fit-content" fill="currentColor" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteOutlineOutlinedIcon" tabindex="-1" title="DeleteOutlineOutlined">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z" />
  </svg>
);
export const DeleteIcon = (props) => <Icon component={DeleteSvg} {...props} />;

const AddSvg = () => (
  <svg width="fit-content" height="fit-content" fill="currentColor" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddCircleIcon" tabindex="-1" title="AddCircle">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
  </svg>
);
export const AddIcon = (props) => <Icon component={AddSvg} {...props} />;

