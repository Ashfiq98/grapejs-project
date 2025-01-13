// BannerComponent.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import Banner from './Banner';
declare global {
    interface HTMLElement {
        _reactRoot?: import('react-dom/client').Root;
    }
}

const BannerComponent = {
    extend: 'default',
    model: {
        defaults: {
            name: 'Banner',
            editable: true,
            droppable: true,
            traits: [],
            components: `<div id="iz29ek" class="gjs-grid-row">
  <div id="ik2rdi" class="gjs-grid-column">
    <h2 id="i83vu9" class="gjs-heading">
      Put here your description <br />for<span id="i7owfh" class="gjs-text-blue"
        >this section</span
      >
    </h2>
    <div id="in201n" class="text-main-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.<br />
    </div>
    <a id="iwgwt5" class="gjs-button">Join Waitlist</a>
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
                root.render(React.createElement(Banner));
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

export default BannerComponent;