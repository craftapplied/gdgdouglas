import { For, createSignal } from 'solid-js';
import NavLink from './NavLink.tsx';

interface Props {}

interface MenuItem {
  title: string;
  url: string;
}

function Navigation() {
  const [menuOpen, setMenuOpen] = createSignal<boolean>(false);

  const [menuItems, setMenuItems] = createSignal<MenuItem[]>([
    { title: 'Upcoming Events', url: '#upcoming-events' },
    { title: 'Past Events', url: '#past-events' },
    { title: 'Organisers', url: '#organisers' },
  ]);

  const toggleNavigation = () => {
    setMenuOpen(!menuOpen());
  };

  return (
    <>
      <div
        classList={{
          'fixed inset-0 grid isolate': menuOpen(),
        }}
        class="navigation-wrapper"
      >
        <button onClick={toggleNavigation} class="md:hidden">
          <span
            class="open-menu-wrapper"
            classList={{
              hidden: menuOpen(),
              '': !menuOpen(),
            }}
          >
            Open icon
            <span class="sr-only">Open navigation menu</span>
          </span>
          <div
            class="close-menu-wrapper"
            classList={{
              '': menuOpen(),
              hidden: !menuOpen(),
            }}
          >
            Close icon
            <span class="sr-only">Close navigation menu</span>
          </div>
        </button>

        <ul
          class="flex gap-8"
          classList={{
            '': menuOpen(),
            'hidden md:flex': !menuOpen(),
          }}
        >
          <For each={menuItems()}>
            {(item) => (
              <li>
                <NavLink item={item} />
              </li>
            )}
          </For>
        </ul>

        <div
          class="divider"
          classList={{
            hidden: !menuOpen(),
          }}
        ></div>
      </div>
    </>
  );
}

export default Navigation;
