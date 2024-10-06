"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

import {
  CircleArrowLeft,
  CircleUserRound,
  ChartArea,
  HandCoins,
  BadgePlus,
  // ShoppingCart,
} from "lucide-react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/side";

export function SideBar() {
  const [open, setOpen] = useState(false);
  const { handleLogOut } = useDynamicContext();
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10 h-full">
        <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          {open ? <SidebarLogo /> : <SidebarLogoIcon />}
          <div className="flex flex-col gap-2 mt-8">
            {LINKS_ITEMS.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <button onClick={() => handleLogOut()}>
          <SidebarLink
            link={{
              label: "Logout",
              href: "#",
              icon: (
                <CircleArrowLeft className="flex-shrink-0 size-5 text-primary w-10 h-10 text-red-500" />
              ),
            }}
          />
        </button>
      </SidebarBody>
    </Sidebar>
  );
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     ✨ FUNCTIONS ✨                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
const SidebarLogo = () => {
  return (
    <Link
      href="#"
      className="relative z-20 flex items-end py-1 space-x-3 text-sm font-normal text-black ml-3"
    >
      <Image src={`/logo.svg`} alt="logo" width={50} height={50} />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-white whitespace-pre text-4xl font-black"
      >
        Hilda
      </motion.span>
    </Link>
  );
};
const SidebarLogoIcon = () => {
  return (
    <Link
      href="#"
      className="relative z-20 flex items-center py-1 space-x-2 text-sm font-normal text-black ml-3"
    >
      <Image src={`/logo.svg`} alt="logo" width={50} height={50} />
    </Link>
  );
};

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                        CONSTANTS                           */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

const LINKS_ITEMS = [
  {
    label: "Dashboard",
    href: "dashboard",
    icon: (
      <ChartArea
        className="flex-shrink-0 size-5 text-primary w-10 h-10"
        strokeWidth={1.5}
      />
    ),
  },
  {
    label: "Make Bond",
    href: "make-bond",
    icon: (
      <HandCoins
        className="flex-shrink-0 size-5 text-primary w-10 h-10"
        strokeWidth={1.5}
      />
    ),
  },
  {
    label: "Whitelist",
    href: "whitelist",
    icon: (
      <BadgePlus
        className="flex-shrink-0 size-5 text-primary w-10 h-10"
        strokeWidth={1.5}
      />
    ),
  },
  // {
  //   label: "Buy Bond",
  //   href: "buy-bond",
  //   icon: (
  //     <ShoppingCart
  //       className="flex-shrink-0 size-5 text-primary w-10 h-10"
  //       strokeWidth={1.5}
  //     />
  //   ),
  // },
  {
    label: "Profile",
    href: "profile",
    icon: (
      <CircleUserRound
        className="flex-shrink-0 size-5 text-primary w-10 h-10"
        strokeWidth={1.5}
      />
    ),
  },
];
