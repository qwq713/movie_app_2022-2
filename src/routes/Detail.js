import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      const { title, summary, poster, year } = location.state;
      return (
        <div className="detail__container">
          <img src={poster} alt={title} title={title}></img>
          <h2>
            {title} ({year})
          </h2>
          <h3>Summary</h3>
          <p>{summary} </p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
