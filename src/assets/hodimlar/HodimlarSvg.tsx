import React from "react";

interface propsColor {
  color: string;
}

export const TrashIcon: React.FC<propsColor> = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 5H4.16667H17.5"
        stroke={color}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.8332 4.99999V16.6667C15.8332 17.1087 15.6576 17.5326 15.345 17.8452C15.0325 18.1577 14.6085 18.3333 14.1665 18.3333H5.83317C5.39114 18.3333 4.96722 18.1577 4.65466 17.8452C4.3421 17.5326 4.1665 17.1087 4.1665 16.6667V4.99999M6.6665 4.99999V3.33332C6.6665 2.8913 6.8421 2.46737 7.15466 2.15481C7.46722 1.84225 7.89114 1.66666 8.33317 1.66666H11.6665C12.1085 1.66666 12.5325 1.84225 12.845 2.15481C13.1576 2.46737 13.3332 2.8913 13.3332 3.33332V4.99999"
        stroke={color}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.3335 9.16666V14.1667"
        stroke={color}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.6665 9.16666V14.1667"
        stroke={color}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const MoreIcon: React.FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6">
        <path
          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
export const PencilIcon: React.FC = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.1665 3.33334H3.33317C2.89114 3.33334 2.46722 3.50894 2.15466 3.8215C1.8421 4.13406 1.6665 4.55798 1.6665 5.00001V16.6667C1.6665 17.1087 1.8421 17.5326 2.15466 17.8452C2.46722 18.1577 2.89114 18.3333 3.33317 18.3333H14.9998C15.4419 18.3333 15.8658 18.1577 16.1783 17.8452C16.4909 17.5326 16.6665 17.1087 16.6665 16.6667V10.8333"
        stroke="#666666"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.4165 2.08332C15.748 1.7518 16.1977 1.56555 16.6665 1.56555C17.1353 1.56555 17.585 1.7518 17.9165 2.08332C18.248 2.41484 18.4343 2.86448 18.4343 3.33332C18.4343 3.80216 18.248 4.2518 17.9165 4.58332L9.99984 12.5L6.6665 13.3333L7.49984 9.99999L15.4165 2.08332Z"
        stroke="#666666"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const SearchIcon: React.FC = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.91314 10.8263C8.6266 10.8263 10.8263 8.6266 10.8263 5.91314C10.8263 3.19969 8.6266 1 5.91314 1C3.19969 1 1 3.19969 1 5.91314C1 8.6266 3.19969 10.8263 5.91314 10.8263Z"
          stroke="#627B87"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.71937 9.71889L12.8075 12.807"
          stroke="#627B87"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export const UserIcon: React.FC<propsColor> = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0653 12.8512 14.2174 12.5 13.3334 12.5H6.66671C5.78265 12.5 4.93481 12.8512 4.30968 13.4763C3.68456 14.1014 3.33337 14.9493 3.33337 15.8333V17.5"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99996 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99996 2.5C8.15901 2.5 6.66663 3.99238 6.66663 5.83333C6.66663 7.67428 8.15901 9.16667 9.99996 9.16667Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const FilterIcon: React.FC = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_174_3004)">
        <path
          d="M10 5.00001C10 5.44204 10.1756 5.86596 10.4882 6.17852C10.8007 6.49108 11.2246 6.66668 11.6667 6.66668C12.1087 6.66668 12.5326 6.49108 12.8452 6.17852C13.1577 5.86596 13.3333 5.44204 13.3333 5.00001C13.3333 4.55798 13.1577 4.13406 12.8452 3.8215C12.5326 3.50894 12.1087 3.33334 11.6667 3.33334C11.2246 3.33334 10.8007 3.50894 10.4882 3.8215C10.1756 4.13406 10 4.55798 10 5.00001Z"
          stroke="white"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.33325 5H9.99992"
          stroke="white"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.3333 5H16.6666"
          stroke="white"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5 10C5 10.442 5.17559 10.866 5.48816 11.1785C5.80072 11.4911 6.22464 11.6667 6.66667 11.6667C7.10869 11.6667 7.53262 11.4911 7.84518 11.1785C8.15774 10.866 8.33333 10.442 8.33333 10C8.33333 9.55798 8.15774 9.13406 7.84518 8.8215C7.53262 8.50894 7.10869 8.33334 6.66667 8.33334C6.22464 8.33334 5.80072 8.50894 5.48816 8.8215C5.17559 9.13406 5 9.55798 5 10Z"
          stroke="white"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.33325 10H4.99992"
          stroke="white"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.33325 10H16.6666"
          stroke="white"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 15C12.5 15.442 12.6756 15.866 12.9882 16.1785C13.3007 16.4911 13.7246 16.6667 14.1667 16.6667C14.6087 16.6667 15.0326 16.4911 15.3452 16.1785C15.6577 15.866 15.8333 15.442 15.8333 15C15.8333 14.558 15.6577 14.1341 15.3452 13.8215C15.0326 13.5089 14.6087 13.3333 14.1667 13.3333C13.7246 13.3333 13.3007 13.5089 12.9882 13.8215C12.6756 14.1341 12.5 14.558 12.5 15Z"
          stroke="white"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.33325 15H12.4999"
          stroke="white"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.8333 15H16.6666"
          stroke="white"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_174_3004">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HomeIcon: React.FC = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z"
        stroke="#888EA8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 18.3333V10H12.5V18.3333"
        stroke="#888EA8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const MoneyIcon: React.FC<propsColor> = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0.833344V19.1667"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.1667 4.16666H7.91667C7.14312 4.16666 6.40125 4.47395 5.85427 5.02093C5.30729 5.56791 5 6.30978 5 7.08332C5 7.85687 5.30729 8.59874 5.85427 9.14572C6.40125 9.6927 7.14312 9.99999 7.91667 9.99999H12.0833C12.8569 9.99999 13.5987 10.3073 14.1457 10.8543C14.6927 11.4012 15 12.1431 15 12.9167C15 13.6902 14.6927 14.4321 14.1457 14.9791C13.5987 15.526 12.8569 15.8333 12.0833 15.8333H5"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
