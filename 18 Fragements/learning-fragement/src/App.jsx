import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'


function App () {

  let FoodItems = ['Dal', 'Rice', 'Roti', 'Vegetables', 'Salad','Milk']


  return (
  
  <>
    <h1>Healthy Food</h1>
    <ul className="list-group">
      {FoodItems.map((item, index) => (
        <li key={index} className="list-group-item">{item}</li>
      ))}
    </ul>
  </>
  )
}

export default App
