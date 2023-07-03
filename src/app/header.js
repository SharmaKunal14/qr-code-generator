"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
const Header = () => {
	return (
		<nav className="flex p-6 font-semibold text-2xl bg-orange-400">
			<div className="basis-1/3">
				<h1 className="">QR-Code generator</h1>
			</div>
			<div className="basis-1/3">
				<h1 className="">
					I&apos;m&nbsp;
					<Typewriter
						words={[
							"Kunal Sharma",
							"a Blogger",
							"in ❤️ with the ⛅",
						]}
						loop={false}
						cursor
						cursorStyle="|"
						typeSpeed={70}
						deleteSpeed={100}
						delaySpeed={2000}
					/>
				</h1>
			</div>

			<div className="basis-1/3">
				<ul className="flex justify-end gap-5">
					<li>LinkedIn</li>
					<li>GitHub</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
