import * as React from "react";
import CustomSafeAreaView from "components/CustomSafeArea";
import TitlePage from "components/TitlePage";
import DocumentationTabs from "./components/DocumentationTabs";
import { useDocumentationController } from "./Documentation.controller";

const Documentation: React.FC = () => {
  const { renderScene } = useDocumentationController();

  return (
    <CustomSafeAreaView>
      <TitlePage title="Instructivos" />
      <DocumentationTabs renderScene={renderScene} />
    </CustomSafeAreaView>
  );
};

export default Documentation;
