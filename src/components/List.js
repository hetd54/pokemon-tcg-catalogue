import React, {Component} from "react";
import Aside from "./Aside";
import Canvas from "./Canvas";
import Header from "./Header";
import { HashLink } from 'react-router-hash-link';

const API_KEY = process.env.REACT_APP_API_KEY;

export default class List extends Component<{ setId: string }>{
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      name: '',
      id: '',
      set: '',
      image: '',
      totalCards: 0,
      marketPrice: '',
      owned: 'No'
    };
    this.numberOwned = 0;
    this.set = "";
    this.totalCards = 0;
    this.changeHandler = this.changeHandler.bind(this);
    this.loading = true;
   
  }
  

  componentDidMount() {
    // get all entities - GET
    if (!localStorage.getItem(`${this.props.id}-cards`)){
        console.log(this.props.id);

    
    fetch(`https://api.pokemontcg.io/v2/cards?q=set.name:${this.props.id}`
    ,{
    "method": "GET",
    "headers": {
            "X-Api-Key": API_KEY,
            "content-type": "application/json",
            "accept": "application/json"
        },
    })
    .then(response => response.json())
    .then(response => {
    this.set = this.props.id;
    this.totalCards = response.data.length;
    
    for (let i =0; i < response.data.length; i++){
    this.setState(
        (prevState) => ({
            cards: [
            ...prevState.cards,
            {
                name: response.data[i].name,
                id: response.data[i].id,
                set: response.data[i].set.name,
                image: response.data[i].images.small,
                marketPrice: '$',
                totalCards: response.data.length,
                owned: 'No'
            },
            ],
        }), () => {
          localStorage.setItem(`${this.props.id}-cards`, JSON.stringify(this.state.cards));

          this.loading = false;
        }
        );

    }
    
    })
    .catch(err => {
    console.log(err);
    });
  } else {
    
    let data = JSON.parse(localStorage.getItem(`${this.props.id}-cards`));

    this.setState( { cards: data } );

    // Count how many cards they own
    this.numberOwned = 0;
    for (let i =0; i < data.length; i++){
      if(data[i].owned === "Yes"){
        this.numberOwned++;
      }
    }
    this.totalCards = data[0].totalCards;
    this.set = data[0].set;
    this.loading = false;
  }

    
    }

  changeHandler = (event) => {
      const nam = event.target.name;
      const val = event.target.value;
      this.setState({
        [nam]: val,
    });};

    saveLocal = (changedItem) => {
      if(changedItem === "Yes"){
        this.numberOwned++;
      } else {
        this.numberOwned--;
      }
      localStorage.setItem(`${this.props.id}-cards`, JSON.stringify(this.state.cards));
    };



  render() {
    let cards = this.state.cards;
    let unowned = "block h-full w-full rounded-lg object-cover object-center hover:opacity-80";
    let owned = "block h-full w-full rounded-lg object-cover object-center opacity-50";
    let lineItem = "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";
    let textClass = "flex-1 ml-3 whitespace-nowrap";
    return (
      <div>
        
        <Aside
        title="Unowned Cards:"
        children={cards.map((item, index) => {
          return (
            <li key={index} className={item.owned=== "Yes" ? "hidden" : "visible"}>
              <HashLink to={ `#${item.id}` } className={lineItem} state={{ id: `${item.set}` }}>
              <span className={textClass}>{item.name}</span>
              </HashLink>
              
            </li>
                    );})}
                    />
        
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 sm:ml-64">
            <Header/>
          <div className={this.loading=== false ? "hidden" : "visible"}>
            <p>Loading...</p>
          <Canvas/>
          </div>
          
        <div className={this.loading=== true ? "hidden" : "visible"}>
            <div className="text-center">
              <h2 className="mb-2 mt-0 text-3xl font-medium leading-tight text-primary">Set: {this.set}</h2>
                <p>Cards Owned: {this.numberOwned}/{this.totalCards}</p>
                <button onClick={() => {
                  localStorage.clear();
                }}>Clear Storage</button>
              </div>
              <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap shadow-md md:-m-2">
                {cards.map((item, index) => {
                    return (
                      <div className="flex w-1/4 flex-wrap shadow-md" key={index}>
                      <div id={item.id} className="w-full p-1 md:p-2" >
                        <img
                          alt={item.name}
                          className={item.owned=== "No" ? unowned : owned}
                          src={item.image} 
                          onClick={() => {
                            item.owned === "No"
                              ? (item.owned = "Yes")
                              : (item.owned = "No");
                              this.saveLocal(item.owned);
                              this.forceUpdate();
    
                            }}
                          />
                      </div>
                      <div className="w-full p-1 md:p-2">
                      <button
                        onClick={() => {
                        item.owned === "No"
                          ? (item.owned = "Yes")
                          : (item.owned = "No");
                          this.saveLocal(item.owned);
                          this.forceUpdate();

                        }}
                      >
                      {item.name}
                      </button>
                      </div>
                    </div>
                    );})}
               </div>
              </div>
              </div>  
        </div>
        </div>
    );
  }
}
