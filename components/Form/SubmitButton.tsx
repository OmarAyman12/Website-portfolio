"use client";
import { IoReload } from "react-icons/io5";
import React from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
type SubmitButtonProps={
  name?:string;
  className?:string;

}

function SubmitButton({ name, className }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <div>
      <Button
        type="submit"
        className={cn("capitalize", className)}
        variant="outline"
       
      >
        {pending ? (
          <>
            <IoReload className="animate-spin" />
            Please wait...
          </>
        ) : (
          <>{name || "Submit"}</>
        )}
      </Button>
    </div>
  );
}

export default SubmitButton;
