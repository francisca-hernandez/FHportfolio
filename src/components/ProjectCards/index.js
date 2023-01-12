// import React from 'react'


// //Imports from reactstrap

// import {
//     Card,
//     CardBody,
//     CardTitle,
//     CardSubtitle,
//     CardText,
//     CardGroup,
//     CardImg,
//     NavLink,

// } from 'reactstrap'

// const ProjectCards = () => {

//     return (

//         <CardGroup>

//             {/* Project 1 Card */} 
//             <Card>
//                 <CardImg
//                     alt="Card image cap"
//                     src='assets/images/CampMe.png'
//                     top
//                     width="100%"
//                     align
//                 />
//                 <CardBody> 
//                     <CardTitle style={{
//                         color: "#195c83",
//                         fontWeight: "bold",

//                     }}
//                         tag="h5">
//                         CampMeOutside
//                     </CardTitle>
//                     <CardSubtitle
//                         className="mb-2 text-muted"
//                         tag="h6"
//                     >
//                         Project 1
//                     </CardSubtitle>
//                     <CardText>
//                         Campsite locator and fireside story generator.
//                         Save all of your favorite Campsites and stories.
//                     </CardText>
//                     <NavLink href="https://github.com/francisca-hernandez/Camp-Me-Outside">Click here to view on Github</NavLink>

//                 </CardBody>
//             </Card>
//             <Card>
//                 <CardImg
//                     alt="Card image cap"
//                     src="assets/images/Mind.png"
//                     top
//                     width="100%"
//                 />

//                 {/* Project 2 Card */}
//                 <CardBody>
//                     <CardTitle style={{
//                         color: "#195c83",
//                         fontWeight: "bold",

//                     }}tag="h5">
//                         Mind Over Matter
//                     </CardTitle>
//                     <CardSubtitle
//                         className="mb-2 text-muted"
//                         tag="h6"
//                     >
//                         Project 2
//                     </CardSubtitle>
//                     <CardText>
//                         Mental health and wellness tracking application. Includes mental health resources, a daily tracker and prompts you can use to log entries associated with moods for that moment.                    </CardText>
//                     <NavLink href="https://github.com/francisca-hernandez/Mind-Over-Matter">Click here to view on Github</NavLink>
//                 </CardBody>
//             </Card>

//             {/* Project 3 Card */}
//             <Card>
//                 <CardImg
//                     alt="Card image cap"
//                     src="assets/images/HiddenGems.png"
//                     top
//                     width="100%"
//                 />
//                 <CardBody>
//                     <CardTitle style={{
//                         color: "#195c83",
//                         fontWeight: "bold",

//                     }} tag="h5">
//                         Hidden Gems
                    
//                     </CardTitle>
//                     <CardSubtitle
//                         className="mb-2 text-muted"
//                         tag="h6" 
//                         >Project 3
//                     </CardSubtitle>
//                     <CardText>
//                         An app to be able to login and document and save the "hidden gems" you find in oregon to be able to keep for yourself or share with others.    </CardText>

//                     <NavLink href="https://github.com/francisca-hernandez/Mind-Over-Matter">Click here to view on Github</NavLink>


//                 </CardBody>
//             </Card>
//         </CardGroup>
//     )
// };

// export default ProjectCards;

import React from 'react'


//Imports from reactstrap

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardGroup,
    CardImg,
    NavLink,

} from 'reactstrap'

const ProjectCards = () => {

    return (

        <CardGroup>

            {/* Project 1 Card */} 
            <Card>
                <CardImg
                    alt="Camp Me Outside Project"
                    // src="assets/images/CampMe.png" 
                    top
                    width="100%"
                    align
                />
                <CardBody> 
                    <CardTitle style={{
                        color: "#195c83",
                        fontWeight: "bold",

                    }}
                        tag="h5">
                        CampMeOutside
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Project 1
                    </CardSubtitle>
                    <CardText>
                        Campsite locator and fireside story generator.
                        Save all of your favorite Campsites and stories.
                    </CardText>
                    <NavLink href="https://github.com/francisca-hernandez/Camp-Me-Outside">Click here to view on Github</NavLink>

                </CardBody>
            </Card>
            <Card>
                <CardImg
                    alt="Mind over Matter Project"
                    src="assets/images/Mind.png"
                    top
                    width="100%"
                />

                {/* Project 2 Card */}
                <CardBody>
                    <CardTitle style={{
                        color: "#195c83",
                        fontWeight: "bold",

                    }}tag="h5">
                        Mind Over Matter
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Project 2
                    </CardSubtitle>
                    <CardText>
                        Mental health and wellness tracking application. Includes mental health resources, a daily tracker and prompts you can use to log entries associated with moods for that moment.                    </CardText>
                    <NavLink href="https://github.com/francisca-hernandez/Mind-Over-Matter">Click here to view on Github</NavLink>
                </CardBody>
            </Card>

            {/* Project 3 Card */}
            <Card>
                <CardImg
                    alt="Hidden Gems Project"
                    img src="assets/images/HiddenGems.png" 
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle style={{
                        color: "#195c83",
                        fontWeight: "bold",

                    }} tag="h5">
                        Hidden Gems
                    
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6" 
                        >Project 3
                    </CardSubtitle>
                    <CardText>
                        An app to be able to login and document and save the "hidden gems" you find in oregon to be able to keep for yourself or share with others.    </CardText>

                    <NavLink href="https://github.com/francisca-hernandez/Mind-Over-Matter">Click here to view on Github</NavLink>


                </CardBody>
            </Card>
        </CardGroup>
    )
};

export default ProjectCards;