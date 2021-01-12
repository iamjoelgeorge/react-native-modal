import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';

import CustomModal from '../../components/CustomModal/CustomModal';

import styles from './DashboardScreen.style';

const DashboardScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Button onPress={() => setIsModalOpen(true)} title="Open Modal" />
      <CustomModal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Text>
      </CustomModal>
    </View>
  );
};

export default DashboardScreen;
