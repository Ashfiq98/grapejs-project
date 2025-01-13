// FeatureLeftComponent.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import FeatureLeft from './FeatureLeft';
declare global {
    interface HTMLElement {
        _reactRoot?: import('react-dom/client').Root;
    }
}

const FeatureLeftComponent = {
    extend: 'default',
    model: {
        defaults: {
            name: 'Feature Left',
            editable: true,
            droppable: true,
            traits: [],
            components: `<div id="feature-section" class="gjs-grid-row">
  <div id="imymf" class="gjs-grid-column">
    <div id="ib541" class="gjs-grid-row">
      <div id="iz8m8" class="gjs-grid-column">
        <h4 id="ij2gh" class="gjs-heading gjs-text-blue">Feature One text</h4>
        <h2 id="ism014" class="gjs-heading">Feature Text</h2>
        <div id="igrx8" class="text-main-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <a id="iqx3z1" class="gjs-button">Getting Started</a>
      </div>
      <div id="iepks" class="gjs-grid-column">
        <img
          src="https://images.pexels.com/photos/2121640/pexels-photo-2121640.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=500&amp;dpr=2"
          id="i466d" />
      </div>
    </div>
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
                root.render(React.createElement(FeatureLeft));
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

export default FeatureLeftComponent;