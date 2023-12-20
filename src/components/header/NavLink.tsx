interface Props {
  item: {
    title: string;
    url: string;
  };
}

function NavLink(props: Props) {
  return <a href={props.item.url}>{props.item.title}</a>;
}

export default NavLink;
