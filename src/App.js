import React from "react";
import axios from "axios";


class App extends React.Component{

  state = {
      isLoading: true,
      movies:[],
  };
  // async은 시간이 필요함을 의미. ( 비동기 )
  getMovies = async () =>{
    // await는 실행을 기다려달라고 언급하는것. ( 비동기이므로 await 뒤의 소스코드가 끝날때까지 대기했다가 실행 )
    const {
      data : {
        data : {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    console.log(movies);
    this.setState({movies:movies,isLoading:false});
  };

  componentDidMount(){ // #2
    this.getMovies();
  }

  render(){
      // #1 -> Loading...
      // #4 -> We are ready
      const {isLoading} = this.state;

      return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>
  }
}

export default App;