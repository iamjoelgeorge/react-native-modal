import React, {useState} from 'react';
import {Button, View, Alert, Text} from 'react-native';
import CustomModal from '../../components/CustomModal/CustomModal';

import styles from './Dashboard.style';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Button onPress={() => setIsModalOpen(true)} title="Open Modal" />
      <CustomModal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}>
        <Text>
          I have created a custom react modal component and I would like
          refactor to be able to track the outside clicks of modal content and
          to be able to close modal My code looks as it follows. And I search
          for a workaround to remove the create portal if click is outside of
          popup container,
        </Text>
      </CustomModal>
    </View>
  );
};

export default Dashboard;
