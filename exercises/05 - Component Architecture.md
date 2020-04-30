## Exercises from Course 5 - Component Architecture

### 1. Product Component
Create a component called product component that will render a product.
The product component should receive a product and it will render the title, price, image and if is available or not

The App component will store all the products, but it will you our new ProductComponent to render the product

### 2. Click on buy
The Product component will have a button, and every time we click on it, we need to emit the value. In our AppComponent we need to increase the number of clicks.

Every time I click on that button, the number of click for that button should be increased.


### 3. Display the number of products added
On Product component add another button called: "Add to Cart". If I click on that button then the product should be added in the cart. After the product is added in the cart, the button is changed to "Remove from Cart" and if I click on that button the product is removed from the cart.

In App component, above every products, we need to display the number of product from the cart.

Every time I click on "Add to Cart" or "Remove from Cart", the number of products should be updated.
