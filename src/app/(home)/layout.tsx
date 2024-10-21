import { LogoIcon } from "@/components/Icon/LogoIcon";
import Link from "next/link";
import type { PropsWithChildren } from "react";

const Topbar = () => {
	return (
		<div className="flex flex-row items-center justify-between py-16">
			<Link href="/">
				<LogoIcon size={50} />
			</Link>
		</div>
	);
};

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className="flex flex-col w-full items-center">
			<div className="flex flex-col max-w-screen-2xl w-full gap-y-24">
				<Topbar />
				{children}
			</div>
		</div>
	);
}
