import React, { useState } from "react";
import {
  DownloadIcon,
  FilterIcon,
  PencilIcon,
  PlusIcon,
  SearchIcon,
  TrashIcon,
  UserIcon,
} from "../../assets/hodimlar/HodimlarSvg";
import Oylik from "./tablinks/Oylik";
import Kunlik from "./tablinks/Kunlik";
import Ishbay from "./tablinks/Ishbay";
import TableContent from "./TableContent";

const Table: React.FC = () => {
  const [count, setCount] = useState<number>(1);

  const handleClick = (num: number) => {
    setCount(num);
  };

  return (
    <div className="">
      <div className="bg-[#fff] rounded-md shadow-md">
        <div className="flex justify-between items-center py-4 border-b border-[#1B2E4B] pl-5 pr-3 ">
          <h2 className="text-[24px] font-medium leading-[28px]">
            Xodimlar ro’yxati
          </h2>
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
              <button className="px-5 text-[#fff] rounded-md bg-[#43EE69] flex items-center h-[38px] gap-3">
                <PencilIcon color="#fff" />
                <p className="font-semibold text-[14px] leading-[19px]">
                  Parol yangilash
                </p>
              </button>
              <button className="px-5 text-[#fff] rounded-md bg-[#4361EE] flex items-center h-[38px] gap-3">
                <PlusIcon color="#fff" />
                <p className="font-semibold text-[14px] leading-[19px]">
                  Add New
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
            <button className="px-5 text-[#fff] rounded-md bg-[#203674] flex items-center h-[38px] gap-3">
              <FilterIcon />
              <p className="font-semibold text-[14px] leading-[19px]">Filtr</p>
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-[#fff] mt-[20px]">
        {count == 1 && <Oylik />}
        {count == 2 && <Ishbay />}
        {count == 3 && <Kunlik />}
      </div>
    </div>
  );
};

export default Table;
