import React from "react";
import CardsView from "./CardsView";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";

class Store extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          viewMode: "view_module"
      }
    }
    
  switherState = {
    "view_list": "view_module",
    "view_module": "view_list"
  }
  setViewMode(){
    this.setState({viewMode: this.switherState[this.state.viewMode]});
  }

  
 
  render() {
    return (
      <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <IconSwitch icon={this.state.viewMode} onSwitch={this.setViewMode.bind(this)}/>
          </div>
        </div> 
      </div>
      <div className="container">   
          {this.state.viewMode === "view_list" ? <ListView productsData = {products}/> : <CardsView productsData = {products}/>}
      </div> 
      </> 
    );
  }
}      
const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

export default Store;