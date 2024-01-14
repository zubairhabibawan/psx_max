export default [
  {
    title: 'Purchase',
    icon: { icon: 'tabler-shopping-cart-plus' },
    children: [
      {
        title: 'Suppliers',
        to: 'purchase-supplier',
      },
      {
        title: 'Purchase Orders',
        to: 'purchase-order',
      },
      {
        title: 'Purchase Returns',
        to: 'purchase-return',
      },
    ],
  },
]
