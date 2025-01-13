// FeatureGridComponent.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import FeatureGrid from './FeatureGrid';
declare global {
    interface HTMLElement {
        _reactRoot?: import('react-dom/client').Root;
    }
}

const FeatureGridComponent = {
    extend: 'default',
    model: {
        defaults: {
            name: 'Feature Grid',
            editable: true,
            droppable: true,
            traits: [],
            components: `<div id="ioyxg" class="gjs-grid-row">
  <div id="i8w4i" class="gjs-grid-column">
    <h4 id="ihs4lb" class="gjs-heading gjs-text-blue">More Features</h4>
    <h2 id="iiacm" class="gjs-heading">
      Put here the text describing why your features are<span
        id="icxfor"
        class="gjs-text-blue"
        >so amazing</span
      >
    </h2>
    <div id="ia21sa" class="text-main-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div id="ixzh1" class="gjs-grid-row">
      <div id="ilpi3" class="gjs-grid-column feature-item">
        <div
          data-type-icon="true"
          id="ipmqo6"
          class="gjs-icon gjs-feature-icon">
          <svg viewBox="0 0 24 24">
            <path
              d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z"></path>
          </svg>
        </div>
        <h3 id="in9ef" class="gjs-heading">Feature text</h3>
        <div id="i8isa" class="text-main-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div id="ic57kq" class="gjs-grid-column feature-item">
        <div
          data-type-icon="true"
          id="ibdusm"
          class="gjs-icon gjs-feature-icon">
          <svg viewBox="0 0 24 24">
            <path
              d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z"></path>
          </svg>
        </div>
        <h3 id="ica43q" class="gjs-heading">Feature text</h3>
        <div id="ickn3f" class="text-main-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div id="idv32l" class="gjs-grid-column feature-item">
        <div
          data-type-icon="true"
          id="ipmept"
          class="gjs-icon gjs-feature-icon">
          <svg viewBox="0 0 24 24">
            <path
              d="M16 9h3l-5 7m-4-7h4l-2 8M5 9h3l2 7m5-12h2l2 3h-3m-5-3h2l1 3h-4M7 4h2L8 7H5m1-5L2 8l10 14L22 8l-4-6H6z"></path>
          </svg>
        </div>
        <h3 id="ieu6p6" class="gjs-heading">Feature text</h3>
        <div id="izqkf7" class="text-main-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
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
                root.render(React.createElement(FeatureGrid));
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

export default FeatureGridComponent;