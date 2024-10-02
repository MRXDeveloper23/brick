import React from 'react';
import Header from './sub-components/header';
import ExpensesLineChart from './sub-components/expenses-line-chart';
import ExpensesTable from './sub-components/expenses-table';
import './styles/main.css';
import 'react-datepicker/dist/react-datepicker.css';

import ExpensesList from './sub-components/expenses-list';

const Rasxod: React.FC = () => {
	return (
		<div className="">
			<Header />

			<div className="max-h-[calc(100vh-200px)] overflow-y-scroll mt-3">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
					<ExpensesLineChart />
					<ExpensesTable />
				</div>
				<ExpensesList />
			</div>
		</div>
	);
};

export default Rasxod;
