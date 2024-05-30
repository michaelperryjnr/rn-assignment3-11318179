# 11318179
Tettey Michael Perry



# Component Descriptions

## `searchBar.jsx`

The `SearchBar` component provides a user interface for entering search queries. It includes:
- A text input field for the user to type their search term.
- An icon representing the search action.
- An optional filter button that can be used to refine search results further.

### Usage:
```jsx
import { SearchBar } from './components';

<SearchBar
  placeholder="Search for items..."
  isFilterable={true}
  handleSearch={(text) => console.log(text)}
  handleFilter={() => console.log('Filter button pressed')}
/>
```

## `category.jsx`

The `Category` component provides a user interface categorizing tasks:
- A `title` for the category title
- A  `taskNumber` for the number of tasks
- A `categoryImage `to display an image of the category
### Usage:
```jsx
import { Category } from './components';

<Category
    title={item.title}
    taskNumber={item.tasks}
    categoryImage={item.categoryImage}
    />
```

## `ongoingTask.jsx`

The `OngoingTask` component provides a user interface categorizing tasks:
- A `taskName` to display the name of the ongoing task


### Usage:
```jsx
import { OngoingTask } from './components';

<OngoingTask 
    taskName={item} 
/>

```


## `index.js`
This exports the default components in the `components` folder to make the imports cleaner in the codebase.

## App Screenshot
<img src="./assets/images/Screenshot_2024-05-30-15-25-14-725_com.miui.videoplayer.jpg">