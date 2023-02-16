import React from "react";
import { Modal, View } from "react-native";

import {
  ButtonsContainer,
  CancelButton,
  CancelText,
  CenteredView,
  ConfirmButton,
  ConfirmText,
  Container,
  styles,
  Title,
} from "./styles";

type ModalProps = {
  mealId: string;
  modalVisible: boolean;
  setModalVisible: (bool: boolean) => void;
  handleDeleteMeal: (id: string) => void;
};

export function DeleteModal({
  mealId,
  modalVisible,
  setModalVisible,
  handleDeleteMeal,
}: ModalProps) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <CenteredView>
          <Container>
            <Title>Deseja realmente excluir o registro da refeição?</Title>
            <ButtonsContainer>
              <CancelButton onPress={() => setModalVisible(false)}>
                <CancelText>Cancelar</CancelText>
              </CancelButton>

              <ConfirmButton onPress={() => handleDeleteMeal(mealId)}>
                <ConfirmText>Sim, excluir</ConfirmText>
              </ConfirmButton>
            </ButtonsContainer>
          </Container>
        </CenteredView>
      </Modal>
    </View>
  );
}
