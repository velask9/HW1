import{ QueryClient, QueryClientProvider } from "react-query";
import{ ReactQueryDevTools } from "react-query-devtools";
import Repositories from "./Repositories"
// import logo from './logo.svg';
import './App.css';


const queryClient = new QueryClient({});

const App = () =>{
  return(
    <QueryClientProvider client={queryClient}>
       <Repositories/>
      {/* <ReactQueryDevTools initialIsOpen={true}/> */}
    </QueryClientProvider>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        // <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
