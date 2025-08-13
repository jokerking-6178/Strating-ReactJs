

function App() {
  return (
    <button id = "demo" >click me</button>
  );
}

const bt = document.querySelector('.demo').addEventListener('click',function(event){
  console.log("fuck you");
})

export default App;
