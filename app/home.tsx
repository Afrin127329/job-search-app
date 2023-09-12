import { Redirect } from "expo-router";
import React from "react";
import { RedirectProps } from "../shared/types";

export default function Index() {
  const redirectProps: RedirectProps = {
    href: "/home",
  };

  return <Redirect {...redirectProps} />;
}
