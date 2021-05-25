import "./App.css";
import Row from "./Components/Row";
import Banner from "./Components/Banner";
import NavBar from "./Components/NavBar";
import Requests from "./requests";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row
        title="Netflix Orignals"
        fetchUrl={Requests.fetchNetflixOrignals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action Movie" fetchUrl={Requests.fetchActionMovies} />
    </div>
  );
}

export default App;
