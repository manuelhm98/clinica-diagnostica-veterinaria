import React from "react";

import Layout from "../layout/Layout";
import Title from "../components/Global/Title";
import BreadCrumbs from "../components/Global/BreadCrumbs";

export default function Certifations() {
 
  return (
    <Layout>
      <div className="p-8">
        <Title name="Certificados" />
        <BreadCrumbs />
      </div>
    </Layout>
  );
}
