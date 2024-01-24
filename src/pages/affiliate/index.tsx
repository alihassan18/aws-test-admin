import withAuth from "@/hoc/withAuth";
import Affiliate from "@/modules/Affiliate";
import React from "react";

const index = () => {
  return <Affiliate />;
};

export default withAuth(index);
