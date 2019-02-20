import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent.js';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/Dishes';
import { COMMENTS } from '../shared/Comments';
import { PROMOTIONS } from '../shared/Promotions';
import { LEADERS } from '../shared/Leaders';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import { Route, Switch, Redirect } from 'react-router-dom';




class Main extends Component {

  state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
        // selectedDish: null
    }
 
  // onDishSelect = (dish) => {
  //       this.setState({selectedDish: dish});
  //   }

  render() {
    const HomePage = () => {
       return (
          <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]} 
                leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
       );
    }

    const DishWithId = ({match}) => {
      return (
        <DishDetail selectDish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}/>
      );
    }

    return (
      <div>
       <Header />
       <Switch>
         <Route path="/home" component={HomePage} />
         <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
         <Route path="/menu/:dishId" component={DishWithId} />
         <Route exact path="/contactus" component={Contact} />
         <Redirect to="/home" />
       </Switch>
       <Footer />
      </div>
    );
  }
}

export default Main;
