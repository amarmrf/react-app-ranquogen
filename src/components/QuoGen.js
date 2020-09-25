import React from "react";
//import Button from "./Button";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

class QuoGen extends React.Component{
  render() {
    return (
      <Card>
        <CardContent>
          {
            !this.props.selectedQuote? "":
            <Typography id="text">
            "{this.props.selectedQuote.quote}" - <span id="author">{this.props.selectedQuote.author}
            </span>
            </Typography>
          }
        </CardContent>
        <CardActions>
        <Button size="small" id="new-quote"  onClick={this.props.anotherIndex}>Next Quote</Button>
        <Button size="small" id="tweet-quote" href={`https://www.twitter.com/intent/tweet?text="${!this.props.selectedQuote? "":
        this.props.selectedQuote.quote}" - ${!this.props.selectedQuote? "":
        this.props.selectedQuote.author}`} target="_blank">Tweet!</Button>
        </CardActions>
      </Card>
    )
  }
}

export default QuoGen 



