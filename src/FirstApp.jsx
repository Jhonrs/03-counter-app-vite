import PropsTypes from "prop-types";

export const FirstApp = ({ title, subtitle, name }) => {
  return (
    <>
      <h2 data-testid='test-title'>{title}</h2>
      <h3> {subtitle}</h3>
      <h3> {subtitle}</h3>
      <h4> {name}</h4>
    </>
  );
};

FirstApp.propTypes = {
  title: PropsTypes.string.isRequired,
  subtitle: PropsTypes.string.isRequired,
};

FirstApp.defaultProps = {
  name: "Template del nombre",
  subtitle: "Template del subtitulo",
  /* title: "Template del titulo", */
};
