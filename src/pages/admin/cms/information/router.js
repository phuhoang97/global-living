import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminWebsiteContact from "./website/list/index.jsx";
import AdminHotlineContact from "./hotline/list/index.jsx";
import AdminEmailContact from "./email/list/index.jsx";

const AdminInformationContact = () => {
  return (
    <Routes path={"/"}>
      <Route index element={<AdminWebsiteContact />} />
      <Route path="hotline" element={<AdminHotlineContact />} />
      <Route path="email" element={<AdminEmailContact />} />
      <Route path="website" element={<AdminWebsiteContact />} />
    </Routes>
  );
};

export default AdminInformationContact;
