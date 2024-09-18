import React from "react";
import {
  FilterIcon,
  MoreIcon,
  PencilIcon,
  SearchIcon,
  TrashIcon,
  UserIcon,
} from "../../assets/hodimlar/HodimlarSvg";

import img from "../../assets/details.png";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    invoice: "081451",
    name: "Laurie Fox",
    email: "lauriefox@company.com",
    date: "15 Dec 2020",
    amount: "2275.45",
    status: { tooltip: "Paid", color: "success" },
    profile: img,
    phoneNumber: 998951232175,
  },
  {
    id: 2,
    invoice: "081452",
    name: "Alexander Gray",
    email: "alexGray3188@gmail.com",
    date: "20 Dec 2020",
    amount: "1044.00",
    status: { tooltip: "Paid", color: "success" },
    profile: img,
    phoneNumber: 998951232175,
  },
  {
    id: 3,
    invoice: "081681",
    name: "James Taylor",
    email: "jamestaylor468@gmail.com",
    date: "27 Dec 2020",
    amount: "20.00",
    status: { tooltip: "Pending", color: "danger" },
    profile: img,
    phoneNumber: 998951232175,
  },
  {
    id: 4,
    invoice: "082693",
    name: "Grace Roberts",
    email: "graceRoberts@company.com",
    date: "31 Dec 2020",
    amount: "344.00",
    status: { tooltip: "Paid", color: "success" },
    profile: img,
    phoneNumber: 998951232175,
  },
  {
    id: 5,
    invoice: "084743",
    name: "Donna Rogers",
    email: "donnaRogers@hotmail.com",
    date: "03 Jan 2021",
    amount: "405.15",
    status: { tooltip: "Paid", color: "success" },
    profile: img,
    phoneNumber: 998951232175,
  },
  {
    id: 6,
    invoice: "086643",
    name: "Amy Diaz",
    email: "amy968@gmail.com",
    date: "14 Jan 2020",
    amount: "100.00",
    status: { tooltip: "Paid", color: "success" },
    profile: img,
    phoneNumber: 998951232175,
  },
  {
    id: 7,
    invoice: "086773",
    name: "Nia Hillyer",
    email: "niahillyer666@comapny.com",
    date: "20 Jan 2021",
    amount: "59.21",
    status: { tooltip: "Pending", color: "danger" },
    profile: img,
    phoneNumber: 998951232175,
  },
  {
    id: 8,
    invoice: "087916",
    name: "Mary McDonald",
    email: "maryDonald007@gamil.com",
    date: "25 Jan 2021",
    amount: "79.00",
    status: { tooltip: "Pending", color: "danger" },
    profile: img,
    phoneNumber: 998951232175,
  },
  {
    id: 9,
    invoice: "089472",
    name: "Andy King",
    email: "kingandy07@company.com",
    date: "28 Jan 2021",
    amount: "149.00",
    status: { tooltip: "Paid", color: "success" },
    profile: img,
    phoneNumber: 998951232175,
  },
  {
    id: 10,
    invoice: "091768",
    name: "Vincent Carpenter",
    email: "vincentcarpenter@gmail.com",
    date: "30 Jan 2021",
    amount: "400",
    status: { tooltip: "Paid", color: "success" },
    profile: img,
    phoneNumber: 998951232175,
  },
  {
    id: 11,
    invoice: "095841",
    name: "Kelly Young",
    email: "youngkelly@hotmail.com",
    date: "06 Feb 2021",
    amount: "49.00",
    status: { tooltip: "Pending", color: "danger" },
    profile: img,
    phoneNumber: 998951232175,
  },
  {
    id: 12,
    invoice: "098424",
    name: "Alma Clarke",
    email: "alma.clarke@gmail.com",
    date: "10 Feb 2021",
    amount: "234.40",
    status: { tooltip: "Paid", color: "success" },
    profile: img,
    phoneNumber: 998951232175,
  },
];
const Table: React.FC = () => {
  const navigate = useNavigate();

  const handleCLick = (id: number) => {
    navigate(`/details`);
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
                <TrashIcon color="#fff" />
                <p className="font-semibold text-[14px] leading-[19px]">
                  Download
                </p>
              </button>
              <button className="px-5 text-[#fff] rounded-md bg-[#43EE69] flex items-center h-[38px] gap-3">
                <TrashIcon color="#fff" />
                <p className="font-semibold text-[14px] leading-[19px]">
                  Parol yangilash
                </p>
              </button>
              <button className="px-5 text-[#fff] rounded-md bg-[#4361EE] flex items-center h-[38px] gap-3">
                <TrashIcon color="#fff" />
                <p className="font-semibold text-[14px] leading-[19px]">
                  Add New
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pr-3">
          <div className=" py-1 flex  ">
            <button className="flex items-center gap-2 py-4 px-5 border-b ">
              <UserIcon color="#4361EE" />
              <p className="font-semibold text-[14px]">Oylik ishchilar</p>
            </button>
            <button className="flex items-center gap-2 py-4 px-5  ">
              <UserIcon color="#4361EE" />
              <p className="font-semibold text-[14px]">Oylik ishchilar</p>
            </button>
            <button className="flex items-center gap-2 py-4 px-5  ">
              <UserIcon color="#4361EE" />
              <p className="font-semibold text-[14px]">Oylik ishchilar</p>
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

      <div className="border mt-[20px]">
        <div className="bg-[#4D5773] w-full flex gap-[30px] items-center  p-[10px] text-[#fff] rounded-tl-[5px] rounded-tr-[5px]">
          <div className=" w-[90px] h-[20px]"></div>
          <div className="grid grid-cols-7 items-center gap-6 w-full ">
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
          {data.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-[30px] py-2 border-t border-[#071A5033]"
            >
              <div className="flex items-center gap-[30px]">
                <input type="checkbox" className="w-[20px] h-[20px]" />
                <img
                  src={item.profile}
                  className="w-[40px] h-[40px] cursor-pointer"
                  alt=""
                  onClick={() => handleCLick(item.id)}
                />
              </div>
              <div className="grid grid-cols-7 gap-6 items-center w-full ">
                <p className="text-[14px] font-semibold ">{item.invoice}</p>

                <h2 className="text-[14px] font-medium">{item.name}</h2>
                <h2 className="text-[14px] font-medium">{item.phoneNumber}</h2>
                <h3 className="text-[14px] font-medium">{item.date}</h3>
                <h3 className="text-[14px] font-medium">${item.amount}</h3>
                <div className="">
                  <button className="py-1 px-4 border  border-[#58BC2D] text-[#58BC2D] text-[14px] font-medium">
                    Активный
                  </button>
                </div>
                <div className="text-[14px] flex justify-end items-center gap-[20px] font-medium pr-5">
                  <button>
                    <PencilIcon />
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

export default Table;
