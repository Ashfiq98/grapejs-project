// HeroComponent.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import Hero from './Hero';
declare global {
    interface HTMLElement {
        _reactRoot?: import('react-dom/client').Root;
    }
}

const HeroComponent = {
    extend: 'default',
    model: {
        defaults: {
            name: 'Hero',
            editable: true,
            droppable: true,
            traits: [],
            components: `  <div id="irz7b" class="gjs-grid-row">
  <div id="iycz3" class="gjs-grid-column">
    <h1 id="irjua" class="gjs-heading">
      Insert Hero <span id="i4jn1p" class="gjs-text-blue">text here</span>
    </h1>
    <div id="itndw" class="text-main-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.<br />
    </div>
    <a id="iar3s" class="gjs-button">Join Waitlist</a
    ><img
      id="i3vvs"
      src="https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800&amp;dpr=2" />
  </div>
</div>`,
        },
    },
    view: {
        onRender(this: any) {
            const componentEl = this.el;
            if (!componentEl._reactRoot) {
                const root = createRoot(componentEl);
                componentEl._reactRoot = root;
                root.render(React.createElement(Hero));
            }
        },
        remove(this: any) {
            if (this.el._reactRoot) {
                this.el._reactRoot.unmount();
            }
            return this;
        },
    },
};

export default HeroComponent;