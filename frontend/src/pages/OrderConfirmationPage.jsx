import React from 'react'

const checkout = {
    _id: "12345",
    createdAt: new Date(),
    checkoutItems: [
        {
            productId: "1",
            name: "Stylish Jacket",
            price: 200,
            quantity: 1,
            color: "Red",
            size: "M",
            image: "https://picsum.photos/500/500?random=1",
        },
        {
            productId: "2",
            name: "T-shirt",
            price: 100,
            quantity: 1,
            color: "black",
            size: "M",
            image: "https://picsum.photos/500/500?random=2",
        },
    ],
    shippingAddress: {
        address: "123 Main St",
        city: "New York",
        country: "USA",
    },
}

const OrderConfirmationPage = () => {
  return (
    <div>
      
    </div>
  )
}

export default OrderConfirmationPage
