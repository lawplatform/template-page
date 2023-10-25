export default function F_comment() {
	return (
		<div>
			<form className="mx-auto mt-20 max-w-2xl rounded-lg border bg-white p-2">
				<div className="mb-2 mt-2 px-3">
					<textarea placeholder="comment" className="h-20 w-full resize-none rounded border border-gray-400 bg-gray-100 px-3 py-2 font-medium leading-normal placeholder-gray-700 focus:bg-white focus:outline-none"></textarea>
				</div>
				<div className="flex justify-end px-4">
					<input type="submit" className="rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm text-white" value="Comment" />
				</div>
			</form>
		</div>
	)
}
