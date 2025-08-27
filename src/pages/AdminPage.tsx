import React, { useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AdminPage = () => {
  useEffect(() => {
    netlifyIdentity.init();

    netlifyIdentity.on("init", (user) => {
      if (!user) {
        console.log("User is not logged in. Opening login modal.");
        netlifyIdentity.open();
      } else {
        console.log("User is logged in:", user);
      }
    });
  }, []);

  return (
    <div
      id="cms-root"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Decap CMS akan dimuat di sini secara otomatis */}
    </div>
  );
};

export default AdminPage;
