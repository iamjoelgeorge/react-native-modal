import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

import styles from './CustomModal.style';

/* Use this component to render a modal

** Properties **

3. onClose
   Function to update the state in the parent component to close the modal.

4. isModalOpen
   Boolean value to open/close the modal.
   Default value is false.

*/

const CustomModal = (props) => {
  const {children, onClose, isModalOpen = false} = props;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalOpen}
      onRequestClose={onClose}>
      <View style={styles.modal}>
        <View style={styles.body}>
          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.close}
              onPress={onClose}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
