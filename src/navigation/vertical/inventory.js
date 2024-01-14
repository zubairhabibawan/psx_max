export default [
  {
    title: 'Inventory',
    icon: { icon: 'tabler-box' },
    children: [
      {
        title: 'Units',
        to: 'inventory-unit-list',
      },
      {
        title: 'Categories',
        to: 'inventory-category-list',
      },
      {
        title: 'Products',
        to: 'inventory-product-list',
      },
    ],
  },
]
