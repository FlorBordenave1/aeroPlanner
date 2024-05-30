//
import * as React from "react";
import { StatusBar, Pressable, View, Dimensions } from "react-native";
import { TabView } from "react-native-tab-view";
import { Text, Box } from "native-base";
import { theme } from "../../../../../theme";
import { DocumentationTabsProps } from "./types";

const DocumentationTabs: React.FC<DocumentationTabsProps> = ({
  renderScene,
}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
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
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
          }}
        >
          {routes.map((route: any, i: any) => {
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
                    console.log(i);
                    setIndex(i);
                  }}
                >
                  <Text
                    style={{
                      color,
                      fontFamily: "Poppins-Medium",
                      fontSize: 16,
                    }}
                  >
                    {route.title}
                  </Text>
                </Pressable>
              </Box>
            );
          })}
        </View>
      </View>
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
