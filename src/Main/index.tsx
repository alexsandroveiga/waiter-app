import { useState } from 'react';
import { Button } from '../components/Button';
import { Cart } from '../components/Cart';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { TableModal } from '../components/TableModal';
import { products2 } from '../mocks/products';
import { CartItem } from '../types/cart-item';
import { CategoriesContainer, Container, MenuContainer, Footer, FooterContainer } from './styles';

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      quantity: 1,
      product: products2[0]
    },
    {
      quantity: 2,
      product: products2[1]
    },
    {
      quantity: 1,
      product: products2[2]
    },
    {
      quantity: 2,
      product: products2[3]
    }
  ]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
    setIsTableModalVisible(false);
  }

  function handleCancelOrder() {
    setSelectedTable('');
  }

  return (
    <>
      <Container>
        <Header selectedTable={selectedTable} onCancelOrder={handleCancelOrder} />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button onPress={() => setIsTableModalVisible(true)}>Novo pedido</Button>
          )}

          {selectedTable && (
            <Cart cartItems={cartItems} />
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
