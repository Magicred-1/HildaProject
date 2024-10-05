"use client"

import {
    Settings,
    CircleUserRound,
    ChartArea,
    HandCoins,
    BadgePlus,
    ShoppingCart,
  } from "lucide-react";

  import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathname = usePathname();

    const isInvestor = false;

    return (
        <div className="fixed z-10 bottom-0 flex justify-between items-center px-6 py-2 w-full h-[10vh]
        border-solid border-t-4 border-white">
        
            <ChartArea
            className={`flex-shrink-0 size-5 text-primary w-14 h-14 rounded-lg p-2
                ${pathname === "/dashboard" ? "bg-white stroke-black" : ""}`}
            strokeWidth={1.5}
        />


        {isInvestor?(

            <HandCoins
            className={`flex-shrink-0 size-5 text-primary w-14 h-14 rounded-lg p-2
                ${pathname === "/make-bond" ? "bg-white stroke-black" : ""}`}
            strokeWidth={1.5}
            />

            ):(

            <ShoppingCart
            className={`flex-shrink-0 size-5 text-primary w-14 h-14 rounded-lg p-2
                ${pathname === "/buy-bond" ? "bg-white stroke-black" : ""}`}
            strokeWidth={1.5}
            />
        )}

        {isInvestor?(

            <BadgePlus
            className={`flex-shrink-0 size-5 text-primary w-14 h-14 rounded-lg p-2
                ${pathname === "/whitelist" ? "bg-white stroke-black" : ""}`}
            strokeWidth={1.5}
            />

            ):(

            <Settings
            className={`flex-shrink-0 size-5 text-primary w-14 h-14 rounded-lg p-2
                ${pathname === "/settings" ? "bg-white stroke-black" : ""}`}
            strokeWidth={1.5}
            />

            )}

            <CircleUserRound
            className={`flex-shrink-0 size-5 text-primary w-14 h-14 rounded-lg p-2
                ${pathname === "/profile" ? "bg-white stroke-black" : ""}`}
        />

        </div>
    )
}