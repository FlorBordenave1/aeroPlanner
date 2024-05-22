import { Text, View } from "native-base";
import { UserNameProps } from "./types";

export default function UserName({ name }: UserNameProps) {
  return (
    <View>
      <Text fontSize={32} fontFamily={"Poppins-Bold"} fontWeight={600}>
        Hola,{" "}
      </Text>
      <Text
        fontSize={32}
        fontFamily={"Poppins-Bold"}
        fontWeight={600}
        color={"#2970ff"}
        lineHeight={"36px"}
      >
        {name}
      </Text>
    </View>
  );
}
