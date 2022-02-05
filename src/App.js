import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./style/App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  // async은 시간이 필요함을 의미. ( 비동기 )
  getMovies = async () => {
    // await는 실행을 기다려달라고 언급하는것. ( 비동기이므로 await 뒤의 소스코드가 끝날때까지 대기했다가 실행 )
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );

    // const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(movies);
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() {
    // #2
    this.getMovies();
  }

  render() {
    // #1 -> Loading...
    // #4 -> We are ready
    // render에서 사용할 state변수를 정의한다.
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">윤미야기다려...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              console.log(movie);
              const { id, year, title, summary, medium_cover_image,genres } = movie;
              return (
                <Movie
                  key={id}
                  year={year}
                  title={title}
                  summary={summary}
                  poster={medium_cover_image}
                  genres={genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
