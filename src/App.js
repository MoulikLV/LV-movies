import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import requests from './components/Api/Requests';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import { SearchProvider } from './Context/Searchcontext';
import Searchresults from './components/Searchresults';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Search from './components/Pages/Search/Search';
import Notfound from './components/Pages/Ntfound/Notfound';


function App() {

  const rowsData = [
    { title: "Trending", fetchURL: requests.fetchTrending },
    { title: "Top Rated", fetchURL: requests.fetchTopRated },
    { title: "Netflix Originals", fetchURL: requests.fetchNetflixOriginals },
    { title: "Action", fetchURL: requests.fetchActionMovies },
    { title: "Romantic", fetchURL: requests.fetchRomanceMovies },
    { title: "Horror", fetchURL: requests.fetchHorrorMovies },
    { title: "Comedy", fetchURL: requests.fetchComedyMovies },
    { title: "Documentary", fetchURL: requests.fetchDocumentaries },
  ];

  return (
    <>

      <SearchProvider>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search/:query' element={<Search/>}/>
        <Route path='*'  element={<Notfound/>}/>
       </Routes>

      </SearchProvider>




      {/* {rowsData.map((row,index)=>{
        return <Row key={index} isLargeRow title={row.title} fetchURL={row.fetchURL}/>
      })} */}








    </>
  );
}

export default App;




{/* <Row title="Trending" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Action" fetchURL={requests.fetchActionMovies} />
      <Row title="Romantic" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
      <Row title="Documentary" fetchURL={requests.fetchDocumentaries} />
  
 */}
