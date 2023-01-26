import PropsTypes from "prop-types";

export const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      <h2>{title}</h2>
      <h6> {subtitle}</h6>
    </>
  );
}

FirstApp.propTypes = {
  title: PropsTypes.string.isRequired,
  subtitle: PropsTypes.string.isRequired,
}

FirstApp.defaultProps = {
  subtitle: 'Template del subtitulo',
  title: 'Template del titulo',
}