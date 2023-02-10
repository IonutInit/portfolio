import "../styles/PortfolioElement.css";

interface PortfolioElementPropsRequired {
  elementLogo: string;
  title: string;
  description: string;
  buttonCount: number;
}

interface PortfolioElementPropsOptional {
  button1?: string | null;
  href1?: string | undefined;
  button2?: string | null;
  href2?: string | undefined;
}

interface PortfolioElementProps
  extends PortfolioElementPropsRequired,
    PortfolioElementPropsOptional {}

const defaultProps: PortfolioElementPropsOptional = {
  button1: null,
  href1: undefined,
  button2: null,
  href2: undefined,
};

const PortfolioElement = (props: PortfolioElementProps) => {
  const {
    elementLogo,
    title,
    description,
    buttonCount,
    button1,
    href1,
    button2,
    href2,
  } = props;
  return (
    <div className="portfolio-element-container">
      <h3 className="title">{title}</h3>
      <img src={elementLogo} alt="Ionut Cojocaru stylised logo" />
      <div>
        <p className="description">{description}</p>
      </div>

      <div className="button-container">
        {buttonCount >= 1 && (
          <a href={href1} target="_blank" rel="noreferrer">
            <button type="button">{button1}</button>
          </a>
        )}

        {buttonCount >= 2 && (
          <a href={href2} target="_blank" rel="noreferrer">
            <button type="button">{button2}</button>
          </a>
        )}
      </div>
    </div>
  );
};

PortfolioElement.defaultProps = defaultProps;

export default PortfolioElement;
