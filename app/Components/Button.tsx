type ButtonProps = {
  text: string;
  className: string;
  id: string;
}

const Button = ({text, className, id}: ButtonProps) => {
  return (
    <a className={`${className ?? ''} cta-wrapper`}>
        <div className="cta-button group">
            <div className="bg-circle"/>
            <p className="text">
                {text}
            </p>
            <div className="arrow-wrapper">
                <img src="/Images/arrow-down.svg" alt="arrow"></img>
            </div>
        </div>
    </a>
  )
}

export default Button