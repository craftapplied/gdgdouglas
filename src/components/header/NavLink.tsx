import type { Accessor, Setter } from 'solid-js';

interface Props {
  item: {
    title: string;
    url: string;
  };
  menuOpen: Accessor<boolean>;
  setMenuOpen: Setter<boolean>;
}

function NavLink(props: Props) {
  const click = () => {
    if (props.menuOpen()) {
      props.setMenuOpen(false);
    }
  };

  return (
    <a href={props.item.url} onClick={click}>
      {props.item.title}
    </a>
  );
}

export default NavLink;
