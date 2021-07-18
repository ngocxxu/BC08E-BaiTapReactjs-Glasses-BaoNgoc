import React, { Component } from "react";

export default class GlassesComponent extends Component {
  // arrGlasses = [
  //     {
  //         "id": 1,
  //         "price": 30,
  //         "name": "GUCCI G8850U",
  //         "url": "./glassesImage/v1.png",
  //         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  //     },
  //     {
  //         "id": 2,
  //         "price": 50,
  //         "name": "GUCCI G8759H",
  //         "url": "./glassesImage/v2.png",
  //         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  //     },
  //     {
  //         "id": 3,
  //         "price": 30,
  //         "name": "DIOR D6700HQ",
  //         "url": "./glassesImage/v3.png",
  //         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  //     },
  //     {
  //         "id": 4,
  //         "price": 70,
  //         "name": "DIOR D6005U",
  //         "url": "./glassesImage/v4.png",
  //         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  //     },
  //     {
  //         "id": 5,
  //         "price": 40,
  //         "name": "PRADA P8750",
  //         "url": "./glassesImage/v5.png",
  //         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  //     },
  //     {
  //         "id": 6,
  //         "price": 60,
  //         "name": "PRADA P9700",
  //         "url": "./glassesImage/v6.png",
  //         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  //     },
  //     {
  //         "id": 7,
  //         "price": 80,
  //         "name": "FENDI F8750",
  //         "url": "./glassesImage/v7.png",
  //         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  //     },
  //     {
  //         "id": 8,
  //         "price": 100,
  //         "name": "FENDI F8500",
  //         "url": "./glassesImage/v8.png",
  //         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  //     },
  //     {
  //         "id": 9,
  //         "price": 60,
  //         "name": "FENDI F4300",
  //         "url": "./glassesImage/v9.png",
  //         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  //     }
  // ]
  state = {
    imgSrc: "./img/GlassesImage/v1.png"
  };

  changeColor = (color) => {
    this.setState({
      imgSrc: `./img/GlassesImage/${color}.png`
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4" style={{position:'relative'}}>
            <img src="./img/GlassesImage/model.jpg" alt="..."></img>
            <div className="" style={{bottom: 346, left:732,position:'absolute'}}>
              <img style={{width:'70%'}} src={this.state.imgSrc} alt="..."></img>
            </div>
          </div>
          <div className="col-8">
            <img
              src="./img/GlassesImage/v1.png"
              alt="..."
              onClick={() => this.changeColor("v1")}
            ></img>
            <img
              src="./img/GlassesImage/v2.png"
              alt="..."
              onClick={() => this.changeColor("v2")}
            ></img>
            <img
              src="./img/GlassesImage/v3.png"
              alt="..."
              onClick={() => this.changeColor("v3")}
            ></img>
            <img
              src="./img/GlassesImage/v4.png"
              alt="..."
              onClick={() => this.changeColor("v4")}
            ></img>
            <img
              src="./img/GlassesImage/v5.png"
              alt="..."
              onClick={() => this.changeColor("v5")}
            ></img>
            <img
              src="./img/GlassesImage/v6.png"
              alt="..."
              onClick={() => this.changeColor("v6")}
            ></img>
            <img
              src="./img/GlassesImage/v7.png"
              alt="..."
              onClick={() => this.changeColor("v7")}
            ></img>
            <img
              src="./img/GlassesImage/v8.png"
              alt="..."
              onClick={() => this.changeColor("v8")}
            ></img>
            <img
              src="./img/GlassesImage/v9.png"
              alt="..."
              onClick={() => this.changeColor("v9")}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
