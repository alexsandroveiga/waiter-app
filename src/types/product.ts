export type Product = {
  id: string
  name: string
  description: string
  imagePath: string
  price: number
  ingredients: {
    name: string
    icon: string
  }[]
}