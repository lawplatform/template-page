import React from 'react';
interface AProps {
	say: string;
}
const A: React.FC<AProps> = ({ say }) => {
	return <a href="#" className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
		<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
		<p className="font-normal text-gray-700 dark:text-gray-400">{say}</p>
	</a>
};
export default A;
