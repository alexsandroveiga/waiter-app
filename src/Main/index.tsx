import { useState } from 'react';
import { Button } from '../components/Button';
import { Cart } from '../components/Cart';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { TableModal } from '../components/TableModal';
import { products2 } from '../mocks/products';
import { CartItem } from '../types/cart-item';
import { Product } from '../types/product';
import { CategoriesContainer, Container, MenuContainer, Footer, FooterContainer } from './styles';

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    /* {
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
    } */
  ]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
    setIsTableModalVisible(false);
  }

  function handleCancelOrder() {
    setSelectedTable('');
    setCartItems([]);
  }

  function handleAddToCart(product: Product) {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }
    
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.product.id === product.id);

      if (itemIndex < 0) {
        return [...prevState, { product, quantity: 1 }];
      } 

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1
      };  
      
      return newCartItems;    
    });
  }

  function handleDecrementCartItem(product: Product) {    
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(cartItem => cartItem.product.id === product.id);

      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);
        return newCartItems;
      }   

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1
      };  
      
      return newCartItems;  
    });
  }

  return (
    <>
      <Container>
        <Header selectedTable={selectedTable} onCancelOrder={handleCancelOrder} />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu onAddToCart={handleAddToCart} />
        </MenuContainer>
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button onPress={() => setIsTableModalVisible(true)}>Novo pedido</Button>
          )}

          {selectedTable && (
            <Cart cartItems={cartItems} onAdd={handleAddToCart} onDecrement={handleDecrementCartItem} />
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
