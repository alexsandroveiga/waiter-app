import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import { Container } from './styles';

type ButtonProps = {
  onPress: () => void
  children: string
  disabled?: boolean
  loading?: boolean
}

export function Button({ children, onPress, disabled, loading }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator color="#ffffff"  />
      ) : (
        <Text color='#ffffff' weight='600'>{children}</Text>
      )}
    </Container>
  );
}
