import React, { useState } from "react";
import {
  MoreIcon,
  PencilIcon,
  TrashIcon,
} from "../../../assets/hodimlar/HodimlarSvg";
import { Data } from "../../../data/Data";

// import { Data } from "../../data/Data";

const Ishbay = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Toggle selection of a single row
  const handleCheckboxChange = (id: number) => {
    setSelectedRows(
      (prevSelectedRows) =>
        prevSelectedRows.includes(id)
          ? prevSelectedRows.filter((rowId) => rowId !== id) // Deselect
          : [...prevSelectedRows, id] // Select
    );
  };

  // Check if a row is selected
  const isRowSelected = (id: number) => selectedRows.includes(id);

  // Handle Select All/Deselect All
  const handleSelectAll = () => {
    if (selectedRows.length === Data.length) {
      // Deselect all if all are selected
      setSelectedRows([]);
    } else {
      // Select all rows
      const allRowIds = Data.map((item) => item.id);
      setSelectedRows(allRowIds);
    }
  };

  // Check if all rows are selected
  const isAllSelected = selectedRows.length === Data.length;

  return (
    <div>
      <div className="border mt-[20px]">
        <div className="bg-[#4D5773] w-full flex gap-[30px] items-center  p-[10px] text-[#fff] rounded-tl-[5px] rounded-tr-[5px]">
          <div className=" w-[90px] h-[20px]">
            {/* Select All checkbox */}
            <input
              type="checkbox"
              className="w-[15px] h-[20px]"
              checked={isAllSelected} // Check if all are selected
              onChange={handleSelectAll} // Handle select all toggle
            />
          </div>
          <div className="grid grid-cols-7 items-center gap-2 w-full ">
            <h2 className="text-[14px] font-semibold ">ID</h2>
            <h2 className="text-[14px] font-semibold">I.F.SH.</h2>
            <h3 className="text-[14px] font-semibold">Nomer</h3>
            <h3 className="text-[14px] font-semibold">Sana</h3>
            <h3 className="text-[14px] font-semibold">Maosh</h3>
            <h3 className="text-[14px] font-semibold">Statust</h3>
            <h3 className="text-[14px] font-semibold"></h3>
          </div>
        </div>
        <div className=" w-full  px-[10px] h-[600px] overflow-y-scroll ">
          {Data.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-[30px] py-2 border-t border-[#071A5033]"
            >
              <div className="flex items-center gap-[30px]">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px]"
                  checked={isRowSelected(item.id)} // Check if row is selected
                  onChange={() => handleCheckboxChange(item.id)} // Toggle row selection
                />
                <img
                  src={item.profile}
                  className="w-[40px] h-[40px] cursor-pointer"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-7 gap-6 items-center w-full ">
                <p className="text-[14px] font-semibold ">{item.invoice}</p>
                <h2 className="text-[14px] font-medium">{item.name}</h2>
                <h2 className="text-[14px] font-medium">{item.phoneNumber}</h2>
                <h3 className="text-[14px] font-medium">{item.date}</h3>
                <h3 className="text-[14px] font-medium">${item.amount}</h3>
                <div className="">
                  <button className="py-1 px-4 border border-[#58BC2D] text-[#58BC2D] text-[14px] font-medium">
                    Активный
                  </button>
                </div>
                <div className="text-[14px] flex justify-end items-center gap-[20px] font-medium pr-5">
                  <button>
                    <PencilIcon color="#666666" />
                  </button>
                  <button>
                    <TrashIcon color="#666666" />
                  </button>
                  <button>
                    <MoreIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ishbay;
