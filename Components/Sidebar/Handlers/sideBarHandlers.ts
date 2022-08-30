import { NextRouter } from "next/router";

export const signOut = async (router: NextRouter) => {
  localStorage.removeItem("__ut");
  await router.push("/");
};
