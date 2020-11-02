import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <MyComponent
          lastName="Doe"
          firstName="Jane"
          age={45}
          hairColor="Black"
        />
        <MyComponent
          lastName="Smith"
          firstName="John"
          age={88}
          hairColor="Brown"
        />
        <MyComponent
          lastName="Fillmore"
          firstName="Millard"
          age={50}
          hairColor="Brown"
        />
        <MyComponent
          lastName="Smith"
          firstName="Maria"
          age={62}
          hairColor="Brown"
        />
      </div>

    </div>
  );
}

export default App;
