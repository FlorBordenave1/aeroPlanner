import { Input } from "native-base";
import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { theme } from "../../../../../theme";
import { AutocompleteProps, Pilot } from "./types";

const Autocomplete: React.FC<AutocompleteProps> = ({ data }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Pilot[]>([]);

  const handleInputChange = (text: string) => {
    setInputValue(text);

    console.log("data", data);

    const filteredSuggestions = data.filter(
      (item) =>
        item.profile.first_name.toLowerCase().includes(text.toLowerCase()) ||
        item.profile.last_name.toLowerCase().includes(text.toLowerCase())
    );

    console.log("filteredSuggestions", filteredSuggestions);

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionPress = (item: Pilot) => {
    setInputValue(`${item.profile.first_name} ${item.profile.last_name}`);
    setSuggestions([]);
  };

  return (
    <View>
      <Input
        placeholder="Type here..."
        value={inputValue}
        onChangeText={handleInputChange}
        // id={name}
        backgroundColor={theme.colors.baseWhite}
        borderWidth={1}
        fontSize={14}
        height={"48px"}
        placeholderTextColor={theme.colors.gray03}
        borderColor={theme.colors.gray02}
        borderRadius={"8px"}
        fontFamily={"Poppins"}
        // onChangeText={formik.handleChange(name)}
        autoCapitalize="none"
        _focus={{
          borderColor: theme.colors.primary03,
          borderWidth: 2,
        }}
      />
      {inputValue?.length > 0 && (
        <FlatList
          data={suggestions}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSuggestionPress(item)}>
              <View
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                }}
              >
                <Text>item</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item: any) => item}
        />
      )}
    </View>
  );
};

export default Autocomplete;
