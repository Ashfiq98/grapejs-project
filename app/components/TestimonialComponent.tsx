// TestimonialComponent.tsx
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
</div>`, styles: `* {
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

#ihap8q {
	font-size: 2.5rem;
	margin-bottom: 10px;
	text-align: center;
}

#i6fjjy {
	padding: 10px;
	max-width: 750px;
	margin-bottom: 70px;
	padding-left: 0px;
	padding-right: 0px;
	text-align: center;
}

#ia7pcr {
	color: black;
	border-top-left-radius: 100%;
	border-top-right-radius: 100%;
	border-bottom-right-radius: 100%;
	border-bottom-left-radius: 100%;
	max-width: 100%;
	width: 75px;
	border-top-width: 3px;
	border-right-width: 3px;
	border-bottom-width: 3px;
	border-left-width: 3px;
	border-top-style: solid;
	border-right-style: solid;
	border-bottom-style: solid;
	border-left-style: solid;
	border-top-color: rgb(36, 99, 235);
	border-right-color: rgb(36, 99, 235);
	border-bottom-color: rgb(36, 99, 235);
	border-left-color: rgb(36, 99, 235);
}

#iqroa4 {
	font-size: 1.5rem;
}

#i5k4nf {
	width: 100%;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: 50px;
}

#infwen {
	max-width: 1200px;
	align-items: center;
	display: flex;
	flex-direction: column;
}

#testimonial-section {
	justify-content: center;
	padding-top: 80px;
	padding-bottom: 80px;
	padding-left: 20px;
	padding-right: 20px;
}

#inea73 {
	justify-content: space-between;
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

#idva29 {
	flex: 0 1 auto;
}

#i2d7qp {
	width: 100%;
	gap: 20px;
	align-items: center;
}

#iaqf2c {
	color: rgba(0, 0, 0, 0.5);
}

#it3yug {
	padding: 10px;
	padding-left: 0px;
	padding-right: 0px;
}

#i8gt4n {
	padding: 10px;
	padding-left: 0px;
	padding-right: 0px;
}

#ixzdlj {
	color: black;
	border-top-left-radius: 100%;
	border-top-right-radius: 100%;
	border-bottom-right-radius: 100%;
	border-bottom-left-radius: 100%;
	max-width: 100%;
	width: 75px;
	border-top-width: 3px;
	border-right-width: 3px;
	border-bottom-width: 3px;
	border-left-width: 3px;
	border-top-color: rgb(36, 99, 235);
	border-right-color: rgb(36, 99, 235);
	border-bottom-color: rgb(36, 99, 235);
	border-left-color: rgb(36, 99, 235);
	border-top-style: solid;
	border-right-style: solid;
	border-bottom-style: solid;
	border-left-style: solid;
}

#inucqu {
	flex: 0 1 auto;
}

#i04ztt {
	font-size: 1.5rem;
}

#ia9ts3 {
	color: rgba(0, 0, 0, 0.5);
}

#ish0zj {
	width: 100%;
	gap: 20px;
	align-items: center;
}

#idndjn {
	justify-content: space-between;
}

@media (max-width:992px) {
	.gjs-grid-row {
		flex-direction: column;
	}

	#i2d7qp {
		flex-direction: row;
	}

	#ish0zj {
		flex-direction: row;
	}
}`
    },
  },
};

export default TestimonialComponent;