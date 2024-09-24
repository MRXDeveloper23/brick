import React, { useState } from 'react';

import Oylik from './tablinks/Oylik';
import Kunlik from './tablinks/Kunlik';
import Ishbay from './tablinks/Ishbay';

const Table: React.FC = () => {
	const [count, setCount] = useState<number>(1);

	return (
		<div className="">
			<div className=" bg-[#fff] mt-[20px]">
				{count == 1 && <Oylik count={count} setCount={setCount} />}
				{count == 2 && <Ishbay count={count} setCount={setCount} />}
				{count == 3 && <Kunlik count={count} setCount={setCount} />}
			</div>
		</div>
	);
};

export default Table;
