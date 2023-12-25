import "./App.css";
import Card from "./components/Card";
function App() {
  let obj = {
    name:"Krishanu Mandal",
    age:23,
    position:"Software Engineer"
  }
  let newArr = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
      <h1 className="w-60 h-9 mt-6 ml-5 bg-green-600 text-white flex justify-center align-middle  rounded-xl mb-4">
        Testing Tailwind
      </h1>
      <Card btnData="Load More" /*info={newArr}*/ />
      <Card btnData="Subscribe"/>
      <Card btnData="Pay & Use"/>
      
    </>
  );
}

export default App;
