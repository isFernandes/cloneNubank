import React from 'react';
import { View } from 'react-native';

import logo from '~/assets/Nubank_Logo.png'
import Icones from 'react-native-vector-icons';
import { Container, Logo, Topo, Title } from '~/components/Header/styles';


export default function Header() {
    return (
        <Container>
            <Topo>
                <Logo source={logo} />
                <Title>Iago Fernandes</Title>
            </Topo>
            
        </Container>
        
    );
}
