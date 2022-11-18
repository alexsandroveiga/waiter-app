import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/cart-item';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { MinusCircle } from '../Icons/MinusCircle';
import { Text } from '../Text';
import { Item, ProductContainer, Actions, Image, QuantityContainer, ProductDetails, Summary, TotalContainer } from './styles';

type CartProps = {
  cartItems: CartItem[]
}

export function Cart({ cartItems }: CartProps) {
  return (
    <>
      <FlatList
        data={cartItems}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20, maxHeight: 200 }}
        keyExtractor={cartItem => cartItem.product.id}
        renderItem={({ item: cartItem }) => (
          <Item>
            <ProductContainer>
              <Image source={{ uri: cartItem.product.imagePath }} />

              <QuantityContainer>
                <Text size={14} color="#666">{cartItem.quantity}x</Text>
              </QuantityContainer>

              <ProductDetails>
                <Text size={14} weight="600">{cartItem.product.name}</Text>
                <Text size={14} color="#666" style={{ marginTop: 4 }}>{formatCurrency(cartItem.product.price)}</Text>
              </ProductDetails>            
            </ProductContainer>

            <Actions>
              <TouchableOpacity style={{ marginRight: 24 }}>
                <MinusCircle />
              </TouchableOpacity> 

              <TouchableOpacity>
                <MinusCircle />
              </TouchableOpacity> 
            </Actions>          
          </Item>
        )}
      />

      <Summary>
        <TotalContainer>
          <Text color="#666">Total</Text>
          <Text size={20} weight="600">{formatCurrency(120)}</Text>
        </TotalContainer>

        <Button onPress={() => alert('a')}>Confirmar pedido</Button>
      </Summary>
    </>
  );
}