import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

function Services() {
  return (
    <div>
      <Button className="bg-transparent text-black dark:text-white hover:bg-gray-400" >
        <Link href="/services">Services</Link>
      </Button>
    </div>
  );
}

export default Services;
