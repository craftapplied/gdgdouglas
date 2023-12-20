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
          'fixed inset-0 grid isolate bg-white m-4 rounded-4 text-primary-black grid-rows-[max-content_1fr] p-8 text-center':
            menuOpen(),
        }}
        class="navigation-wrapper"
      >
        <button
          onClick={toggleNavigation}
          class="md:hidden"
          classList={{ 'ml-auto': menuOpen() }}
        >
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
          class=""
          classList={{
            'grid my-auto text-headline-sm sm:text-headline-lg !font-bold gap-16 p-8':
              menuOpen(),
            'hidden gap-8 md:flex': !menuOpen(),
          }}
        >
          <For each={menuItems()}>
            {(item) => (
              <li>
                <NavLink
                  item={item}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                />
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
