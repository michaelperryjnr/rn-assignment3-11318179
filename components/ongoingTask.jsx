import { View, Text } from 'react-native'
import React from 'react'

const OngoingTask = ({taskName}) => {
  return (
    <View className="flex-col justify-center px-4 py-10 border-2 rounded-xl border-secondary-200 mb-4 bg-white">
      <Text className="font-bold text-black text-xl mb-4 text-left">
        {taskName}
      </Text>
    </View>
  );
}

export default OngoingTask