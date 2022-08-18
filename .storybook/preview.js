import Theme from "../design-system";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story, context) => {

    return (
        <Theme>
          <div>
            <Story {...context} />
          </div>
        </Theme>
    )
  },
];
