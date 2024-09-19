import React, { useState } from "react";
import {
  DownloadIcon,
  SearchIcon,
  TrashIcon,
  UserIcon,
} from "../../assets/hodimlar/HodimlarSvg";

const Oylik: React.FC = () => {
  const [count, setCount] = useState<number>(1);

  const handleClick = (num: number) => {
    setCount(num);
  };

  return (
    <div>
      <div className="bg-[#fff] rounded-md shadow-md">
        <div className="flex justify-between items-center py-4 border-b border-[#1B2E4B] pl-5 pr-3 ">
          <div className="">
            <h2 className="text-[24px] font-medium leading-[28px]">Oyliklar</h2>
            <p className="text-[#4361EE] text-[16px] font-medium">
              Jami oyliklar: 2 262 296 001 065 so’m
            </p>
          </div>
          <div className="flex items-center gap-4 ">
            <div className="bg-[#DFE8F1] flex p-4 h-[40px] border border-[#00000014] rounded-[5px] items-center gap-1">
              <input
                type="text"
                className="border-0 outline-none bg-transparent"
                placeholder="Search"
              />
              <SearchIcon />
            </div>
            <div className="flex gap-4">
              <button className="px-5 text-[#fff] rounded-md bg-[#E7515A] flex items-center h-[38px] gap-3">
                <TrashIcon color="#fff" />
                <p className="font-semibold text-[14px] leading-[19px]">
                  Delete
                </p>
              </button>
              <button className="px-5 text-[#fff] rounded-md bg-[#00AB55] flex items-center h-[38px] gap-3">
                <DownloadIcon color="#fff" />
                <p className="font-semibold text-[14px] leading-[19px]">
                  Download
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pr-3">
          <div className=" py-1 flex  ">
            <button
              className={`flex items-center gap-2 py-4 px-5  ${
                count == 1 ? "text-[#4361EE]" : "text-[#888EA8]"
              } `}
              onClick={() => handleClick(1)}
            >
              <UserIcon color={count == 1 ? "#4361EE" : "#888EA8"} />
              <p className="font-semibold text-[14px]">Oylik ishchilar</p>
            </button>
            <button
              className={`flex items-center gap-2 py-4 px-5  ${
                count == 2 ? "text-[#4361EE]" : "text-[#888EA8]"
              } `}
              onClick={() => handleClick(2)}
            >
              <UserIcon color={count == 2 ? "#4361EE" : "#888EA8"} />
              <p className="font-semibold text-[14px]">Ishbay</p>
            </button>
            <button
              className={`flex items-center gap-2 py-4 px-5  ${
                count == 3 ? "text-[#4361EE]" : "text-[#888EA8]"
              } `}
              onClick={() => handleClick(3)}
            >
              <UserIcon color={count == 3 ? "#4361EE" : "#888EA8"} />
              <p className="font-semibold text-[14px]">Kunlik ishchilar</p>
            </button>
          </div>
          <div className="">
            <button className="px-5 text-[#fff] rounded-md bg-[#4361ee] flex items-center h-[38px] gap-3">
              <p className="font-semibold text-[14px] leading-[19px]">
                Oylik To'lash
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oylik;
