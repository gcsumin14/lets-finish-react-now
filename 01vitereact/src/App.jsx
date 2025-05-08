
// import CHAI from "./chai"
function MyApp() {
  return (
    <div id="root">
      <h1>CUSTOM APP</h1>
    </div>
  )
}

{/* <>these empty tags in react is called fragments</> */}
ReactDOM.createRoot(document.getElementById("root")).render(

<MyApp />
);