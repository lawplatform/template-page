import { useEffect, useState } from "react";
import { trpc } from "@/app/_trpc/client"
export default function Gallery_anime() {
	const getImages = trpc.getImages.useQuery();
	const [imageData, setImageData] = useState([]);
	useEffect(() => {
	}, [])
	return (
		< div className="mx-auto h-screen w-full overflow-hidden bg-red-100" > this is interactive gallery
			<div className="absolute left-20 top-20 flex gap-4">
				{getImages.data && JSON.parse(getImages.data).map((imageName: any, index: any) => (
					<div className="h-20 w-20">
						<img key={index} src={"gallery/" + imageName} alt={`Image ${index}`} />
					</div>
				))}
			</div>
		</ div >
	)
}
