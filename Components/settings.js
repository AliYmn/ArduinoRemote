import React, { Component } from 'react';
import { Button, Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
export default class CheckBoxExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Button block success>
                        <Text>Bluetooth Status : Open</Text>
                    </Button>
                    <ListItem>
                        <Body>
                            <Text>Device 1</Text>
                        </Body>
                        <Button block success>
                            <Text>Connect</Text>
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text>Device 2</Text>
                        </Body>
                        <Button block success>
                            <Text>Connect</Text>
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text>Device 3</Text>
                        </Body>
                        <Button block success>
                            <Text>Connect</Text>
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text>Device 4</Text>
                        </Body>
                        <Button block success>
                            <Text>Connect</Text>
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text>Device 5</Text>
                        </Body>
                        <Button block success>
                            <Text>Connect</Text>
                        </Button>
                    </ListItem>
                    <Text style={{ margin: 25 }}>5 devices found</Text>
                </Content>
            </Container>
        );
    }
}