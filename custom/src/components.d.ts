/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '../page';

import { ImageRounded as ImageRounded } from './components/common/image-rounded/image-rounded';

interface HTMLImageRoundedElement extends ImageRounded, HTMLElement {
}
declare var HTMLImageRoundedElement: {
  prototype: HTMLImageRoundedElement;
  new (): HTMLImageRoundedElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "image-rounded": HTMLImageRoundedElement;
  }
  interface ElementTagNameMap {
      "image-rounded": HTMLImageRoundedElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "image-rounded": JSXElements.ImageRoundedAttributes;
      }
  }
  namespace JSXElements {
      export interface ImageRoundedAttributes extends HTMLAttributes {
        
          image?: string,
          config?: any
      }
  }
}

import { MainLogo as MainLogo } from './components/common/main-logo/main-logo';

interface HTMLMainLogoElement extends MainLogo, HTMLElement {
}
declare var HTMLMainLogoElement: {
  prototype: HTMLMainLogoElement;
  new (): HTMLMainLogoElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "main-logo": HTMLMainLogoElement;
  }
  interface ElementTagNameMap {
      "main-logo": HTMLMainLogoElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "main-logo": JSXElements.MainLogoAttributes;
      }
  }
  namespace JSXElements {
      export interface MainLogoAttributes extends HTMLAttributes {
        
          image?: string
      }
  }
}

import { HeaderNetd as HeaderNetd } from './components/header-netd/header-netd';

interface HTMLHeaderNetdElement extends HeaderNetd, HTMLElement {
}
declare var HTMLHeaderNetdElement: {
  prototype: HTMLHeaderNetdElement;
  new (): HTMLHeaderNetdElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "header-netd": HTMLHeaderNetdElement;
  }
  interface ElementTagNameMap {
      "header-netd": HTMLHeaderNetdElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "header-netd": JSXElements.HeaderNetdAttributes;
      }
  }
  namespace JSXElements {
      export interface HeaderNetdAttributes extends HTMLAttributes {
        
          data?: any
      }
  }
}

