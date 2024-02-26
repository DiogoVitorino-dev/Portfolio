import React from 'react';

import ContactItem from './contactItem';
import { Container, Root, Title } from './styles';

import Colors from '@/constants/Colors';

interface ContactsProps {
  linkGithub?: string;
  linkLinkedIn?: string;
  email?: string;
  number?: string;
}

export default function Contacts({ email, linkGithub, linkLinkedIn, number }: ContactsProps) {
  return (
    <Root colors={[{ color: Colors.primaryComplement }, Colors.primary]}>
      <Title>Contatos</Title>
      <Container>
        <ContactItem
          icon="envelope"
          text={email}
          link={email ? `mailto:${email.trim()}` : email}
          color="primary"
        />
        <ContactItem icon="github" text="Github" link={linkGithub} color="primaryComplement" />
        <ContactItem icon="linkedin" text="LinkedIn" link={linkLinkedIn} color="primary" />
        <ContactItem
          icon="whatsapp"
          text={number}
          link={number ? `https://wa.me/${number.trim()}` : number}
          color="primaryComplement"
        />
      </Container>
    </Root>
  );
}
