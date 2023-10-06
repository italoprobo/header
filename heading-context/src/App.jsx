import Heading from './pages/Heading.jsx';
import Section from './pages/Section.jsx';

export default function Page() {
  return (
    <Section>
    <Heading level={1}>Titulo</Heading>
    <Section>
      <Heading level={2}>Heading</Heading>
      <Heading level={2}>Heading</Heading>
      <Heading level={2}>Heading</Heading>
      <Section>
        <Heading level={3}>Sub-heading</Heading>
        <Heading level={3}>Sub-heading</Heading>
        <Heading level={3}>Sub-heading</Heading>
        <Section>
          <Heading level={4}>mini-heading</Heading>
          <Heading level={4}>mini-heading</Heading>
          <Heading level={4}>mini-heading</Heading>
        </Section>
      </Section>
    </Section>
  </Section>
  );
}