function Card({
  className = "",
  children,
  as: Component = "div",
}) {
  return (
    <Component className={`card ${className}`}>
      {children}
    </Component>
  );
}

export default Card;