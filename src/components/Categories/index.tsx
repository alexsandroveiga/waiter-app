import { Text } from '../Text';
import { CategoryContainer, Icon } from './styles';

import { FlatList } from 'react-native';
import { useState } from 'react';
import { Category } from '../../types/category';

type CategoriesProps = {
  categories: Category[]
  onSelectCategory: (categoryId: string) => Promise<void>
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;
    onSelectCategory(category);
    setSelectedCategory(category);
  }

  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        contentContainerStyle={{ paddingRight: 24 }}
        keyExtractor={category => category.id}
        renderItem={({ item: category }) => {
          const isSelected = selectedCategory === category.id;

          return (
            <CategoryContainer onPress={() => handleSelectCategory(category.id)}>
              <Icon>
                <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
              </Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.name}</Text>
            </CategoryContainer>
          );
        }}
      />
    </>
    
  );
}