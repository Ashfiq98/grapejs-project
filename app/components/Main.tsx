'use client';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-webpage';
import 'grapesjs-blocks-basic';
import NavbarComponent from './NavbarComponent';
import HeroComponent from './HeroComponent';
import FeatureGridComponent from './FeatureGridComponent';
import FeatureLeftComponent from './FeatureLeftComponent';
import TestimonialComponent from './TestimonialComponent';
import BannerComponent from './BannerComponent';
import FooterComponent from './FooterComponent';
import { grapeObj } from './Grape';

// declare global {
//   interface HTMLElement {
//     _reactRoot?: import('react-dom/client').Root;
//   }
// }
const Main = () => {
  useEffect(() => {
    const editor = grapesjs.init(grapeObj);
   
    const savedHtml = localStorage.getItem('grapesjs-content');
    if (savedHtml) {
      editor.setComponents(JSON.parse(savedHtml)); // Parse the JSON string
    }

    // Save editor content to local storage on change
    // editor.on('change', () => {
    //   const components = editor.getComponents();
    //   localStorage.setItem('grapesjs-content', JSON.stringify(components)); // Stringify the components
    // });

    // -------------------------------------------- CUSTOM components ----------------------------------------------------

    // ------------Navbar----------------

    editor.Components.addType('navbar', NavbarComponent);

    // -----------Hero section---------------

    editor.Components.addType('hero-section', HeroComponent);

    //--------------- Feature Left------------

    editor.Components.addType('feature-left', FeatureLeftComponent);

    //----------------Feature Grid------------

    editor.Components.addType('feature-grid', FeatureGridComponent);

    //----------------Testimonial-------------

    editor.Components.addType('testimonial', TestimonialComponent);
    //----------------Banner------------------

    editor.Components.addType('banner', BannerComponent);
    //----------------Footer-----------------

    editor.Components.addType('footer', FooterComponent);

    return () => editor.destroy();
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div id="blocks" style={{ width: '200px', padding: '15px', borderRight: '1px solid #ccc' }}></div>
      <div style={{ flex: 1 }}><div id="gjs"></div></div>
      <div style={{ width: '280px', padding: '15px', borderLeft: '1px solid #ccc' }}>
        <div className="layers-container"></div>
        <div className="styles-container"></div>
      </div>
    </div>
  );
};

export default Main;



// {
//   extend: 'default',
//   model: {
//     defaults: {
//       name: 'Navbar',
//       editable: true,
//       droppable: true,
//       traits: [],
//     },
//   },
//   view: {
//     onRender() {
//       const componentEl = this.el;
//       if (!componentEl._reactRoot) {
//         const root = createRoot(componentEl);
//         componentEl._reactRoot = root;
//         root.render(React.createElement(Navbar));
//       }
//     },
//     remove() {
//       if (this.el._reactRoot) {
//         this.el._reactRoot.unmount();
//       }
//       return this
//     }
//   }
// }