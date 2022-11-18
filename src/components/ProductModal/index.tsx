import { useState } from 'react';
import { FlatList, Modal } from 'react-native';
import { Product } from '../../types/product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { Image, CloseButton, Header, ModalBody, IngredientsContainer, Ingredient, Footer, FooterContainer, PriceContainer } from './styles';

type TableModalProps = {
  visible: boolean
  onClose: () => void
  product: Product | null
}

export function ProductModal({ visible, onClose, product }: TableModalProps) {
  if (!product) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <Image source={{ uri: product.imagePath }}>
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>
      
      <ModalBody>
        <Header>
          <Text size={24} weight='600'>{product.name}</Text>
          <Text color="#666" style={{ marginTop: 8 }}>{product.name}</Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight='600' color="#666">Ingredients</Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={ingredient => ingredient.name}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color="#666" style={{ marginLeft: 20 }}>{ingredient.name}</Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>
      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666">Preço</Text>
            <Text size={20} weight="600">{formatCurrency(product.price)}</Text>
          </PriceContainer>

          <Button onPress={() => alert('Adicionar o pedido')}>
            Adicionar ao pedido
          </Button>
        </FooterContainer>
      </Footer>
      
    </Modal>
  );
}
