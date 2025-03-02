import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import React from "react";
type TextArea = {
  placeholder?: string;
  name?: string;
  className?: string;
};
function TextArea({ placeholder, name, className }: TextArea) {
  return (
    <div className={className}>
      <Label htmlFor={name} className="capitalize">
        {name || "Text area"}
      </Label>
      <Textarea placeholder={placeholder || ""} name={name} id={name} />
    </div>
  );
}

export default TextArea;
