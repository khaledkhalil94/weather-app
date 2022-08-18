# Weather Application

A simple application to view weather status in current, and custom locations.

---

## Requirements

- Node: `v12.22.0` or later.

---

## Structure

```
 /root
  ├── components                            # Domain-specific components 
  │   └── [ComponentName]
  │      ├── [ComponentName].stories.tsx    # stories with all variants for the component
  │      ├── [ComponentName].styles.tsx     # all component-specific styles
  │      ├── index.tsx                      # main component implementation
  │      └── [ComponentName].types.tsx      # types for the component
  │
  ├── core                                  # The core application (domain) layer
  │   ├── api                               # all apis for entities
  │   ├── actions                           # this is the core of the application business logic
  │   └── store                             # data store to share data across the application
  │
  ├── design-system                         # General theme for the whole application
  │   ├── types                             # General types for main theme
  │   ├── defaultTheme                      # Default theme file, should contain any component customizations
  │   └── index                             # Main theme initialization and export
  │
  ├── pages                                 # NextJS directory for pages
  │
  └── public                                # Any static files to be used in the app
```

---

## Before Running

### All dependencies must be installed
Run `yarn` before starting.

### Add OpenWeatherData AppId
- Generate API key from https://openweathermap.org/
- Add the key to `/.env.local` file

---

## Available Scripts

In the project root directory, you can run:


### `yarn`

Installs packages

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn storybook`

Starts storybook for applications.
Open [http://localhost:3000](http://localhost:6006) to view it in the browser.

---

## Known Issues
