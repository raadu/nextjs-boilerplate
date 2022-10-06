import * as NextImage from "next/image";

// Bypass Image component from NextJS to show on storybook
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

// Default parameters
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}