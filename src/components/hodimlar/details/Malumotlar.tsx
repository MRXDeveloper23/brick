import React from 'react';
import img from '../../../assets/details.png';

const Malumotlar: React.FC = () => {
	return (
		<div className="px-5">
			<h3 className="text-[18px] text-[#404040] font-semibold  py-5">
				Саматов Рамазон Алимурадови
			</h3>
			<div className="flex">
				<div className=" flex-[.2] flex justify-center">
					<img src={img} alt="" className="w-[128px] h-[128px]" />
				</div>
				<div className="flex-1 ">
					<form className="grid grid-cols-2 gap-5">
						<div className="flex flex-col">
							<label
								htmlFor="name"
								className="text-[14px] text-[#404040] font-semibold "
							>
								Ism
							</label>
							<input
								type="text"
								disabled
								className="bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md"
								id="name"
								placeholder="Ism..."
							/>
						</div>
						<div className="flex flex-col">
							<label
								htmlFor="familiya"
								className="text-[14px] text-[#404040] font-semibold "
							>
								Familiya
							</label>
							<input
								type="text"
								className="bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md"
								id="familiya"
								placeholder="Familiya..."
							/>
						</div>{' '}
						<div className="flex flex-col">
							<label
								htmlFor="lavozim"
								className="text-[14px] text-[#404040] font-semibold "
							>
								Lavozim
							</label>
							<input
								type="text"
								className="bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md"
								id="lavozim"
								placeholder="Lavozim..."
							/>
						</div>{' '}
						<div className="flex flex-col">
							<label
								htmlFor="mazil"
								className="text-[14px] text-[#404040] font-semibold "
							>
								Mazil
							</label>
							<input
								type="text"
								className="bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md"
								id="mazil"
								placeholder="Mazil..."
							/>
						</div>{' '}
						<div className="flex flex-col">
							<label
								htmlFor="sana"
								className="text-[14px] text-[#404040] font-semibold "
							>
								Tugilgan sanasi
							</label>
							<input
								type="number"
								className="bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md"
								id="sana"
								placeholder="kun / oy / yil ..."
							/>
						</div>{' '}
						<div className="flex flex-col">
							<label
								htmlFor="phone"
								className="text-[14px] text-[#404040] font-semibold "
							>
								Telefon Nomer
							</label>
							<input
								type="text"
								className="bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md"
								id="phone"
								placeholder="Telefon Nomer...."
							/>
						</div>{' '}
						<div className="flex flex-col">
							<label
								htmlFor="location"
								className="text-[14px] text-[#404040] font-semibold "
							>
								Manzil
							</label>
							<input
								type="text"
								className="bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md"
								id="location"
								placeholder="Manzil..."
							/>
						</div>{' '}
						<div className="flex flex-col">
							<label
								htmlFor="zaplata"
								className="text-[14px] text-[#404040] font-semibold "
							>
								должности и зарплата{' '}
							</label>
							<input
								type="text"
								className="bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md"
								id="zaplata"
								placeholder="должности и зарплата ..."
							/>
						</div>{' '}
						<div className="flex flex-col">
							<label
								htmlFor="card"
								className="text-[14px] text-[#404040] font-semibold "
							>
								Karta raam
							</label>
							<input
								type="number"
								className="bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md"
								id="card"
								placeholder="Karta raam..."
							/>
						</div>{' '}
						<div className="flex flex-col">
							<label
								htmlFor="money"
								className="text-[14px] text-[#404040] font-semibold "
							>
								Oylik
							</label>
							<input
								type="text"
								className="bg-[#F1F5F8] border border-[#071A5033] py-2 px-4 text-[14px] outline-0 rounded-md"
								id="money"
								placeholder="Oylik..."
							/>
						</div>
					</form>
					<div className="pt-6 pb-3 flex items-center gap-2">
						<input type="checkbox" id="check" />
						<label
							htmlFor="check"
							className="text-[14px] text-[#404040] font-semibold"
						>
							Make this my default address
						</label>
					</div>
					<div className="flex gap-2 pt-3 pb-6">
						<button className="px-5 text-[#fff] rounded-md bg-[#4361EE] flex items-center h-[38px] gap-3">
							{/* <TrashIcon color="#fff" /> */}
							<p className="font-semibold text-[14px] leading-[19px]">Save</p>
						</button>{' '}
						<button className="px-5 text-[#fff] rounded-md bg-[#00AB55] flex items-center h-[38px] gap-3">
							{/* <TrashIcon color="#fff" /> */}
							<p className="font-semibold text-[14px] leading-[19px]">Edite</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Malumotlar;
