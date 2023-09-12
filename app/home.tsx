import { Redirect } from "expo-router";
import React from "react";

type RedirectProps = {
  href: string;
};

export default function Index() {
  const redirectProps: RedirectProps = {
    href: "/home",
  };

  return <Redirect {...redirectProps} />;
}
