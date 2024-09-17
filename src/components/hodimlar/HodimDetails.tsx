import React from "react";
import {
  HomeIcon,
  MoneyIcon,
  TrashIcon,
  UserIcon,
} from "../../assets/hodimlar/HodimlarSvg";

const HodimDetails: React.FC = () => {
  return (
    <div className="h-[100%]">
      <div className="bg-[#fff] rounded-md shadow-md">
        <div className="flex justify-between items-center py-4 border-b border-[#1B2E4B] pl-5 pr-[60px] ">
          <h2 className="text-[24px] font-medium leading-[28px]">
            Xodim: Саматов Рамазон Алимурадови
          </h2>
          <div className="flex gap-4">
            <button className="px-5 text-[#fff] rounded-md bg-[#4361EE] flex items-center h-[38px] gap-3">
              <TrashIcon color="#fff" />
              <p className="font-semibold text-[14px] leading-[19px]">
                Add New
              </p>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center pr-3">
          <div className=" py-1 flex  ">
            <button className="flex items-center gap-2 py-4 px-5 border-b ">
              <HomeIcon />
              <p className="font-semibold text-[14px]">Malunmotlar</p>
            </button>
            <button className="flex items-center gap-2 py-4 px-5  ">
              <UserIcon color="#4361EE" />
              <p className="font-semibold text-[14px] text-[#4361EE]">
                Bajarilgan ishlar
              </p>
            </button>
            <button className="flex items-center gap-2 py-4 px-5  ">
              <MoneyIcon color="#888EA8" />
              <p className="font-semibold text-[14px]">To’lov tarixi</p>
            </button>
            <button className="flex items-center gap-2 py-4 px-5  ">
              <MoneyIcon color="#888EA8" />
              <p className="font-semibold text-[14px]">Oylik to’lash </p>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] h-auto mt-[20px] w-full">
        
      </div>
    </div>
  );
};

export default HodimDetails;
