const GradientText = ({ children, style = "green" }) => {
  const gradientStyles = {
    green: {
      background:
        "radial-gradient(101.96% 105.42% at 0% 0%, #2CFF8B 0.5%, #262626 81.65%)",
      className: "text-3xl font-semibold",
    },
    gray: {
      background:
        "radial-gradient(48.44% 187.46% at 50% 50%, #444444 64.43%, rgba(0, 0, 0, 0.4) 96.15%)",
      className: "text-3xl font-extrabold",
      color: "transparent",
    },
  };

  const selectedStyle = gradientStyles[style] || gradientStyles.green;

  return (
    <h1
      className={selectedStyle.className}
      style={{
        ...selectedStyle,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </h1>
  );
};

export default GradientText;
