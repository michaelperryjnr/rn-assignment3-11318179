import { useState } from "react";
import { icons } from "../constants";
import { View, TextInput, TouchableOpacity, Image } from 'react-native';

const SearchBar = ({
  title,
  placeholder,
  filterIcon = icons.filter,
  isFilterable = true,
  searchIcon,
  handleSearch,
  handleFilter, 
  otherStyles,
}) => {
  return (
    <View className={`flex-row items-center p-2 ${otherStyles}`}>
      <View className="flex-1 flex-row items-center bg-white rounded-2xl px-3 py-3 mr-3">
        <Image source={searchIcon} className="w-5 h-5" />
        <TextInput
          className="flex-1 py-2 ml-1 placeholder:font-bold placeholder:text-black"
          placeholder={placeholder || "Search"}
          onChangeText={handleSearch}
          style={{color: "black"}}
        />
      </View>
      {isFilterable && (
        <TouchableOpacity
          className="ml-2 bg-red-500 p-4 rounded-xl"
          onPress={handleFilter}
        >
          <Image source={filterIcon} className="w-6 h-6 tint-white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;

