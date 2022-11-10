interface HeaderProps {
  name: string;
}

export const Header = ({ name }: HeaderProps): JSX.Element => {
  return <div>Hi {name}</div>;
};
