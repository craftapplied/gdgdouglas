import { For, createSignal } from 'solid-js';
import NavLink from './NavLink.tsx';

interface Props {}

interface MenuItem {
  title: string;
  url: string;
}

function Navigation() {
  const [isMenuOpen, setMenuOpen] = createSignal<boolean>(false);

  const [menuItems, setMenuItems] = createSignal<MenuItem[]>([
    // { title: 'Upcoming Events', url: '#upcoming-events' },
    // { title: 'Past Events', url: '#past-events' },
    { title: 'Organisers', url: '#organisers' },
    { title: 'Contact', url: '#contact' },
  ]);

  const toggleNavigation = () => {
    setMenuOpen(!isMenuOpen());
  };

  return (
    <>
      <div
        classList={{
          'fixed inset-0 grid isolate bg-white m-4 rounded-4 text-primary-black grid-rows-[max-content_1fr] p-8 text-center':
            isMenuOpen(),
        }}
        class="navigation-wrapper"
      >
        <button
          onClick={toggleNavigation}
          class="md:hidden"
          classList={{ 'ml-auto': isMenuOpen() }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d={
                isMenuOpen()
                  ? 'M2,2 l0,2 l18,18 l2,0 l0,-2 l-18,-18 Z'
                  : 'M2,5 l20,0 l0,2 l-20,0 Z'
              }
              fill="currentcolor"
            />
            <path
              d={isMenuOpen() ? 'M12,12 Z' : 'M2,11 l20,0 l0,2 l-20,0 Z'}
              fill="currentcolor"
            />
            <path
              d={
                isMenuOpen()
                  ? 'M2,22 l0,-2 l18,-18 l2,0 l0,2 l-18,18 Z'
                  : 'M2,17 l20,0 l0,2 l-20,0 Z'
              }
              fill="currentcolor"
            />
          </svg>
          <span class="sr-only">
            {isMenuOpen() ? 'Close navigation menu' : 'Open navigation menu'}
          </span>
        </button>

        <ul
          class=""
          classList={{
            'grid my-auto text-headline-sm sm:text-headline-lg !font-bold gap-16 p-8':
              isMenuOpen(),
            'hidden gap-8 md:flex': !isMenuOpen(),
          }}
        >
          <For each={menuItems()}>
            {(item) => (
              <li>
                <NavLink
                  item={item}
                  menuOpen={isMenuOpen}
                  setMenuOpen={setMenuOpen}
                />
              </li>
            )}
          </For>
        </ul>

        <div
          class="divider"
          classList={{
            hidden: !isMenuOpen(),
          }}
        ></div>
      </div>
    </>
  );
}

export default Navigation;
