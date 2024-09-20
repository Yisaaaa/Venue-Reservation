import { MouseEventHandler } from "react";

const Button = ({
  text,
  className,
  handleClick,
}: {
  text: String;
  className?: String;
  handleClick?: MouseEventHandler;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`${
        className ? className : ""
      } font-bold rounded text-sm px-4 py-1`}
    >
      {text}
    </button>
  );
};

export const ButtonSolid = ({
  text,
  className,
  handleClick,
}: {
  text: String;
  className?: String;
  handleClick: MouseEventHandler;
}) => {
  return (
    <Button
      text={text}
      className={`${className ? className : ""} bg-slate-950 text-white`}
      handleClick={handleClick}
    />
  );
};

export const ButtonOutline = ({
  text,
  className,
  handleClick,
}: {
  text: String;
  className?: String;
  handleClick?: MouseEventHandler;
}) => {
  return (
    <Button
      text={text}
      className={`${
        className ? className : ""
      } bg-white text-slate-600 border-2 border-slate-300`}
      handleClick={handleClick}
    />
  );
};
