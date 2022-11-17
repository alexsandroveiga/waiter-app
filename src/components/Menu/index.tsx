import { FlatList } from 'react-native';
import { products2 as products } from '../../mocks/products';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import { Product, ProductDetails, ProductImage, Separator, AddToCartButton } from './styles';

export function Menu() {
  return (
    <FlatList
      data={products}
      keyExtractor={product => product.id}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      style={{ marginTop: 32 }}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => (
        <Product>
          <ProductImage
            source={{ uri: product.imagePath }}
          />

          <ProductDetails>
            <Text weight='600'>{product.name}</Text>
            <Text color='#666666' size={14} style={{ marginVertical: 8 }}>{product.description}</Text>
            <Text weight='600' size={14}>{formatCurrency(product.price)}</Text>
          </ProductDetails>

          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
}