import React from "react";

class Categories extends React.Component {
  state = {
    isLoaded: false,
    error: null,
  };

  componentDidMount() {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          // request successful
          let response = request.responseText,
            json = JSON.parse(response);
          this.setState({
            isLoaded: true,
            content: json,
          });
        } else {
          // error
          this.setState({
            isLoaded: true,
            error: request.responseText,
          });
        }
      }
    });

    request.open("GET", "http://127.0.0.1:8000/api/categories?page=1", true);
    request.send();
  }

  render() {
    const { error, isLoaded, content } = this.state;
    let body;
    if (!isLoaded) {
      body = <div>Loading...</div>;
    } else if (error) {
      body = <div>Error occured: {error}</div>;
    } else {
      let categories = content["hydra:member"].map((category) => (
        <li className=" ph3 pv3 bb b--light-silver">
          <a href={"?category=" + category.id} className="no-underline black">
            {category.name}
          </a>
        </li>
      ));
      body = categories;
    }

    return (
      <div className="fixed-ns">
        <h1 className="f4 ttu bold center fw6 red">Categories</h1>
        <ul className="list pl0 ml0 center ba b--light-red br2 fw6 ">
          {body}
          <li className="ph3 pv3 bb b--light-silver">
            <a href={"?used=1"} className="no-underline red">
              Buy used!
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Categories;
