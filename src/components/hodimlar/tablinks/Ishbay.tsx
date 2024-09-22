import React from 'react';
import {
	MoreIcon,
	PencilIcon,
	TrashIcon,
} from '../../../assets/hodimlar/HodimlarSvg';
import { Data } from '../../../data/Data';
import { useNavigate } from 'react-router-dom';

const Ishbay: React.FC = () => {
	const navigate = useNavigate();

	const handleCLick = () => {
		navigate(`/details`);
	};
	return (
		<div className=" w-full  px-[10px] h-[600px] overflow-y-scroll ">
			{Data.map((item) => (
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
							onClick={handleCLick}
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
	);
};

export default Ishbay;
