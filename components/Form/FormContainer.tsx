"use client";
import React, { useActionState, useEffect } from "react";
import { actionFunction } from "@/utils/types";

import { toast } from "sonner";
const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast("Product Created");
    } else toast("Error");
  }, [state]);
  return (
    <div>
      <form action={formAction}>{children}</form>
    </div>
  );
}

export default FormContainer;
