// HeroComponent.js
import React from 'react';
import { createRoot } from 'react-dom/client';
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
            styles: `
#irz7b {
	justify-content: center;
	padding-top: 80px;
	padding-bottom: 80px;
	padding-left: 20px;
	padding-right: 20px;
}

#iycz3 {
	max-width: 1200px;
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

#irjua {
	font-size: 3rem;
	text-align: center;
}

#itndw {
	padding: 10px;
	max-width: 750px;
	margin-bottom: 25px;
	text-align: center;
}

#i3vvs {
	color: black;
	border-top-left-radius: 35px;
	border-top-right-radius: 35px;
	border-bottom-right-radius: 35px;
	border-bottom-left-radius: 35px;
	max-width: 100%;
	margin-top: 38px;
	margin-right: 38px;
	margin-bottom: 38px;
	margin-left: 38px;
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
    //             root.render(React.createElement(Hero));
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

export default HeroComponent;