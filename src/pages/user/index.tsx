import withAuth from "@/hoc/withAuth";
import User from "@/modules/User";
import React from "react";

const index = () => {
  return <User />;
};

export default withAuth(index);
