import { ICONS } from "../../constants/icons";

interface IconProps {
    /**
      * Name Icon to display
    */
    icon: string; 
    /**
      * Icon size to display
    */
    size?: number;
    /**
      * Color to icon, black deafult color 
    */
    color?: string;
    /**
      * Event click
    */
    onClick?: () => void;
    /**
     * Class to change styles , focus, hover, fill etc... 
    */
    className?: any;
  }


export const Icon = ({
    icon,
    ...props
  }: IconProps) => {

  return (
    <>
      {ICONS[icon] && 
        <svg className={props.className} onClick={props.onClick}
        width={`${props.size ? props.size : '24'}px`}
        height={`${props.size ? props.size : '24'}px`}
        viewBox="0 0 24 24"
        >
          <path
            fill={props.className ? props.className.fill : props.color}
            d={ICONS[icon]}
          ></path>
          <path fill="none" d="M0 0h24v24H0z"/>
          
        </svg>
      }
    </>
  );
};

export default Icon;