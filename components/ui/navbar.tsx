"use client"

import {
    CircleUserRound,
    ChartArea,
    HandCoins,
    BadgePlus,
    ShoppingCart,
  } from "lucide-react";

  import { usePathname } from "next/navigation";
  import { useRouter } from "next/navigation";


export default function Navbar() {

    const router = useRouter();
    const pathname = usePathname();

    const isInvestor = false;

    return (
        <div className="h-full">
            
            <div className="absolute top-5 right-5 h-5">
            <CircleUserRound
            className={`flex-shrink-0 size-5 text-primary w-14 h-14 rounded-lg p-2
                ${pathname === "/profile" ? "bg-white stroke-black" : ""}`}
            onClick={() => router.push("/profile")}
        />
            </div>

        <div className="fixed z-10 bottom-0 flex justify-between items-center px-6 py-2 w-full h-[10vh]
        border-solid border-t-4 border-white bg-black">
        
            <ChartArea
            className={`flex-shrink-0 size-5 text-primary w-14 h-14 rounded-lg p-2
                ${pathname === "/dashboard" ? "bg-white stroke-black" : ""}`}
            strokeWidth={1.5}
            onClick={() => router.push("/dashboard")}
        />


        {isInvestor?(

            <HandCoins
            className={`flex-shrink-0 size-5 text-primary w-14 h-14 rounded-lg p-2
                ${pathname === "/make-bond" ? "bg-white stroke-black" : ""}`}
            strokeWidth={1.5}
            onClick={() => router.push("/make-bond")}
            />

            ):(

            <ShoppingCart
            className={`flex-shrink-0 size-5 text-primary w-14 h-14 rounded-lg p-2
                ${pathname === "/buy-bond" ? "bg-white stroke-black" : ""}`}
            strokeWidth={1.5}
            onClick={() => router.push("/buy-bond")}
            />
        )}


            <BadgePlus
            className={`flex-shrink-0 size-5 text-primary w-14 h-14 rounded-lg p-2
                ${pathname === "/whitelist" ? "bg-white stroke-black" : ""}`}
            strokeWidth={1.5}
            onClick={() => router.push("/whitelist")}
            />


        {!isInvestor?(

        <HandCoins
        className={`flex-shrink-0 size-5 text-primary w-14 h-14 rounded-lg p-2
            ${pathname === "/make-bond" ? "bg-white stroke-black" : ""}`}
        strokeWidth={1.5}
        onClick={() => router.push("/make-bond")}
            />

        ):(

            <CircleUserRound
            className={`flex-shrink-0 size-5 text-primary w-14 h-14 rounded-lg p-2
                ${pathname === "/profile" ? "bg-white stroke-black" : ""}`}
            onClick={() => router.push("/profile")} 
        />
        )}

        </div>
        </div>
    )
}