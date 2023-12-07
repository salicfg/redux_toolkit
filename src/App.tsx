import './App.css'
import ProductsContainer from "./containers/ProductsContainer";
import TodoComponent from "./components/TodoComponent";

function App() {

  return (
    <>
        <ProductsContainer />
        <hr style={{margin: '50px 0'}}/>
        <TodoComponent />
    </>
  )
}

export default App
