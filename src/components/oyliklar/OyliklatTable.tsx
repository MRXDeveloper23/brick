import { useState } from 'react';
import Oylik from './Oylik';
import Ishbay from './Ishbay';
import Kunlik from './Kunlik';

const OyliklatTable = () => {
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

export default OyliklatTable;
