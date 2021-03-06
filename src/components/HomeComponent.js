import React from 'react';
import { Card, CardImg, CardBody,  CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/BaseUrl';
import { FadeTransform } from 'react-animation-components';

const RenderCard = ({item, isLoading, errMess}) => {
    
    if(isLoading) {
        return (
            <Loading />
        );
    }

    else if(errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }

    else {
        return (
            <FadeTransform in
               transformProps={{
                   exitTransform: 'scale(0.5) translateY(-50%)'
               }}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    }
}

const home = (props) => {
 
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish}
                            isLoading={props.dishLoading}
                            errMess={props.dishErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}
                            isLoading={props.promoLoading}
                            errMess={props.promoErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}
                                isLoading={props.leaderLoading}
                                errMess={props.leaderErrMess} />
                </div>
            </div>
        </div>
    );
}

export default home;