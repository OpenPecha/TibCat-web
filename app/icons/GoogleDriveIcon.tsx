const GoogleDriveIcon = ({ width = "46", height = "41", className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.66714 40.1277L15.3332 26.7518H46L38.3332 40.1277H7.66714Z"
        fill="#3777E3"
      />
      <path
        d="M30.6671 26.7518H46L30.6671 0H15.3332L30.6671 26.7518Z"
        fill="#FFCF63"
      />
      <path
        d="M0 26.7512L7.66714 40.1277L23 13.3753L15.3332 0L0 26.7512Z"
        fill="#11A861"
      />
    </svg>
  );
};

export default GoogleDriveIcon;
