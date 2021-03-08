import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
export default class FloatingLabelExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Data</Label>
                            <Input />
                        </Item>
                        <Button style={{ marginTop: 25, margin: 10 }} block primary>
                            <Text>Send</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}