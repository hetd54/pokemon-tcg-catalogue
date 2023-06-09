import React, {Component} from "react";
import Aside from "./Aside";
import Canvas from "./Canvas";
import Header from "./Header";

const API_KEY = process.env.REACT_APP_API_KEY;

// formatting for price
const formatting_options = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default class List extends Component<{ setId: string }>{
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      name: '',
      id: '',
      set: '',
      setlogo: '',
      printLocation: 0,
      setPrinted: 0,
      image: '',
      totalCards: 0,
      marketPrice: '',
      owned: 'No',
      priceChecked: '',
      tcgUrl: ''
    };
    this.numberOwned = 0;
    this.set = "";
    this.totalCards = 0;
    this.changeHandler = this.changeHandler.bind(this);
    this.loading = true;
    this.newPrice = '';
  }
  

  componentDidMount() {
    
    // get all entities - GET
    if (!localStorage.getItem(`${this.props.id}-cards`)){
        console.log(this.props.id);
      //set formatting for pricing
      

    
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

      if(response.data[i].tcgplayer === undefined){
        console.log(response.data[i].id, response.data[i].name, response.data[i].set);
      }
      let price= '';
      let updated = '';
      let url = '';
      if ((response.data[i].tcgplayer !== undefined) && (response.data[i].tcgplayer.prices !== undefined) && (response.data[i].tcgplayer.prices.normal) !== undefined){
        price = `Normal: ${formatting_options.format(response.data[i].tcgplayer.prices.normal.market)}`
        updated = response.data[i].tcgplayer.updatedAt;
        url = response.data[i].tcgplayer.url;
      } else if ((response.data[i].tcgplayer !== undefined) && (response.data[i].tcgplayer.prices !== undefined) && (response.data[i].tcgplayer.prices.holofoil) !== undefined){
        price = `Holo: ${formatting_options.format(response.data[i].tcgplayer.prices.holofoil.market)}`
        updated = response.data[i].tcgplayer.updatedAt;
        url = response.data[i].tcgplayer.url;
      } else if ((response.data[i].tcgplayer !== undefined)  && (response.data[i].tcgplayer.prices !== undefined) && (response.data[i].tcgplayer.prices.reverseHolofoil) !== undefined){
        price = `Reverse Holo: ${formatting_options.format(response.data[i].tcgplayer.prices.reverseHolofoil.market)}`
        updated = response.data[i].tcgplayer.updatedAt;
        url = response.data[i].tcgplayer.url;
      }  else {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        price = "No current price information available."
        updated = `${year}/${month}/${day}`;
        url =''
      }
    this.setState(
        (prevState) => ({
            cards: [
            ...prevState.cards,
            {
                name: response.data[i].name,
                id: response.data[i].id,
                set: response.data[i].set.name,
                setLogo: response.data[i].set.images.logo,
                printLocation: i+1,
                setPrinted: response.data[i].set.printedTotal,
                image: response.data[i].images.small,
                totalCards: response.data.length,
                owned: 'No',
                marketPrice: price,
                priceChecked: updated,
                tcgUrl: url
                
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

  // For owned cards
  changeHandler = (event) => {
      const nam = event.target.name;
      const val = event.target.value;
      this.setState({
        [nam]: val,
    });};

    saveLocal = (changedItem) => {
      if(changedItem === "Yes"){
        this.numberOwned++;
      } else if (changedItem === "No") {
        this.numberOwned--;
      }
      localStorage.setItem(`${this.props.id}-cards`, JSON.stringify(this.state.cards));
    };

    // Get price for specific card
    refreshPrice(id) {

    const getPrice = fetch(`https://api.pokemontcg.io/v2/cards/${id}`
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
      
      let price = '';
      if ((response.data.tcgplayer !== undefined) && (response.data.tcgplayer.prices !== undefined) && (response.data.tcgplayer.prices.normal) !== undefined){
        price = `Normal: ${formatting_options.format(response.data.tcgplayer.prices.normal.market)}`
      } else if ((response.data.tcgplayer !== undefined) && (response.data.tcgplayer.prices !== undefined) && (response.data.tcgplayer.prices.holofoil) !== undefined){
        price = `Holo: ${formatting_options.format(response.data.tcgplayer.prices.holofoil.market)}`
      } else if ((response.data.tcgplayer !== undefined)  && (response.data.tcgplayer.prices !== undefined) && (response.data.tcgplayer.prices.reverseHolofoil) !== undefined){
        price = `Reverse Holo: ${formatting_options.format(response.data.tcgplayer.prices.reverseHolofoil.market)}`
      }  else {
        price = "No current price information available."
      }
      return price;
    })

    const newPrice = async () => {
      const price = await getPrice;
      console.log(price);
      return price;
    };

    newPrice();

    }

    

    
  render() {
    let cards = this.state.cards;
    let unowned = "block h-full w-full rounded-lg object-cover object-center hover:opacity-80";
    let owned = "block h-full w-full rounded-lg object-cover object-center opacity-50";
    return (
      <div>
            <Aside
            id={this.props.id}
            title="Unowned Cards: "
            pokeList={cards}/>
        
        <div className="relative text-center flex min-h-screen flex-col overflow-hidden bg-gray-50 sm:ml-64">
            <Header/>
          <div className={this.loading=== false ? "hidden" : "visible"}>
            <p>Loading...</p>
          <Canvas/>
          </div>
          
        <div className={this.loading=== true ? "collapse" : "visible"}>
            <div className="text-center text-white bg-gray-700">
              <h2 className="mb-2 mt-0 text-3xl font-medium leading-tight text-primary text-red-600 font-bold uppercase">Set: {this.set} <img alt="" src={cards.setLogo}/></h2>
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
                      <p>{item.name}</p>
                      <p className="text-sm"><a href={item.tcgUrl} target="_blank">{item.marketPrice}</a></p>
                      <p className="text-xs">Last updated: {item.priceChecked}</p>
                      <button
                      className="text-xs text-red-600"
                      onClick={() => {
                        const date = new Date();
                        let day = date.getDate();
                        let month = date.getMonth() + 1;
                        let year = date.getFullYear();
                        item.marketPrice = this.refreshPrice(item.id);
                        item.priceChecked = `${year}/${month}/${day}`;
                          this.saveLocal(item.marketPrice);
                          this.forceUpdate();

                        }}
                        >
                        Refresh Price
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
