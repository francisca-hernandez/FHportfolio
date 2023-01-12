import React from 'react';


import {
    Card,
    // CardBody,
    CardText,
    CardImg,
    CardImgOverlay,
    CardTitle,



} from 'reactstrap'




const About = () => {

    return ( 



        //         <Card
        //   style={{
        //     width: '18rem',
        //     height: '18rem',
        //     display: 'center',
        //     color: 'light',


        //   }}
        // >
        //   <img
        //     alt="Sample"
        //     src="assets/images/FHpic.jpg"
        //   />
        //   <CardBody>

        //     <CardText>
        //       Hello! My name is Francisca, a Fullstack Developer in the making located in the Pacific NorthWest! 
        //     </CardText>

        //   </CardBody>
        // </Card>
        //


        <div>
            <Card inverse>
                <CardImg
                    alt="Card image cap"
                    src={require("../../resume/aboutpic3.jpg")}
                    style={{
                        height: 900

                    }}
                    width="80%"
                />
                <CardImgOverlay>
                    <CardTitle style={{
                        color: 'black',
                        fontSize: '50px',
                        fontWeight: 'bold',
                        color: '#195c83'


                    }}
                        tag="h5">
                        Hello!
                    </CardTitle>
                    <CardText style={{
                        color: '#195c83',
                        fontSize: '30px',
                        fontWeight: 'bold',
                      

                    }}
                    >
                    My name is Francisca, a Fullstack Developer in the making located in the Pacific NorthWest! 
                        </CardText >
                    <CardText >
                        
                        <small className="text-muted">

                        </small>
                        

                        <img
                            alt="Card image cap"
                            src={require("../../resume/FHpic.jpg")}
                            style={{

                                width: '20%',
                                height: '20%'
                            }}

                        />
                    </CardText>

                </CardImgOverlay>


            </Card>


        </div>

    )

};



export default About;