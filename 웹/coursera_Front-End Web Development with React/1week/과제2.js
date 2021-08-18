import React, { Component } from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


export default class Menu extends Component{

    constructor(props){

        super(props);

        this.state = {
            selectedDish : null
        }

    }

    onDishSelect(dish){
        this.setState({selectedDish : dish});
    }

    renderDish(dish){

        if(dish!=null){
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return (
                <div></div> //nothing but everything..!
             );
        }
    }


    render(){

    const menu= this.props.dishes.map((ele)=>{
        return(
                //list 같은거 작성시 key가 필요하다. 
                <div key={ele.id} className="col-12 col-md-5 m-1">

                    <Card onClick={()=>{this.onDishSelect(ele)}}>
                        <CardImg width="100%" src={ele.image} alt={ele.name}/>
                      
                        <CardImgOverlay>
                            <CardTitle>{ele.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
        )
    });

    return(
        <div className="container">

            <div className="row">
                    {menu}
            </div>

            <div className="row">
                {this.renderDish(this.state.selectedDish)}
            </div>

        </div>
    );
}

}
