import React, { useState } from 'react';
import {
	DownloadIcon,
	FilterIcon,
	MoreIcon,
	PencilIcon,
	PlusIcon,
	SearchIcon,
	TrashIcon,
	UserIcon,
} from '../../../assets/hodimlar/HodimlarSvg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSelected } from '@/store/hodimlarSlice/ishbaySlice';

interface PropsType {
	count: number;
	setCount: (value: number) => void;
}

interface Item {
	id: number;
	name: string;
	date: string;
	phoneNumber: string;
	profile: string;
	amount: number;
	invoice: string;
}

interface RootState {
	ishbay: {
		items: Item[];
	};
}

const Ishbay: React.FC<PropsType> = ({ count, setCount }) => {
	const dispatch = useDispatch();

	const items = useSelector((state: RootState) => state.ishbay.items);
	const [selectedRows, setSelectedRows] = useState<number[]>([]);
	const [selectedData, setSelectedData] = useState<Item[]>([]);
	const [search, setSearch] = useState<string>('');

	const handleCheckboxChange = (item: Item) => {
		const id = item.id;
		if (selectedRows.includes(id)) {
			setSelectedRows((prevSelectedRows) =>
				prevSelectedRows.filter((rowId) => rowId !== id)
			);
			setSelectedData((prevSelectedData) =>
				prevSelectedData.filter((data) => data.id !== id)
			);
		} else {
			setSelectedRows((prevSelectedRows) => [...prevSelectedRows, id]);
			setSelectedData((prevSelectedData) => [...prevSelectedData, item]);
		}
	};

	// Check if a row is selected
	const isRowSelected = (id: number) => selectedRows.includes(id);

	// Handle Select All functionality
	const handleSelectAll = () => {
		if (selectedRows.length === items.length) {
			// If all rows are selected, deselect all
			setSelectedRows([]);
			setSelectedData([]);
		} else {
			// Select all rows
			const allRowIds = items.map((item: Item) => item.id);
			setSelectedRows(allRowIds);
			setSelectedData(items);
		}
	};

	const handleDeleteSelected = () => {
		const selectedIds = selectedData.map((item) => item.id);
		dispatch(deleteSelected(selectedIds));

		setSelectedRows([]);
		setSelectedData([]);
	};

	const isAllSelected = selectedRows.length === items.length;

	const filteredSearch = items.filter((f: Item) =>
		f.name.toLowerCase().includes(search.toLowerCase())
	);

	console.log('Selected data:', selectedData);

	return (
		<div>
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
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
							<SearchIcon />
						</div>
						<div className="flex gap-4">
							<button
								className="px-5 text-[#fff] rounded-md bg-[#E7515A] flex items-center h-[38px] gap-3"
								onClick={handleDeleteSelected}
								disabled={selectedRows.length === 0}
							>
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
					<div className="py-1 flex">
						<button
							className={`flex items-center gap-2 py-4 px-5  ${
								count === 1 ? 'text-[#4361EE]' : 'text-[#888EA8]'
							}`}
							onClick={() => setCount(1)}
						>
							<UserIcon color={count === 1 ? '#4361EE' : '#888EA8'} />
							<p className="font-semibold text-[14px]">Oylik ishchilar</p>
						</button>
						<button
							className={`flex items-center gap-2 py-4 px-5  ${
								count === 2 ? 'text-[#4361EE]' : 'text-[#888EA8]'
							}`}
							onClick={() => setCount(2)}
						>
							<UserIcon color={count === 2 ? '#4361EE' : '#888EA8'} />
							<p className="font-semibold text-[14px]">Ishbay</p>
						</button>
						<button
							className={`flex items-center gap-2 py-4 px-5  ${
								count === 3 ? 'text-[#4361EE]' : 'text-[#888EA8]'
							}`}
							onClick={() => setCount(3)}
						>
							<UserIcon color={count === 3 ? '#4361EE' : '#888EA8'} />
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
			<div>
				<div className="border mt-[20px]">
					<div className="bg-[#4D5773] w-full flex gap-[30px] items-center  p-[10px] text-[#fff] rounded-tl-[5px] rounded-tr-[5px]">
						<div className="w-[90px] h-[20px]">
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
					<div className="w-full px-[10px] h-[600px] overflow-y-scroll">
						{filteredSearch.map((item: Item) => (
							<div
								key={item.id}
								className="flex items-center gap-[30px] py-2 border-t border-[#071A5033]"
							>
								<div className="flex items-center gap-[30px]">
									<input
										type="checkbox"
										className="w-[20px] h-[20px]"
										checked={isRowSelected(item.id)}
										onChange={() => handleCheckboxChange(item)}
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
									<h2 className="text-[14px] font-medium">
										{item.phoneNumber}
									</h2>
									<h3 className="text-[14px] font-medium">{item.date}</h3>
									<h3 className="text-[14px] font-medium">${item.amount}</h3>
									<div>
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
		</div>
	);
};

export default Ishbay;
