import React from 'react';
interface AProps {
	say: string;
}
const A: React.FC<AProps> = ({ say }) => {
	return <div className="text-black">{say}</div>;
};
export default A;
