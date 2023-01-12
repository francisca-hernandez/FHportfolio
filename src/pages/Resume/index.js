import React from 'react';


function Resume() {
    return (
        <div className="card">
            <h3>Resume in progress...</h3>
            <img src={require("../../resume/FHresume.png")} className="card-img-top w-50 mx-auto" alt="FH resume" />
        </div>
    )
}


// import {
//     Card,
//     // CardBody,
//     CardText,
//     CardImg,
//     CardImgOverlay,
//     CardTitle,



// } from 'reactstrap'


// const Resume = () => {

//     return ( 


//         <div>
//             <Card inverse>
//                 <CardImg
//                     alt="My in Profress Resume"
//                     src="assets/images/Fhresume.png"
//                     style={{
//                         height: 1000

//                     }}
//                     width="5%"
//                 />
//                 <CardImgOverlay>
//                     <CardTitle style={{
//                         color: 'black',
//                         fontSize: '50px',
//                         fontWeight: 'bold',
//                         color: '#195c83'


//                     }}
//                         tag="h5">
//                         Hello!
//                     </CardTitle>
//                     <CardText style={{
//                         color: '#195c83',
//                         fontSize: '30px',
//                         fontWeight: 'bold',
                      

//                     }}
//                     >
//                      Resume
//                         </CardText >
//                     <CardText >
                        
//                         {/* <small className="text-muted">

//                         </small>
                        

//                         <img
//                             alt="Card image cap"
//                             src="assets/images/FHpic.jpg"
//                             style={{

//                                 width: '20%',
//                                 height: '20%'
//                             }} */}

//                         />
//                     </CardText>

//                 </CardImgOverlay>


//             </Card>


//         </div>

//     )

// };



export default Resume;