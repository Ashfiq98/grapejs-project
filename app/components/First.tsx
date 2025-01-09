declare global {
    interface HTMLElement {
      _reactRoot?: import('react-dom/client').Root;
    }
  }
'use client';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-webpage';
import 'grapesjs-blocks-basic';
import MyComponent from './MyComponent';

const First = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      fromElement: true,
      width: "auto",
      storageManager: false,
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'section',
            label: '<b>Section</b>',
            attributes: { class: 'gjs-block-section' },
            content: `
              <section>
                <h1>This is a section</h1>
                <div>This is a div element</div>
              </section>
            `,
          },
          {
            id: 'text',
            label: 'Text',
            content: '<div data-gjs-type="text">Insert your text here</div>',
          },
          {
            id: 'image',
            label: 'Image',
            select: true,
            content: { type: 'image' },
            activate: true,
          },
          {
            id: 'navbar',
            label: 'Navbar',
            content: `
              <nav class="navbar">
                <div class="logo">
                  <img src="https://fotos.perfil.com/2023/06/13/trim/720/410/messi-copa-del-mundo-1588008.jpg" alt="Logo"/>
                </div>
                <div class="nav-links">
                  <a href="#about">About</a>
                  <a href="#features">Features</a>
                  <a href="#testimonials">Testimonials</a>
                  <button class="join-waitlist">Join Waitlist</button>
                </div>
              </nav>
            `,
          },
          {
            id: 'hero-section',
            label: 'Hero Section',
            content: `
              <section class="hero">
                <h1>Insert Hero text here</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <button class="cta-button">Join Waitlist</button>
              </section>
            `,
          },
          {
            id: 'react-component',
            label: 'React Component',
            category: 'Custom',
            content: {
              type: 'react-component'
            }
          }
        ]
      },
      plugins: ['gjs-preset-webpage'],
    });

    editor.Components.addType('react-component', {
      extend: 'default',
      model: {
        defaults: {
          name: 'React Component',
          editable: true,
          droppable: true,
          traits: [],
        }
      },
      view: {
        onRender() {
          const componentEl = this.el;
          if (!componentEl._reactRoot) {
            const root = createRoot(componentEl);
            componentEl._reactRoot = root;
            root.render(React.createElement(MyComponent));
          }
        },
        remove() {
          if (this.el._reactRoot) {
            this.el._reactRoot.unmount();
          }
        }
      }
    });

    editor.setStyle(`
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background: white;
      }
      .nav-links {
        display: flex;
        gap: 2rem;
        align-items: center;
      }
      .nav-links a {
        text-decoration: none;
        color: #333;
      }
      .join-waitlist {
        background: #007bff;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
      }
      .hero {
        text-align: center;
        padding: 4rem 2rem;
        background: #f8f9fa;
      }
      .cta-button {
        background: #007bff;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        font-size: 1.1rem;
        cursor: pointer;
        margin-top: 1rem;
      }
      .logo img {
        height: 30px;
        width: 60px;
        border-radius: 5px;
        padding: 0px;
      }
    `);

    return () => editor.destroy();
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div id="blocks" style={{ width: '200px', padding: '15px', borderRight: '1px solid #ccc' }}></div>
      <div style={{ flex: 1 }}><div id="editor"></div></div>
      <div style={{ width: '280px', padding: '15px', borderLeft: '1px solid #ccc' }}>
        <div className="layers-container"></div>
        <div className="styles-container"></div>
      </div>
    </div>
  );
};

export default First;