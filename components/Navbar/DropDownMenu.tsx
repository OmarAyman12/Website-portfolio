import React from "react";
import { DrpDwnLinks } from "@/utils/types";
import { IoIosMenu } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

function DropDownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent text-black dark:text-white hover:bg-gray-400">
          <IoIosMenu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {DrpDwnLinks.map((link) => {
          const { href, title } = link;
          return (
            <div key={title}>
              <DropdownMenuItem>
                <Link href={href}>{title}</Link>
              </DropdownMenuItem>
            </div>
          );
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem>Login</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDownMenu;
