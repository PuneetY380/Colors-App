import { Component } from 'react';
import Pallete from './Pallete';
import PalleteList from './PalleteList';
import seedColors from './seedColors';
import SingleColorPallete from './SingleColorPallete';
import { generatePalette } from "./colorHelpers";
import NewPalleteForm from './NewPalleteForm';
import {Route, Switch} from 'react-router-dom';
import './App.css';


class App extends Component  {
  //console.log(generatePalette(seedColors[4]));

  findPallete(id){
    return seedColors.find(function(pallete){
      return pallete.id === id;
    });
  }
  render(){
    return (

      <Switch>
        <Route exact path='/pallete/new' render={()=> <NewPalleteForm />}/>
        <Route exact path='/' render={(routeProps)=> <PalleteList palletes= {seedColors} {...routeProps} />} ></Route>
        <Route exact path='/pallete/:id' render={(routeProps)=>(
          <Pallete pallete= {generatePalette(this.findPallete(routeProps.match.params.id))} />
        )} />
        <Route exact path='/pallete/:palleteId/:colorId' render={(routeProps)=>
          <SingleColorPallete
          colorId = {routeProps.match.params.colorId}
          pallete = {generatePalette(this.findPallete(routeProps.match.params.palleteId))}
        />}/>
      </Switch>
  
      // <div className="">
      //   <Pallete pallete ={generatePalette(seedColors[0])} />
      // </div>
    );
  }
}

export default App;
