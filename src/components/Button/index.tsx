import { Text } from '../Text';
import { Container } from './styles';

type ButtonProps = {
  onPress: () => void
  children: string
  disabled?: boolean
}

export function Button({ children, onPress, disabled }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text color='#ffffff' weight='600'>{children}</Text>
    </Container>
  );
}