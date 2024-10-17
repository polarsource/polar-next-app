import { LogoIcon } from "@/components/Icon/LogoIcon";
import { PropsWithChildren } from "react";

const Topbar = () => {
    return (
        <div className="flex flex-row items-center justify-between py-16">
            <LogoIcon size={50} />
        </div>
    )
}

export default function Layout({children}: PropsWithChildren) {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex flex-col max-w-screen-2xl w-full gap-y-24">
                <Topbar />
                {children}
            </div>
        </div>
    )
}