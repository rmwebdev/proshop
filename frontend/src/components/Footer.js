import React from 'react'
import { Container , Row , Col} from 'react-bootstrap'


const Footer = () => {
return <footer> 
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    Copyright &copy; Demo Shop 2021 Using React Monggo DB
                </Col>
            </Row>
        </Container>
       </footer>
    
}

export default Footer
