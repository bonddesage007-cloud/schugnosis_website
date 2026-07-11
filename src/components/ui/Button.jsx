function Button({
  href,
  children,
  variant = "primary",
  target,
  className = "",
}) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}

export default Button;