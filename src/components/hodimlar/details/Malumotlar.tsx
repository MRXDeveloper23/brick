import React, { useState } from 'react';
import img from '../../../assets/details.png';
import { useDispatch } from 'react-redux';
import { updateHodim } from '@/store/slices/hodimSlice';

interface findData {
	id: number;
	name: string;
	date: string;
	phoneNumber: number;
	profile: string;
	amount: string;
	invoice: string;
	ishchiStatus?: string;
	manzil?: string;
	brithday?: string;
	email: string;
	category: string;
	cardNumber?: number;
	oylik?: number;
	additionalInfo?: string; // Qo'shimcha ma'lumotlar maydoni
}

interface MalumotlarProps {
	hodim: findData;
}

const Malumotlar: React.FC<MalumotlarProps> = ({ hodim }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedHodim, setEditedHodim] = useState(hodim);
	const dispatch = useDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setEditedHodim((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleSave = () => {
		dispatch(updateHodim(editedHodim)); // Redux store'da yangilash
		setIsEditing(false);
	};

	return (
		<div className="px-5">
			<h3 className="text-[18px] text-[#404040] font-semibold py-5">
				{editedHodim.name}
			</h3>
			<div className="flex">
				<div className="flex-[.2] flex justify-center">
					<img src={img} alt="" className="w-[128px] h-[128px]" />
				</div>
				<div className="flex-1 ">
					<form className="grid grid-cols-2 gap-5">
						{/* Ism */}
						<div className="flex flex-col">
							<label
								htmlFor="name"
								className="text-[14px] text-[#404040] font-semibold"
							>
								Ism
							</label>
							<input
								type="text"
								id="name"
								value={editedHodim.name}
								onChange={handleChange}
								disabled={!isEditing}
								className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
							/>
						</div>
						{/* Familiya */}
						<div className="flex flex-col">
							<label
								htmlFor="family"
								className="text-[14px] text-[#404040] font-semibold"
							>
								Familiya
							</label>
							<input
								type="text"
								id="family"
								value={editedHodim.name} // Bu maydonni haqiqiy o'zgaruvchilar bilan moslang
								onChange={handleChange}
								disabled={!isEditing}
								className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
							/>
						</div>
						{/* Lavozim */}
						<div className="flex flex-col">
							<label
								htmlFor="ishchiStatus"
								className="text-[14px] text-[#404040] font-semibold"
							>
								Lavozim
							</label>
							<input
								type="text"
								id="ishchiStatus"
								value={editedHodim.ishchiStatus}
								onChange={handleChange}
								disabled={!isEditing}
								className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
							/>
						</div>
						{/* Manzil */}
						<div className="flex flex-col">
							<label
								htmlFor="manzil"
								className="text-[14px] text-[#404040] font-semibold"
							>
								Manzil
							</label>
							<input
								type="text"
								id="manzil"
								value={editedHodim.manzil}
								onChange={handleChange}
								disabled={!isEditing}
								className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
							/>
						</div>
						{/* Tug'ilgan sana */}
						<div className="flex flex-col">
							<label
								htmlFor="brithday"
								className="text-[14px] text-[#404040] font-semibold"
							>
								Tug'ilgan sana
							</label>
							<input
								type="text"
								id="brithday"
								value={editedHodim.brithday}
								onChange={handleChange}
								disabled={!isEditing}
								className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
							/>
						</div>
						{/* Telefon raqam */}
						<div className="flex flex-col">
							<label
								htmlFor="phoneNumber"
								className="text-[14px] text-[#404040] font-semibold"
							>
								Telefon raqam
							</label>
							<input
								type="text"
								id="phoneNumber"
								value={editedHodim.phoneNumber}
								onChange={handleChange}
								disabled={!isEditing}
								className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
							/>
						</div>
						{/* Karta raqam */}
						<div className="flex flex-col">
							<label
								htmlFor="cardNumber"
								className="text-[14px] text-[#404040] font-semibold"
							>
								Karta raqam
							</label>
							<input
								type="text"
								id="cardNumber"
								value={editedHodim.cardNumber}
								onChange={handleChange}
								disabled={!isEditing}
								className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
							/>
						</div>
						{/* Oylik */}
						<div className="flex flex-col">
							<label
								htmlFor="oylik"
								className="text-[14px] text-[#404040] font-semibold"
							>
								Oylik
							</label>
							<input
								type="text"
								id="oylik"
								value={editedHodim.oylik}
								onChange={handleChange}
								disabled={!isEditing}
								className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
							/>
						</div>
						{/* Qo'shimcha ma'lumotlar */}
						<div className="flex flex-col">
							<label
								htmlFor="additionalInfo"
								className="text-[14px] text-[#404040] font-semibold"
							>
								Qo'shimcha ma'lumotlar
							</label>
							<input
								type="text"
								id="additionalInfo"
								value={editedHodim.additionalInfo || ''} // Qo'shimcha ma'lumotlarni ko'rsatish
								onChange={handleChange}
								disabled={!isEditing}
								className={`bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md ${!isEditing ? 'opacity-50' : ''}`}
							/>
						</div>
					</form>
					<div className="flex gap-2 pt-3 pb-6">
						{/* Save Button */}
						{isEditing ? (
							<button
								onClick={handleSave}
								className="px-5 text-[#fff] rounded-md bg-[#4361EE] flex items-center h-[38px] gap-3"
							>
								<p className="font-semibold text-[14px] leading-[19px]">
									Saqlash
								</p>
							</button>
						) : (
							<button
								onClick={handleEdit}
								className="px-5 text-[#fff] rounded-md bg-[#00AB55] flex items-center h-[38px] gap-3"
							>
								<p className="font-semibold text-[14px] leading-[19px]">
									Tahrirlash
								</p>
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Malumotlar;
