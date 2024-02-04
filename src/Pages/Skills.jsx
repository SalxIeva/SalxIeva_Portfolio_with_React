import React from "react";
import Col from "../components/Col/index.jsx";
import Row from "../components/Row/index.jsx";
import Container from "../components/Container/index.jsx";
// list my technical and soft skills
// might add icons or progress bars for visual representation of my skills
// export skills

function Skills() {
    return (
        <div>
       <Container style={{ marginTop: 30 }}>
   <Row>
     <Col size="md-12">
       <h1>My skills</h1>
     </Col>
   </Row>
   <Row>
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
   </Row>
   </Container>
       
           </div>
      )
}

export default Skills;