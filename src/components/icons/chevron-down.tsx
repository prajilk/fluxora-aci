const ChevronDown = ({ open }: { open: boolean }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className={`${open ? "rotate-180" : "rotate-0"} size-6 transition-transform duration-300`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12L14 23L25 12"
        stroke="#505EB9"
        strokeOpacity="0.8"
        strokeWidth="0.833333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronDown;
