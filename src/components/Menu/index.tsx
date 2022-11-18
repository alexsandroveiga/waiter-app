import { useState } from 'react';
import { FlatList } from 'react-native';
import { Product } from '../../types/product';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';
import { Text } from '../Text';
import { ProductContainer, ProductDetails, ProductImage, Separator, AddToCartButton } from './styles';

type MenuProps = {
  onAddToCart: (product: Product) => void
  products: Product[]
}

export function Menu({ onAddToCart, products }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
      <FlatList
        data={products}
        keyExtractor={product => product.id}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        style={{ marginTop: 32 }}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{ uri: product.imagePath }}
            />

            <ProductDetails>
              <Text weight='600'>{product.name}</Text>
              <Text color='#666666' size={14} style={{ marginVertical: 8 }}>{product.description}</Text>
              <Text weight='600' size={14}>{formatCurrency(product.price)}</Text>
            </ProductDetails>

            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
