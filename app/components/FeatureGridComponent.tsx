// FeatureGridComponent.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
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
          styles : `

.text-main-content {
	line-height: 30px;
	font-size: 1.2rem;
}

#iau9 {
	font-family: Arial, Helvetica, sans-serif;
	background-image: linear-gradient(180deg, rgba(59, 130, 245, 0.11), white 14%);
	background-position: 0px 0px;
	background-size: 100% 100%;
	background-repeat: repeat;
	background-attachment: scroll;
	background-origin: padding-box;
	color: #475569;
}

#in9ef {
	font-size: 1.5rem;
}

#i8isa {
	padding: 10px;
	padding-left: 0px;
	padding-right: 0px;
}

#i8w4i {
	max-width: 1200px;
	display: flex;
	flex-direction: column;
}

#ioyxg {
	justify-content: center;
	padding-top: 80px;
	padding-bottom: 80px;
	padding-left: 20px;
	padding-right: 20px;
}

#iiacm {
	font-size: 2.5rem;
	margin-bottom: 10px;
	max-width: 750px;
}

#ixzh1 {
	width: 100%;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: 50px;
}

.gjs-grid-column.feature-item {
	padding-top: 15px;
	padding-right: 15px;
	padding-bottom: 15px;
	padding-left: 15px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	min-width: 30%;
}

#ia21sa {
	padding: 10px;
	max-width: 750px;
	margin-bottom: 70px;
	padding-left: 0px;
	padding-right: 0px;
}

.gjs-grid-column.testimonial-item {
	padding-top: 15px;
	padding-right: 15px;
	padding-bottom: 15px;
	padding-left: 15px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	min-width: 45%;
	background-color: rgba(247, 247, 247, 0.23);
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;
	align-items: flex-start;
	border-top-width: 1px;
	border-right-width: 1px;
	border-bottom-width: 1px;
	border-left-width: 1px;
	border-top-style: solid;
	border-right-style: solid;
	border-bottom-style: solid;
	border-left-style: solid;
	border-top-color: rgba(0, 0, 0, 0.06);
	border-right-color: rgba(0, 0, 0, 0.06);
	border-bottom-color: rgba(0, 0, 0, 0.06);
	border-left-color: rgba(0, 0, 0, 0.06);
}

.gjs-text-blue {
	color: rgb(36, 99, 235);
}

.gjs-icon {
	display: inline-block;
	text-decoration: none;
	color: inherit;
	vertical-align: middle;
	fill: currentColor;
	width: 50px;
	height: 50px;
}

#ihs4lb {
	font-size: 1.2rem;
	margin-bottom: 15px;
}

.gjs-icon.gjs-feature-icon {
	padding-top: 10px;
	padding-right: 10px;
	padding-bottom: 10px;
	padding-left: 10px;
	background-color: rgb(36, 99, 235);
	color: white;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
}

#ieu6p6 {
	font-size: 1.5rem;
}

#izqkf7 {
	padding: 10px;
	padding-left: 0px;
	padding-right: 0px;
}

#ica43q {
	font-size: 1.5rem;
}

#ickn3f {
	padding: 10px;
	padding-left: 0px;
	padding-right: 0px;
}

@media (max-width:992px) {
	.gjs-grid-row {
		flex-direction: column;
	}
}`
      },
    }
    // },
    // view: {
    //     onRender(this: any) {
    //         const componentEl = this.el;
    //         if (!componentEl._reactRoot) {
    //             const root = createRoot(componentEl);
    //             componentEl._reactRoot = root;
    //             root.render(React.createElement(FeatureGrid));
    //         }
    //     },
    //     remove(this: any) {
    //         if (this.el._reactRoot) {
    //             this.el._reactRoot.unmount();
    //         }
    //         return this;
    //     },
    // },
};

export default FeatureGridComponent;