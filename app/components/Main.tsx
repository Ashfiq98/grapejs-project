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
import Navbar from './Navbar';
import Hero from './Hero';
import FeatureLeft from './FeatureLeft';
import FeatureGrid from './FeatureGrid';
import Testimonial from './Testimonial';
import Banner from './Banner';
import Footer from './Footer';

const Main = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      fromElement: true,
      width: "auto",
      storageManager: false,
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          // {
          //   id: 'section',
          //   label: '<b>Section</b>',
          //   attributes: { class: 'gjs-block-section' },
          //   content: `
          //     <section>
          //       <h1>This is a section</h1>
          //       <div>This is a div element</div>
          //     </section>
          //   `,
          // },
          // {
          //   id: 'text',
          //   label: 'Text',
          //   content: '<div data-gjs-type="text">Insert your text here</div>',
          // },
          // {
          //   id: 'image',
          //   label: 'Image',
          //   select: true,
          //   content: { type: 'image' },
          //   activate: true,
          // },
          {
            id: 'navbar',
            label: 'Navbar',
            category: 'Navbar',
            content: {
              type: 'navbar'
            }
          },
          {
            id: 'hero-section',
            label: 'Hero Section',
            category: 'Hero',
            content: {
              type: 'hero-section'
            }
          },
          {
            id: 'feature-left',
            label: 'Feature Left',
            category: 'Feature Left',
            content: {
              type: 'feature-left'
            }
          },
          {
            id: 'feature-grid',
            label: 'Feature Grid',
            category: 'Feature Grid',
            content: {
              type: 'feature-grid'
            }
          },
          {
            id: 'testimonial',
            label: 'Testimonial',
            category: 'Testimonial',
            content: {
              type: 'testimonial'
            }
          },
          {
            id: 'banner',
            label: 'Banner',
            category: 'Banner',
            content: {
              type: 'banner'
            }
          },
          {
            id: 'footer',
            label: 'Footer',
            category: 'Footer',
            content: {
              type: 'footer'
            }
          },
        ]
      },
      plugins: ['gjs-preset-webpage'],
    });
// ---------------------------------------------Local Storage load and save ------------------------------------------

    const savedHtml = localStorage.getItem('grapesjs-content');
    if (savedHtml) {
      editor.setComponents(JSON.parse(savedHtml)); // Parse the JSON string
    }

    // Save editor content to local storage on change
    editor.on('change', () => {
      const components = editor.getComponents();
      localStorage.setItem('grapesjs-content', JSON.stringify(components)); // Stringify the components
    });

  // -------------------------------------------- CUSTOM components ----------------------------------------------------
    
    // ------------Navbar----------------

    editor.Components.addType('navbar', {
      extend: 'default',
      model: {
        defaults: {
          name: 'Navbar',
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
            root.render(React.createElement(Navbar));
          }
        },
        remove() {
          if (this.el._reactRoot) {
            this.el._reactRoot.unmount();
          }
        }
      }
    });

    // -----------Hero section---------------

    editor.Components.addType('hero-section', {
      extend: 'default',
      model: {
        defaults: {
          name: 'Hero',
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
            root.render(React.createElement(Hero));
          }
        },
        remove() {
          if (this.el._reactRoot) {
            this.el._reactRoot.unmount();
          }
        }
      }
    });

    //--------------- Feature Left------------
    
    editor.Components.addType('feature-left', {
      extend: 'default',
      model: {
        defaults: {
          name: 'Feature Left',
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
            root.render(React.createElement(FeatureLeft));
          }
        },
        remove() {
          if (this.el._reactRoot) {
            this.el._reactRoot.unmount();
          }
        }
      }
    });

    //----------------Feature Grid------------

    editor.Components.addType('feature-grid', {
      extend: 'default',
      model: {
        defaults: {
          name: 'Feature Grid',
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
            root.render(React.createElement(FeatureGrid));
          }
        },
        remove() {
          if (this.el._reactRoot) {
            this.el._reactRoot.unmount();
          }
        }
      }
    });

    //----------------Testimonial-------------

    editor.Components.addType('testimonial', {
      extend: 'default',
      model: {
        defaults: {
          name: 'Testimonial',
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
            root.render(React.createElement(Testimonial));
          }
        },
        remove() {
          if (this.el._reactRoot) {
            this.el._reactRoot.unmount();
          }
        }
      }
    });
    //----------------Banner------------------

    editor.Components.addType('banner', {
      extend: 'default',
      model: {
        defaults: {
          name: 'Banner',
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
            root.render(React.createElement(Banner));
          }
        },
        remove() {
          if (this.el._reactRoot) {
            this.el._reactRoot.unmount();
          }
        }
      }
    });
    //----------------Footer-----------------

    editor.Components.addType('footer', {
      extend: 'default',
      model: {
        defaults: {
          name: 'Footer',
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
            root.render(React.createElement(Footer));
          }
        },
        remove() {
          if (this.el._reactRoot) {
            this.el._reactRoot.unmount();
          }
        }
      }
    });

    // editor.setStyle(`
    //   .navbar {
    //     display: flex;
    //     justify-content: space-between;
    //     align-items: center;
    //     padding: 1rem 2rem;
    //     background: white;
    //   }
    //   .nav-links {
    //     display: flex;
    //     gap: 2rem;
    //     align-items: center;
    //   }
    //   .nav-links a {
    //     text-decoration: none;
    //     color: #333;
    //   }
    //   .join-waitlist {
    //     background: #007bff;
    //     color: white;
    //     border: none;
    //     padding: 0.5rem 1rem;
    //     border-radius: 4px;
    //     cursor: pointer;
    //   }
    //   .hero {
    //     text-align: center;
    //     padding: 4rem 2rem;
    //     background: #f8f9fa;
    //   }
    //   .cta-button {
    //     background: #007bff;
    //     color: white;
    //     border: none;
    //     padding: 0.75rem 1.5rem;
    //     border-radius: 4px;
    //     font-size: 1.1rem;
    //     cursor: pointer;
    //     margin-top: 1rem;
    //   }
    //   .logo img {
    //     height: 30px;
    //     width: 60px;
    //     border-radius: 5px;
    //     padding: 0px;
    //   }
    // `);
    // Load saved HTML from local storage

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

export default Main;