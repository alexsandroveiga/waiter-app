import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { Container, OkButton } from './styles';

type OrderConfirmedModalProps = {
  visible: boolean
}

export function OrderConfirmedModal({ visible }: OrderConfirmedModalProps) {
  return (
    <Modal visible={visible} animationType="fade">
      <Container>
        <CheckCircle />
        <Text weight='600' size={20} color="#fff" style={{ marginTop: 12 }}>Pedido confirmado</Text>
        <Text opacity={0.9} color="#fff" style={{ marginTop: 4 }}>O pedido já entrou na fila de produção!</Text>

        <OkButton>
          <Text color="#D73035" weight='600'>OK</Text>
        </OkButton>
      </Container>
    </Modal>
  );
}