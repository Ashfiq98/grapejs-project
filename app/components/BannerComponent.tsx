// BannerComponent.tsx
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
            components: ` <div id="iz29ek" class="gjs-grid-row">
    <div id="ik2rdi" class="gjs-grid-column">
      <h2 id="i83vu9" class="gjs-heading">Put here your description <br/>for
        <span id="i7owfh" class="gjs-text-blue">this section</span></h2>
      <div id="in201n" class="text-main-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.<br/></div><a id="iwgwt5" class="gjs-button">Join
        Waitlist</a>
    </div>
  </div>`,
  styles: `

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

#in201n {
	padding: 10px;
	max-width: 750px;
	margin-bottom: 35px;
	padding-left: 0px;
	padding-right: 0px;
	text-align: center;
	margin-top: 35px;
}

#ik2rdi {
	max-width: 1200px;
	align-items: center;
	display: flex;
	flex-direction: column;
	padding-top: 50px;
	padding-right: 50px;
	padding-bottom: 50px;
	padding-left: 50px;
	border-top-left-radius: 50px;
	border-top-right-radius: 50px;
	border-bottom-right-radius: 50px;
	border-bottom-left-radius: 50px;
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
	background-image: radial-gradient(515px at 50% 141%, rgba(35, 98, 235, 0.22) 10%, white 90%);
	background-position: 0px 0px;
	background-size: 100% 100%;
	background-repeat: repeat;
	background-attachment: scroll;
	background-origin: padding-box;
	box-shadow: 0px 10px 15px 0 rgba(0, 0, 0, 0.07);
    }
    
#iz29ek {
	justify-content: center;
	padding-top: 80px;
	padding-bottom: 80px;
	padding-left: 20px;
	padding-right: 20px;
}

#i83vu9 {
	font-size: 2.5rem;
	text-align: center;
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
    //             root.render(React.createElement(Banner));
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

export default BannerComponent;