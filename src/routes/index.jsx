import CartPage from "../Pages/CartPage";
import HomePage from "../Pages/HomePage";
import CartFormPage from "../Pages/CartFormPage";
import OrderPage from "../Pages/OrderPage"
const routes = [
    {
      path: '/',
      element: <FrontEndLayout/>,
      children: [
        {
          path: '',
          element: <HomePage/>
        },
        {
          path: 'uncleinfos',
          element: <UncleInfoPage/>
        },
        {
          path: 'uncleinfo/:id',
          element: <UncleInfoDetailPage/>
        }
        ,
        {
          path: 'carts',
          element: <CartPage/>
        },
        {
            path: 'cartForm',
            element: <CartFormPage/>
          },
          {
            path: 'order',
            element: <OrderPage/>
          }
      ]
    }
]

export default routes