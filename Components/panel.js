import React, { Component } from 'react';
import { Container, Button, Text, Icon } from 'native-base';
import { Col, Row } from 'react-native-easy-grid';
export default class LayoutExample extends Component {
    render() {
        return (
            <Container>
                <Col style={{ marginTop: 200 }}>
                    <Button style={{ alignSelf: "center", margin: 3 }} iconRight light>
                        <Text>Next</Text>
                        <Icon name='arrow-up' />
                    </Button>
                    <Row style={{ alignSelf: "center" }}>

                        <Button style={{ margin: 3 }} iconLeft light>
                            <Icon name='arrow-back' />
                            <Text>Right</Text>
                        </Button>

                        <Button style={{ margin: 3 }} iconLeft light>
                            <Text>Down</Text>
                            <Icon name='arrow-down' />
                        </Button>

                        <Button style={{ margin: 3 }} iconLeft light>
                            <Text>Left</Text>
                            <Icon name='arrow-forward' />
                        </Button>
                    </Row>
                </Col>
            </Container>
        );
    }
}