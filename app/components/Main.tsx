'use client';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs, { Editor, EditorConfig } from 'grapesjs';
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
// import { html_beautify, css_beautify } from 'js-beautify';

const Main = () => {
  // useEffect(() => {
  //   const editor = grapesjs.init(grapeObj);

  //   // Initialize the HTML Edit Command
  //   const pfx = editor.getConfig()?.stylePrefix || ' ';
  //   const modal = editor.Modal;
  //   const cmdm = editor.Commands;
  //   const codeViewer = editor.CodeManager.getViewer('CodeMirror')?.clone();
  //   const pnm = editor.Panels;

  //   if (!codeViewer || !modal || !cmdm || !pnm) {
  //     console.error('Required GrapesJS components are not available.');
  //     return;
  //   }

  //   const container = document.createElement('div');
  //   const btnEdit = document.createElement('button');
  //   const btnDiscard = document.createElement('button'); // Create discard button

  //   // Configure CodeViewer
  //   codeViewer.set({
  //     codeName: 'htmlmixed',
  //     readOnly: 0,
  //     theme: 'hopscotch',
  //     autoBeautify: true,
  //     autoCloseTags: true,
  //     autoCloseBrackets: true,
  //     lineWrapping: true,
  //     styleActiveLine: true,
  //     smartIndent: true,
  //     indentWithTabs: true,
  //   });

  //   // Configure Edit Button
  //   btnEdit.innerHTML = 'Save';
  //   btnEdit.className = `${pfx}btn-prim ${pfx}btn-import`;
  //   btnEdit.style.marginRight = '10px';
  //   btnEdit.onclick = function () {
  //     const code = codeViewer.editor?.getValue() || '';
  //     const splitCode = code.split('<style>');
  //     const htmlContent = splitCode[0]?.trim() || ''; // Get the HTML part
  //     const cssContent = splitCode[1]?.replace('</style>', '').trim() || ''; // Get the CSS part

  //     // Clear the current content
  //     const wrapper = editor.DomComponents.getWrapper();
  //     if (wrapper) {
  //       wrapper.set('content', ''); // Clear the wrapper content
  //     }

  //     // Set the new content
  //     editor.setComponents(htmlContent);

  //     // Set the new styles
  //     editor.setStyle(cssContent);

  //     modal.close();
  //   };

  //   // Configure Discard Button
  //   btnDiscard.innerHTML = 'Discard';
  //   btnDiscard.className = `${pfx}btn-prim ${pfx}btn-import`;
  //   btnDiscard.onclick = function () {
  //     modal.close(); // Close modal without saving
  //   };

  //   // Add Command to edit HTML,css
  //   cmdm.add('html-edit', {
  //     run: function (editor, sender) {
  //       sender?.set('active', 0);
  //       const viewer = codeViewer.editor;

  //       modal.setTitle('Code');
  //       if (!viewer) {
  //         const txtarea = document.createElement('textarea');
  //         container.appendChild(txtarea);
  //         container.appendChild(btnEdit);
  //         container.appendChild(btnDiscard); // Add discard button to modal
  //         codeViewer.init(txtarea);
  //       }

  //       const InnerHtml = editor.getHtml();
  //       const Css = editor.getCss();

  //       modal.setContent('');
  //       modal.setContent(container);
  //       codeViewer.setContent(`${InnerHtml}<style>${Css}</style>`);
  //       modal.open();

  //       viewer?.refresh();
  //     },
  //   });

  // //--------------------------------------------------------- Remove the "export-template" button by ID--------------------------------------------

  // const panelButtons = editor.Panels.getPanel('options')?.get('buttons');

  // if (panelButtons) {

  //   const buttonToRemove = panelButtons.find((button: { id: string }) => button.id === 'export-template');
  //   if (buttonToRemove) {
  //     panelButtons.remove(buttonToRemove.id);
  //   }
  // }
  // //--------------------------------------------------------- Remove the "export-template" button by ID--------------------------------------------

  //   //---------------------------------------------------------- Add Button to Panel-----------------------------------------------------
  //   pnm.addButton('options', [
  //     {
  //       id: 'edit',
  //       className: 'fa fa-code',
  //       command: 'html-edit',
  //       attributes: {
  //         title: 'Code',
  //       },
  //     },
  //   ]);
  //   //---------------------------------------------------------- Add Button to Panel-----------------------------------------------------

  //   //-----------------------------------------------------------Saved inside localstorage-------------------------------------------------------------

  //   const savedHtml = localStorage.getItem('grapesjs-content');
  //   if (savedHtml) {
  //     editor.setComponents(JSON.parse(savedHtml)); // Parse the JSON string
  //   }
  //   //-----------------------------------------------------------Saved inside localstorage-------------------------------------------------------------

  //   // Custom Components Registration
  //   editor.Components.addType('navbar', NavbarComponent);
  //   editor.Components.addType('hero-section', HeroComponent);
  //   editor.Components.addType('feature-left', FeatureLeftComponent);
  //   editor.Components.addType('feature-grid', FeatureGridComponent);
  //   editor.Components.addType('testimonial', TestimonialComponent);
  //   editor.Components.addType('banner', BannerComponent);
  //   editor.Components.addType('footer', FooterComponent);

  //   return () => editor.destroy();
  // }, []);

  useEffect(() => {
    const editor = grapesjs.init(grapeObj);

    const pfx = editor.getConfig()?.stylePrefix || ' ';
    const modal = editor.Modal;
    const cmdm = editor.Commands;
    const pnm = editor.Panels;

    const htmlViewer = editor.CodeManager.getViewer('CodeMirror')?.clone();
    const cssViewer = editor.CodeManager.getViewer('CodeMirror')?.clone();

    if (!htmlViewer || !cssViewer || !modal || !cmdm || !pnm) {
      console.error('Required GrapesJS components are not available.');
      return;
    }


    // Define base styles
    const baseStyles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary-color: #007bff;
  --secondary-color: #cc7f28;
  --font-size: 16px;
  --global-font : "Inter", serif;
  --secondary-font: "Poppins", serif;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}`;
    const setupCanvasStyles = (editor) => {
      const frameHead = editor.Canvas.getDocument().head;
      let canvasStyles = frameHead.querySelector('#canvas-styles');

      if (!canvasStyles) {
        canvasStyles = document.createElement('style');
        canvasStyles.id = 'canvas-styles';
        frameHead.appendChild(canvasStyles);
      }

      return canvasStyles;
    };
    // CSS formatting function
    const formatCss = (cssContent) => {
      const cleanCss = cssContent.replace(
        /((:root|body|\*)\s*{[^}]*})/g,
        ''
      );
      return `${baseStyles}\n\n${cleanCss.trim()}`;
    };

    // Main container setup
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '20px';
    container.style.padding = '20px';

    // Editors container
    const editorsContainer = document.createElement('div');
    editorsContainer.style.display = 'flex';
    editorsContainer.style.gap = '20px';
    editorsContainer.style.width = '100%';

    // Create HTML section
    const htmlSection = document.createElement('div');
    htmlSection.style.flex = '1';
    htmlSection.innerHTML = '<div style="margin-bottom: 10px; font-weight: bold; color: #666;">HTML</div>';

    // Create CSS section
    const cssSection = document.createElement('div');
    cssSection.style.flex = '1';
    cssSection.innerHTML = '<div style="margin-bottom: 10px; font-weight: bold; color: #666;">CSS</div>';

    // Buttons container
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.justifyContent = 'flex-end';
    buttonsContainer.style.gap = '10px';
    buttonsContainer.style.borderTop = '1px solid #ddd';
    buttonsContainer.style.paddingTop = '10px';

    // Setup buttons
    const btnEdit = document.createElement('button');
    btnEdit.innerHTML = 'Save';
    btnEdit.className = `${pfx}btn-prim ${pfx}btn-import`;
    btnEdit.style.padding = '8px 16px';

    const btnDiscard = document.createElement('button');
    btnDiscard.innerHTML = 'Discard';
    btnDiscard.className = `${pfx}btn-prim ${pfx}btn-import`;
    btnDiscard.style.padding = '8px 16px';

    // Configure CodeMirror
    const viewerConfig = {
      codeName: 'htmlmixed',
      readOnly: 0,
      theme: 'hopscotch',
      autoBeautify: true,
      autoCloseTags: true,
      autoCloseBrackets: true,
      lineWrapping: true,
      styleActiveLine: true,
      smartIndent: true,
      indentWithTabs: true,
    };

    htmlViewer.set({ ...viewerConfig, codeName: 'htmlmixed' });
    cssViewer.set({ ...viewerConfig, codeName: 'css' });

    // Add style update listener
    editor.on('style:update', () => {
      if (cssViewer.editor) {
        const cssContent = editor.getCss();
        const formattedCss = formatCss(cssContent);
        cssViewer.setContent(formattedCss);
        cssViewer.editor.refresh();

        // Update canvas styles
        const canvasStyles = setupCanvasStyles(editor);
        canvasStyles.innerHTML = formattedCss;
      }
    });

    // Save button handler
    btnEdit.onclick = function () {
      const htmlCode = htmlViewer.editor?.getValue() || '';
      const cssCode = cssViewer.editor?.getValue() || '';

      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlCode, 'text/html');
      const bodyContent = doc.body.innerHTML;

      editor.setComponents(bodyContent);

      // Update both editor and canvas styles
      const formattedCss = formatCss(cssCode);
      editor.setStyle(formattedCss);

      const canvasStyles = setupCanvasStyles(editor);
      canvasStyles.innerHTML = formattedCss;

      modal.close();
    };
    // Discard button handler
    btnDiscard.onclick = () => modal.close();

    // Add CSS variables to canvas
    editor.on('load', () => {
      const frameHead = editor.Canvas.getDocument().head;
      const styleEl = document.createElement('style');
      styleEl.innerHTML = baseStyles;
      frameHead.appendChild(styleEl);
    });

    // Setup storage handling
    editor.on('storage:start', () => {
      // Save content to localStorage before changes
      const components = editor.getComponents();
      const styles = editor.getStyle();
      localStorage.setItem('gjs-components', JSON.stringify(components));
      localStorage.setItem('gjs-styles', JSON.stringify(styles));

    });

    // Handle content deletion
    cmdm.add('delete-content', {
      run: function (editor) {
        // Clear the editor content
        editor.Components.clear();
        editor.setStyle('');

        // Remove from localStorage
        localStorage.removeItem('gjs-components');
        localStorage.removeItem('gjs-styles');

        // Clean up empty divs in HTML viewer
        const cleanHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${document.title || "Grape js"}</title>
</head>
<body>
</body>
</html>`;

        if (htmlViewer.editor) {
          htmlViewer.setContent(cleanHtml);
          htmlViewer.editor.refresh();
        }

        // Reset CSS viewer
        if (cssViewer.editor) {
          cssViewer.setContent(baseStyles);
          cssViewer.editor.refresh();
        }
      }
    });


    // HTML Edit Command
    cmdm.add('html-edit', {
      run: function (editor, sender) {
        sender?.set('active', 0);
        modal.setTitle('Code');

        if (!htmlViewer.editor) {
          const htmlTextarea = document.createElement('textarea');
          htmlSection.appendChild(htmlTextarea);
          htmlViewer.init(htmlTextarea);
        }

        if (!cssViewer.editor) {
          const cssTextarea = document.createElement('textarea');
          cssSection.appendChild(cssTextarea);
          cssViewer.init(cssTextarea);
        }

        // Clean up empty divs before showing HTML
        const bodyContent = editor.getHtml().replace(/<div>\s*<\/div>/g, '');
        const cssContent = editor.getCss();
        const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${document.title || "Grape js"}</title>
</head>
${bodyContent}
</html>`;
        const fullCss = formatCss(cssContent);

        editorsContainer.replaceChildren(htmlSection, cssSection);
        buttonsContainer.replaceChildren(btnDiscard, btnEdit);
        container.replaceChildren(editorsContainer, buttonsContainer);
        modal.setContent(container);

        htmlViewer.setContent(fullHtml);
        cssViewer.setContent(fullCss);
        modal.open();

        htmlViewer.editor?.refresh();
        cssViewer.editor?.refresh();
      }
    });

    // Add edit button to panel
    pnm.addButton('options', [{
      id: 'edit',
      className: 'fa fa-code',
      command: 'html-edit',
      attributes: { title: 'Code' }
    },
    {
      id: 'clear-content',
      className: 'fa fa-trash',
      command: 'delete-content',
      attributes: { title: 'Clear Content' }
    }]);
    // Add a clear button to the panel
    // pnm.addButton('options', [{
    //   id: 'clear-content',
    //   className: 'fa fa-trash',
    //   command: 'delete-content',
    //   attributes: { title: 'Clear Content' }
    // }]);

    // Load content from localStorage on editor initialization
    const loadStoredContent = () => {
      const storedComponents = localStorage.getItem('gjs-components');
      const storedStyles = localStorage.getItem('gjs-styles');

      if (storedComponents) {
        editor.setComponents(JSON.parse(storedComponents));
      }

      if (storedStyles) {
        editor.setStyle(JSON.parse(storedStyles));
      }
    };

    // Call this after editor initialization
    loadStoredContent();
    // Remove export template button
    const panelButtons = editor.Panels.getPanel('options')?.get('buttons');
    if (panelButtons) {
      const buttonToRemove = panelButtons.find((button: { id: string }) => button.id === 'export-template');
      if (buttonToRemove) {
        panelButtons.remove(buttonToRemove.id);
      }
    }

    // Register components
    editor.Components.addType('navbar', NavbarComponent);
    editor.Components.addType('hero-section', HeroComponent);
    editor.Components.addType('feature-left', FeatureLeftComponent);
    editor.Components.addType('feature-grid', FeatureGridComponent);
    editor.Components.addType('testimonial', TestimonialComponent);
    editor.Components.addType('banner', BannerComponent);
    editor.Components.addType('footer', FooterComponent);

    return () => editor.destroy();
  }, []);


  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div id="blocks" style={{ width: '200px', padding: '15px', borderRight: '1px solid #ccc' }}></div>
      <div style={{ flex: 1 }}><div id="gjs"></div></div>
      {/* <div style={{ width: '280px', padding: '15px', borderLeft: '1px solid #ccc' }}>
        <div className="layers-container"></div>
        <div className="styles-container"></div>
      </div> */}
    </div>
  );
};

export default Main;
