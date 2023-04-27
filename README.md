# pokemon-tcg-catalogue

Users can keep track of which cards they need in order to complete a particular set.

## Styling

This website makes use of Tailwind for styling.

## Pages

### Home

The home page displays the available sets that the user can use to catalog. This page makes use of the
MegaMenu.js component, which pulls data from src/menuItems.js and maps it to the MenuItems.js component.

### Catalogue

The catalogue page **must** be rerouted from the home page or the catalog page by clicking on one of the
available sets.

This page makes use of the other components in the web app:

#### Aside

The aside component requires a title property, and it is in a fixed position to the left side of the page. It will hide on small screens.

This component is used in the List component to dynamically display a list of the user's unowned cards. The user can click on a list item to jump within the page to that card.

In the future, I will add search functionality within the sidebar.

#### Canvas

The canvas component is used in the List component to show a spinning Pokeball while data is fetched and laoded from the API call.

#### ScrollButton

Credit to GeeksforGeeks: a button to go to the top of the page!

#### List

The meat and potatoes of the Catalogue page. This component gets passed the set's url tag (housed in localstorage), which it plugs into an API call to get a JSON object of cards in that set. Then, it saves the cards to local memory so that the user does not have to contact the API again (it's slow). When a user clicks on one of the displayed cards, the
number of cards they own increments, and the set is again saved to localstorage.

In the future, I would like a login system so that users' catalogs get saved to their account (Firebase?) and they can access their catalog from any browser location. This is also essential since localstorage has a data limit. Therefore, localstorage will only be used to pass the current set to the catalog page.

### NoPage

TODO: in the future, this will reroute from the Catalogue page if a set is not passed.


## Sources

[Pokemon TCG API](https://docs.pokemontcg.io/api-reference/cards/search-cards)
[Tailwind](https://tailwindcss.com/docs)
[GeeksforGeeks](https://www.geeksforgeeks.org)
[Flowbite](https://flowbite.com/docs/components/navbar/)