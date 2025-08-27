import React from "react";

const AdminPage = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/admin/index.html"
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Admin Dashboard"
      ></iframe>
    </div>
  );
};

export default AdminPage;
