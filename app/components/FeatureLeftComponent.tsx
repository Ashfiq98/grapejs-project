// FeatureLeftComponent.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
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
            styles: `* {
	box-sizing: border-box;
}

body {
	margin: 0;
}

.gjs-heading {
	margin: 0;
	color: rgba(29, 40, 55, 1);
}

.gjs-grid-column {
	flex: 1 1 0%;
	padding: 5px 0;
}

.gjs-grid-row {
	display: flex;
	justify-content: flex-start;
	align-items: stretch;
	flex-direction: row;
	min-height: auto;
	padding: 10px 0;
}

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

#ij2gh {
	font-size: 1.2rem;
	margin-bottom: 15px;
}

#igrx8 {
	padding: 10px;
	max-width: 750px;
	margin-bottom: 25px;
	padding-left: 0px;
	padding-right: 0px;
}

#i466d {
	color: black;
	border-top-left-radius: 35px;
	border-top-right-radius: 35px;
	border-bottom-right-radius: 35px;
	border-bottom-left-radius: 35px;
	max-width: 100%;
}

#imymf {
	max-width: 1200px;
	align-items: center;
	display: flex;
	flex-direction: column;
}

#feature-section {
	justify-content: center;
	padding-top: 80px;
	padding-bottom: 80px;
	padding-left: 20px;
	padding-right: 20px;
}

#ib541 {
	gap: 100px;
	justify-content: space-between;
}

#iz8m8 {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
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

.gjs-button {
	vertical-align: top;
	max-width: 100%;
	display: inline-block;
	text-decoration: none;
	color: white;
	padding-right: 15px;
	padding-bottom: 10px;
	padding-left: 15px;
	background-color: rgb(36, 99, 235);
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;
	padding-top: 10px;
	font-size: 1.1rem;
	text-align: center;
}

.gjs-text-blue {
	color: rgb(36, 99, 235);
}

#ism014 {
	font-size: 2.5rem;
}

@media (max-width:992px) {
	.gjs-grid-row {
		flex-direction: column;
	}
}`
        },
    },
    // view: {
    //     onRender(this: any) {
    //         const componentEl = this.el;
    //         if (!componentEl._reactRoot) {
    //             const root = createRoot(componentEl);
    //             componentEl._reactRoot = root;
    //             root.render(React.createElement(FeatureLeft));
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

export default FeatureLeftComponent;