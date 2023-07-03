"use client";
import React, { useState } from "react";
import BodyLayout from "./layout";
const Body = () => {
	const [url, setUrl] = useState("");
	return (
		<BodyLayout>
			<form className="flex flex-col gap-4">
				<div className="flex flex-col gap-1">
					<label id="url">Enter URL</label>
					<input
						type="text"
						id="url"
						placeholder="https://example.com"
						value={url}
						onChange={(e) => setUrl(e.target.value)}
						className="p-2 w-[30rem] border-2 border-amber-300"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label id="size">Select size</label>
					<select
						className="p-2 border-2 border-amber-300 p-2 w-[30rem]"
						name="size"
						id="size"
					>
						<option value="100">100x100</option>
						<option value="200">200x200</option>
						<option value="300" selected>
							300x300
						</option>
						<option value="400">400x400</option>
						<option value="500">500x500</option>
						<option value="600">600x600</option>
						<option value="700">700x700</option>
					</select>
				</div>
			</form>
		</BodyLayout>
	);
};

export default Body;
