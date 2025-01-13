// TestimonialComponent.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import Testimonial from './Testimonial';
declare global {
    interface HTMLElement {
        _reactRoot?: import('react-dom/client').Root;
    }
}

const TestimonialComponent = {
    extend: 'default',
    model: {
        defaults: {
            name: 'Testimonial',
            editable: true,
            droppable: true,
            traits: [],
            components: `<div id="testimonial-section" class="gjs-grid-row">
  <div id="infwen" class="gjs-grid-column">
    <h2 id="ihap8q" class="gjs-heading">Testimonial section</h2>
    <div id="i6fjjy" class="text-main-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div id="i5k4nf" class="gjs-grid-row">
      <div id="inea73" class="gjs-grid-column testimonial-item">
        <div id="i2d7qp" class="gjs-grid-row">
          <div id="idva29" class="gjs-grid-column">
            <img
              src="https://source.unsplash.com/random/200x200/?profile,person,business"
              id="ia7pcr" />
          </div>
          <div id="i4djop" class="gjs-grid-column">
            <h4 id="iqroa4" class="gjs-heading">Full name</h4>
            <div id="iaqf2c" class="text-main-content">Role / Company</div>
          </div>
        </div>
        <div id="it3yug" class="text-main-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div id="idndjn" class="gjs-grid-column testimonial-item">
        <div id="ish0zj" class="gjs-grid-row">
          <div id="inucqu" class="gjs-grid-column">
            <img
              src="https://source.unsplash.com/random/200x200/?profile,person,business"
              id="ixzdlj" />
          </div>
          <div id="iuk8ib" class="gjs-grid-column">
            <h4 id="i04ztt" class="gjs-heading">Full name</h4>
            <div id="ia9ts3" class="text-main-content">Role / Company</div>
          </div>
        </div>
        <div id="i8gt4n" class="text-main-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  </div>
</div>
Copy to Clipboard`,
        },
    },
    view: {
        onRender(this: any) {
            const componentEl = this.el;
            if (!componentEl._reactRoot) {
                const root = createRoot(componentEl);
                componentEl._reactRoot = root;
                root.render(React.createElement(Testimonial));
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

export default TestimonialComponent;