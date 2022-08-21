import React from 'react'
import { ContactDiv } from '../styles/ContactStyle';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';

const Contact = () => {
  return (
    <ContactDiv data-aos="fade" data-aos-duration="2000">
        <ContactLeft/>
        <ContactRight/>
    </ContactDiv>
  )
}

export default Contact