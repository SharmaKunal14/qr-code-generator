"use client";
import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import BodyLayout from "./layout";
import { createPortal } from "react-dom";
const Body = () => {
	const [url, setUrl] = useState("");
	const [widthAndHeight, setWidthAndHeight] = useState(300);
	const [qrcode, setQrcode] = useState();
	const element = document?.getElementById("qrcode");

	const handleSubmit = (e) => {
		e.preventDefault();
		const code = (
			<QRCodeCanvas
				id="qrcode-canvas"
				level="H"
				size={widthAndHeight}
				value={url}
			/>
		);
		setQrcode(code);
	};
	const handleDownloadQrCode = (e) => {
		e.preventDefault();
		const canvas = document.querySelector("#qrcode-canvas");
		const pngUrl = canvas
			.toDataURL("image/png")
			.replace("image/png", "image/octet-stream");
		const downloadLink = document.createElement("a");
		downloadLink.href = pngUrl;
		downloadLink.download = "QR_CODE.png";
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	};

	return (
		<BodyLayout>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
						className="p-2 border-2 border-amber-300 w-[30rem]"
						name="size"
						id="size"
						value={widthAndHeight}
						onChange={(e) =>
							setWidthAndHeight(Number(e.target.value))
						}
					>
						<option value="100">100x100</option>
						<option value="200">200x200</option>
						<option value="300">300x300</option>
						<option value="400">400x400</option>
						<option value="500">500x500</option>
						<option value="600">600x600</option>
						<option value="700">700x700</option>
					</select>
				</div>

				<div className="flex gap-1">
					<button
						type="submit"
						className="p-2 border rounded w-[15rem] bg-orange-400 font-semibold"
					>
						Generate QR Code
					</button>
					{qrcode && (
						<button
							type="submit"
							className="p-2 border rounded w-[15rem] bg-orange-400 font-semibold"
							onClick={handleDownloadQrCode}
						>
							Download QR Code
						</button>
					)}
				</div>
			</form>
			<div id="qrcode"></div>
			{element && createPortal(qrcode, element)}
		</BodyLayout>
	);
};

export default Body;
