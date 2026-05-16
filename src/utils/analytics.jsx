import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-597WX1FZ77");
};

export const trackEvent = ({
  category,
  action,
  label,
}) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};