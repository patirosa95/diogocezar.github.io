import React from 'react'

import ContentIndex from '../../objects/ContentIndex';

import StyledSection from './styles'

// const Section = ({ children }) => <StyledSection>{children}</StyledSection>

const Section = ({ children, number, title }) => (
  <StyledSection>
    <ContentIndex number={number} title={title} />
    {children}
  </StyledSection>
);

// const SectionTraduzida = ({ children, number, title }) => {
//   return (
//     <StyledSection>
//       <ContentIndex number={number} title={title} />
//       {children}
//     </StyledSection>
//   );
// };

export default Section

// <SectionTraduzida>
//  <ContentIndex number="4" />
//  <LeftContent />
//  <RightContent />
// </SectionTraduzida> 