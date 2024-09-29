import React from 'react';
import Header from './sub-components/header';
import ReactApexChart from 'react-apexcharts';
import { IoIosArrowForward } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';
import percent from './icons/percent.svg';

const servicesList = [
	'Soliq',
	'Komunalka',
	'Ishchi oyliklari',
	'Homashyolar',
	'Soliq',
	'Komunalka',
	'Ishchi oyliklari',
	'Homashyolar',
	'Soliq',
	'Komunalka',
	'Ishchi oyliklari',
	'Homashyolar',
];

interface RevenueChart {
	series: {
		name?: string;
		data: number[];
	}[];
	options?: ApexCharts.ApexOptions;
}

const revenueChart2: RevenueChart = {
	series: [
		{
			name: 'Income',
			data: [
				16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000,
				14000, 17000,
			],
		},
		{
			name: 'Expenses',
			data: [
				16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000,
				18000, 19000,
			],
		},
	],
	options: {
		chart: {
			height: 325,
			type: 'area',
			fontFamily: 'Nunito, sans-serif',
			zoom: {
				enabled: false,
			},
			toolbar: {
				show: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			curve: 'smooth',
			width: 2,
			lineCap: 'square',
		},
		markers: {
			discrete: [
				{
					seriesIndex: 0,
					dataPointIndex: 6,
					fillColor: '#1B55E2',
					strokeColor: 'transparent',
					size: 7,
				},
				{
					seriesIndex: 1,
					dataPointIndex: 5,
					fillColor: '#E7515A',
					strokeColor: 'transparent',
					size: 7,
				},
			],
		},
		labels: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		xaxis: {
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			crosshairs: {
				show: true,
			},
			labels: {
				offsetY: 5,
				style: {
					fontSize: '12px',
					cssClass: 'apexcharts-xaxis-title',
				},
			},
		},
		yaxis: {
			tickAmount: 7,
			labels: {
				formatter: (value: number) => {
					return value / 1000 + 'K';
				},
				offsetY: 0,
				style: {
					fontSize: '12px',
					cssClass: 'apexcharts-yaxis-title',
				},
			},
		},
		grid: {
			strokeDashArray: 5,
			xaxis: {
				lines: {
					show: true,
				},
			},
			yaxis: {
				lines: {
					show: false,
				},
			},
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
			},
		},
		legend: {
			show: false,
			position: 'top',
			horizontalAlign: 'right',
			fontSize: '16px',
			itemMargin: {
				horizontal: 10,
				vertical: 5,
			},
		},
		tooltip: {
			marker: {
				show: true,
			},
			x: {
				show: false,
			},
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				inverseColors: false,
				opacityTo: 0.05,
			},
		},
	},
};

const Rasxod: React.FC = () => {
	return (
		<div className="">
			<Header />

			<div className="max-h-[calc(100vh-200px)] overflow-y-scroll mt-3">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
					<div className="md:col-span-1 bg-white p-6 rounded-md shadow">
						<div className="flex justify-between">
							<div className="flex flex-col gap-1">
								<span className="text-[#40434E] text-2xl">Rasxodlar</span>
								<span className="text-[#E7515A] text-sm">
									Must be paid before July 27, 2022
								</span>
							</div>
							<div className="flex flex-col gap-1">
								<span className="text-[#4361EE] font-light">Umumiy</span>
								<div className="flex items-end gap-2">
									<span className="text-3xl text-red-500">$50,000.00</span>
									<span className="mb-[2px]">this week</span>
									<svg
										className="mb-[4px]"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M15.3333 4L9 10.3333L5.66667 7L0.666668 12"
											stroke="#E95F2B"
											strokeWidth="1.2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M11.3333 4H15.3333V8"
											stroke="#E95F2B"
											strokeWidth="1.2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</div>
						</div>

						<ReactApexChart
							series={revenueChart2.series}
							options={revenueChart2.options}
							type="area"
							height={310}
						/>
					</div>
					<div className="md:col-span-1 bg-white p-5 rounded-md shadow">
						<div className="flex justify-between">
							<p className="text-[#40434E] text-2xl">
								Ro’yxatdan tashqari to’lovlar
							</p>
							<button
								type="button"
								className="text-white flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-normal rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
							>
								Ro’yxatdan tashqari
								<IoIosArrowForward className="w-[22px] h-[22px] ml-4" />
							</button>
						</div>
						<div className="relative overflow-x-auto mt-4">
							<table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-lg">
								<thead className="  text-white text-md">
									<tr className="bg-[#4D5773]">
										<th scope="col" className="px-6 py-3  rounded-l-lg">
											<span className="font-normal">ID</span>
										</th>
										<th scope="col" className="px-6 py-3">
											<span className="font-normal">DATE</span>
										</th>
										<th scope="col" className="px-6 py-3">
											<span className="font-normal">Firma nomi</span>
										</th>
										<th scope="col" className="px-6 py-3">
											<span className="font-normal">Mablag’ qiymati</span>
										</th>
										<th scope="col" className="px-6 py-3 rounded-r-lg">
											<span className="font-normal">Status</span>
										</th>
									</tr>
								</thead>
								<tbody>
									{[0, 1, 2, 3, 4, 5].map((i) => (
										<tr key={i} className="bg-white border-b border-[#191E3A]">
											<td scope="row" className="px-6 py-1.5 text-[#40434E] ">
												#01
											</td>
											<td className="px-6 py-1.5">Oct 08, 2021</td>
											<td className="px-6 py-1.5">Murat building.mchj</td>
											<td className="px-6 py-1.5">$1,358.75</td>
											<td className="px-6 py-1.5">
												<div
													className={`${i === 0 ? 'text-[#5D5DEF] border-[#5D5DEF]' : 'text-red-500 border-red-500'} font-medium  flex items-center justify-center border-[1.5px] py-2 px-4`}
												>
													{i === 0 ? 'Completed' : 'In Process'}
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<p className="m-5 text-2xl font-medium">Chiqimlar ro’yxati</p>

				<div className="bg-white rounded-md shadow mt-2 p-6">
					<div className="flex justify-between">
						<button
							type="button"
							className="text-white flex gap-3 items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-normal rounded-lg text-sm px-5 py-3.5 me-2 mb-2"
						>
							<FiPlus className="w-[22px] h-[22px]" />
							Ro’yxatdan tashqari
						</button>
						<input
							id="search-dropdownm"
							className="block h-full p-4 z-20 w-[300px] text-md text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md outline-none"
							placeholder="Search"
							required
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
						{servicesList.map((service, index) => (
							<div
								key={index}
								className="md:col-span-1 cursor-pointer gap-2 shadow-md flex items-center justify-center text-white rounded-md  p-5 bg-[#4D5773]  "
							>
								<img
									src={percent}
									className="w-[30px] h-[30px]"
									alt="percent icon"
								/>
								<span>{service}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rasxod;
