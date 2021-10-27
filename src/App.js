
import './App.sass';

function App() {

  const onClick = () => {
    console.log(document.getElementsByClassName('principal-box'))
    // document.getElementsByClassName('principal-box').style.border('1px solid black')
  }
  return (
    <div className="principal-box">
      <code>¡Bienvenido a mi primera app!</code>
      
      <button className="kitty" type="button" onClick={onClick}>
      </button>
    </div>
  );
}

export default App;
