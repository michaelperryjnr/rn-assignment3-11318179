import { StatusBar } from "expo-status-bar";
import { Text, View, Image, FlatList, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../constants";
import { Category, SearchBar, OngoingTask } from "../components";

const data = [
  {
    id: 1,
    title: "Exercise",
    tasks: 12,
    categoryImage: images.exercise,
  },
  {
    id: 2,
    title: "Study",
    tasks: 12,
    categoryImage: images.learning,
  },
  {
    id: 3,
    title: "Relax",
    tasks: 8,
    categoryImage: images.exercise,
  },
  {
    id: 4,
    title: "Walk",
    tasks: 2,
    categoryImage: images.learning,
  },
  {
    id: 5,
    title: "Read",
    tasks: 5,
    categoryImage: images.exercise,
  },
  {
    id: 6,
    title: "Swim",
    tasks: 1,
    categoryImage: images.learning,
  },
];

const ONGOING_TASKS = [
  "Mobile App Development",
  "Learning",
  "Eating",
  "Coding",
  "Studying",
  "Teaching",
  "Reading",
  "Writing",
  "Exercising",
  "Walking",
  "Sleeping",
  "Watching TV",
  "Cooking",
  "Cleaning",
  "Shopping",
];

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full px-3 min-h-[85vh] pt-4">
        <View className="flex flex-row justify-between items-center ">
          <View className="flex flex-col items-start">
            <Text className="font-extrabold text-4xl">Hello, Devs</Text>
            <Text className="text-[18px] font-semibold">14 tasks today</Text>
          </View>
          <View className="bg-white rounded-full px-2 py-2">
            <Image
              source={images.profile}
              resizeMode="contain"
              className="w-14 h-14"
            />
          </View>
        </View>
        <SearchBar
          placeholder="Search"
          searchIcon={icons.search}
          isFilterable={true}
          filterIcon={icons.slider}
          otherStyles="mt-7"
        />
        <View className="mt-7">
          <Text className="font-bold text-2xl mb-7">Categories</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Category
                title={item.title}
                taskNumber={item.tasks}
                categoryImage={item.categoryImage}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 16 }}
          />
        </View>
        <View className="mt-7">
          <Text className="font-bold text-2xl mb-7">Ongoing Tasks</Text>
          <SectionList
            sections={[{ title: "Ongoing Tasks", data: ONGOING_TASKS }]}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <OngoingTask taskName={item} />}
          />
        </View>
      </View>
      <StatusBar backgroundColor="#F7E9E8" style="auto" />
    </SafeAreaView>
  );
}
