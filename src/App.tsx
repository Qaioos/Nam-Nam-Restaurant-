import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
//React Pages
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Shop from "./Pages/shop/Shop";
import Contact from "./Pages/contact/Contact";
import Whishlist from "./Pages/whishlist/Whishlist";
import Cart from "./Pages/cart/Cart";
import { MobileProvider } from "./utils/mobileHandeler";

function App() {
    const Routing = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "/about", element: <About /> },
                { path: "/shop", element: <Shop /> },
                { path: "/contact", element: <Contact /> },
                { path: "/whishlist", element: <Whishlist /> },
                { path: "/cart", element: <Cart /> },
            ],
        },
    ]);
    return  (
        <>
        <MobileProvider>
            <RouterProvider router={Routing} />
        </MobileProvider>
        </>
    )
  
}

export default App;
