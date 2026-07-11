import Container from "./Container";

function Section({
  id,
  className = "",
  children,
}) {
  return (
    <section id={id} className={className}>
      <Container>
        {children}
      </Container>
    </section>
  );
}

export default Section;