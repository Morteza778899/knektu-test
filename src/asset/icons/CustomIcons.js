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