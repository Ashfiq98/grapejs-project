'use client';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage';
import 'grapesjs-blocks-basic';

export const grapeObj = {
  container: "#gjs",
  fromElement: true,
  width: "auto",
  storageManager: true,
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
  // panels: {defaults: []},
  plugins: ['gjs-preset-webpage'],
  pluginsOpts: {
    'grapesjs-preset-webpage': {},
  }
  ,
  styleManager: 
  {
    // Add a new section for Global Settings
    sectors: [
      // Global Settings section
      {
        name: 'Global Settings',
        open: true,
        buildProps: ['background-color', 'color'],
        properties: [
          {
            name: 'Primary Color',
            property: 'primary-color',
            type: 'color',
          },
          {
            name: 'Secondary Color',
            property: 'secondary-color',
            type: 'color',
          },
        ],
      },

  {
    name: 'General',
    open: true,
    buildProps: ['width', 'height', 'float', 'display', 'position'],
  },

  // Default "Typography" section
  {
    name: 'Typography',
    open: true,
    buildProps: ['font-family', 'font-size', 'font-weight', 'line-height', 'text-align', 'text-transform'],
  },

  // Default "Decorations" section
  {
    name: 'Decorations',
    open: true,
    buildProps: ['border', 'border-radius', 'box-shadow', 'opacity'],
  },

  // Default "Flex" section
  {
    name: 'Flex',
    open: true,
    buildProps: ['flex-direction', 'justify-content', 'align-items', 'flex-wrap'],
  },

  // Default "Dimension" section
  {
    name: 'Dimension',
    open: true,
    buildProps: ['width', 'height', 'max-width', 'max-height', 'min-width', 'min-height'],
  },

  // Default "Extra" section
  {
    name: 'Extra',
    open: true,
    buildProps: ['transition', 'transform', 'perspective'],
  },

      // You can continue adding other sections as needed
    ],
  },
}
