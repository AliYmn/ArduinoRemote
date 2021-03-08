import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import Settings from './settings';
import Custom from './custom';
import Panel from './panel';
import Voice from './voice';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            settings: true,
            custom: false,
            panel: false,
            voice: false,
        }
    }

    settingsActive() {
        this.setState({ settings: true, custom: false, panel: false, voice: false })
    }
    customActive() {
        this.setState({ settings: false, custom: true, panel: false, voice: false })
    }
    panelActive() {
        this.setState({ settings: false, custom: false, panel: true, voice: false })
    }
    voiceActive() {
        this.setState({ settings: false, custom: false, panel: false, voice: true })
    }

    returnComp() {
        if (this.state.settings) {
            return <Settings />
        }
        else if (this.state.custom) {
            return <Custom />
        }
        else if (this.state.panel) {
            return <Panel />
        }
        else {
            // voice
            return <Voice />
        }
    }

    render() {
        return (
            <Container>
                <Header >
                    <Button vertical active>
                        <Text>Bluetooth Remote Control</Text>
                    </Button>
                </Header>
                <Content>
                    {this.returnComp()}
                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical active={this.state.settings} onPress={() => this.settingsActive()}>
                            <Icon name="settings" />
                            <Text>Settings</Text>
                        </Button>
                        <Button vertical active={this.state.custom} onPress={() => this.customActive()}>
                            <Icon name="send" />
                            <Text>Custom</Text>
                        </Button>
                        <Button vertical active={this.state.panel} onPress={() => this.panelActive()}>
                            <Icon active name="game-controller" />
                            <Text>Panel</Text>
                        </Button>
                        <Button vertical active={this.state.voice} onPress={() => this.voiceActive()}>
                            <Icon name="mic" />
                            <Text>Voice</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}
export default App;