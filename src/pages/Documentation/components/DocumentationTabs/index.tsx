import { useState } from "react";
import { StatusBar, Pressable, Dimensions } from "react-native";
import { TabView } from "react-native-tab-view";
import { Box, HStack } from "native-base";
import { theme } from "../../../../../theme";
import { DocumentationTabsProps } from "./types";
import Text from "components/Text";

const DocumentationTabs: React.FC<DocumentationTabsProps> = ({
  renderScene,
}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "Manuales",
    },
    {
      key: "second",
      title: "Reglas",
    },
    {
      key: "third",
      title: "Aviones",
    },
  ]);

  const initialLayout = {
    width: Dimensions.get("window").width,
  };

  const renderTabBar = () => {
    return (
      <HStack width={"100%"} mt={2}>
        {routes?.map((route: any, i: any) => {
          const color =
            index === i ? theme.colors.primary05 : theme.colors.gray09;
          const borderColor =
            index === i ? theme.colors.primary05 : theme.colors.primary01;
          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              alignItems="center"
              p="3"
              width={"33%"}
              key={i}
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Text font="BODY_MEDIUM" color={color}>
                  {route.title}
                </Text>
              </Pressable>
            </Box>
          );
        })}
      </HStack>
    );
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{
        marginTop: StatusBar.currentHeight,
      }}
    />
  );
};

export default DocumentationTabs;
