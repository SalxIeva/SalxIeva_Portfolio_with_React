import React from "react";
import Col from '../components/Col';
import Row from '../components/Row';
import Container from '../components/Container';
// display my name, 
// display my headshot or avatar
// display my statement or short description
// make sure it is engaging and representative of my professional identity
// export about
function About() {
   return (
     <div>
    <Container style={{ marginTop: 30 }}>
<Row>
  <Col size="md-12">
    <h1>About Me</h1>
  </Col>
</Row>
<Row>
  <Col size="md-12">
<p>
Hello! My name is Ieva Saldukaite and I am Front-End Developer!
</p>
  </Col>
</Row>
<Row>
    <Col size="md-12">
        <p>
        I have tried many carrers so far, including classical singing, arts, business perpectives.. At the moment I work as Head of Coffee/Manager, full time dog mom and study Front-End Development! This time I am hoping to make my last change in regards to career.
        </p>
    </Col>
</Row>
<Row>
    <Col size="md-12">
        <p>
        I am very good at quick problem solving and looking into all the details when it comes to work. There is no better feeling when you can truly be proud of the work you have done!
        </p>
    </Col>
</Row>
<Row>
    <Col size="md-12">
        <p>
        At the moment I can work with HTML, CSS, Bootstrap, Javascript, Node.js, React but little projects and constant new resources are building my knowledge bigger and bigger every day!
        </p>
    </Col>
</Row>

</Container>
    
        </div>
   )
}

export default About;