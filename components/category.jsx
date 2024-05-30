import { View, Text, Image } from "react-native";

const Category = ({ title, taskNumber, categoryImage }) => {
  return (
    <View className="bg-white px-4 py-4 flex flex-col rounded-xl justify-center w-[245px] ml-3">
      <Text className="font-bold text-black text-xl ">{title}</Text>
      <Text className="font-semibold">
        {taskNumber > 1
          ? `${taskNumber + " " + "Tasks"}`
          : `${taskNumber + " " + "Task"}`}
      </Text>
      <Image
        source={categoryImage}
        resizeMode="contain"
        className="w-[210px] h-[210px]"
      />
    </View>
  );
};

export default Category;
