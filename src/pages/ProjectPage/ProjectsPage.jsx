// create a container for project components
// render project components based on the JSON data of my projects
// ensure it is easy to navigate through them and well organized
// export projectspage

import React from "react";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Container from "../../components/Container";

function ProjectsPage() {
    return (
        <div>
       <Container style={{ marginTop: 30 }}>
   <Row>
     <Col size="md-12">
       <h1>My Projects</h1>
     </Col>
   </Row>
   {/* <Row>
     <Col size="md-12">
   <p>
   How to build accessible, responsive websites whilst using different programming languages.!
   </p>
     </Col>
   </Row>
   <Row>
       <Col size="md-12">
           <p>
           How to use web development frameworks.
           </p>
       </Col>
   </Row>
   <Row>
       <Col size="md-12">
           <p>
           Project managing.
           </p>
       </Col>
   </Row>
   <Row>
       <Col size="md-12">
           <p>
           Foundation and logical thinking for communicating with programing languages.
           </p>
       </Col>
   </Row>
   <Row>
       <Col size="md-12">
           <p>
           Testing and debugging.
           </p>
       </Col>
   </Row> */}
   </Container>
       
           </div>
    )
}

export default ProjectsPage;