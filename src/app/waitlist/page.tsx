import React from "react";
import { Metadata } from "next";
import Waitlist from "../templates/waitlist";

const Index = () => {
  return (
    <div>
      <Waitlist />
    </div>
  );
};

export const metadata: Metadata = {
  title: 'Waitlist',
};

export default Index;
