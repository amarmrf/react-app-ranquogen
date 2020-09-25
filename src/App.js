import React from 'react';
import QuoGen from "./components/QuoGen"
import lodash from "lodash";
import "typeface-roboto";
import { Grid, withStyles } from "@material-ui/core"

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    alignItems: "center"
  }
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quotes:[],
      selectedQuoteIndex: null
    }
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this)
    this.anotherIndex = this.anotherIndex.bind(this)
  }

  //step x+1: populate quotes data
  componentDidMount(){
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then(quotesData=>
      quotesData.json()//return json
    )
    .then(quotesData=>{
      this.setState(
        {quotes:quotesData}, ()=>{
          this.setState({selectedQuoteIndex:this.selectQuoteIndex()})
        }
      )
    })
  }
  //populate the quotes array, then another 'callback' to call the quotes based on obtained randomized index
  //do method call (with parenthesis) because we want to return an index, not refer to a function

  //step x+2: obtain a randomized array index
  selectQuoteIndex() {
    if (!this.state.quotes.length){
      return undefined
    }
    return Math.round(lodash.random(0,(this.state.quotes.length)-1))
  }

  //step x+3: get the quote
  get selectedQuote() {
    if (!this.state.quotes.length) {return undefined}
    return this.state.quotes[this.state.selectedQuoteIndex]
  }
  //this can also work
  selQuote() {
    if (!this.state.quotes.length) {return undefined}
    return this.state.quotes[this.state.selectedQuoteIndex]
  }

  handleTweet() {
    console.log("listening")
  }

  anotherIndex() {
    this.setState({selectedQuoteIndex:this.selectQuoteIndex()})
  }
  
  render () {
  return (//step x+4: show the quote
    <Grid className={this.props.classes.container} id="quote-box" justify="center" container>
    <Grid xs={11} lg={8} item>
        <QuoGen 
        selectedQuote={this.selectedQuote} 
        anotherIndex={this.anotherIndex} 
        handleTweet={this.props.handleTweet}/>
    </Grid>
    </Grid>
  );
}
}

export default withStyles(styles)(App);
