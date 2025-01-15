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


  // useEffect(() => {
  //   const editor = grapesjs.init(grapeObj);

  //   const pfx = editor.getConfig().stylePrefix;
  //   const modal = editor.Modal;
  //   const cmdm = editor.Commands;
  //   const codeViewer = editor.CodeManager.getViewer('CodeMirror').clone();

  //   // Container for the code editor
  //   const container = document.createElement('div');
  //   const btnContainer = document.createElement('div');
  //   const btnEdit = document.createElement('button');
  //   const btnDiscard = document.createElement('button');

  //   // Style containers
  //   container.style.height = '90%';
  //   container.style.width = '100%';

  //   btnContainer.style.display = 'flex';
  //   btnContainer.style.justifyContent = 'flex-end';
  //   btnContainer.style.marginTop = '10px';

  //   // Style buttons
  //   btnEdit.innerHTML = 'Save Changes';
  //   btnEdit.className = `${pfx}btn-prim ${pfx}btn-import`;
  //   btnEdit.style.marginRight = '10px';

  //   btnDiscard.innerHTML = 'Discard Changes';
  //   btnDiscard.className = `${pfx}btn-prim ${pfx}btn-import`;

  //   btnContainer.appendChild(btnEdit);
  //   btnContainer.appendChild(btnDiscard);

  //   // Function to format code
  //   const formatCode = (html, css) => {
  //     const beautifyOptions = {
  //       indent_size: 2,
  //       wrap_line_length: 80,
  //       preserve_newlines: true,
  //       jslint_happy: false,
  //       end_with_newline: false,
  //       space_after_anon_function: false
  //     };

  //     const formattedHtml = html_beautify(html, beautifyOptions);
  //     const formattedCss = css_beautify(css, beautifyOptions);

  //     return `${formattedHtml}\n\n<style>\n${formattedCss}\n</style>`;
  //   };

  //   // Override view-code command
  //   cmdm.add('view-code', {
  //     run: function (editor) {
  //       const viewer = codeViewer.editor;

  //       modal.setTitle('Code');

  //       if (!viewer) {
  //         const txtarea = document.createElement('textarea');
  //         container.appendChild(txtarea);
  //         container.appendChild(btnContainer);
  //         codeViewer.init(txtarea); // Initialize CodeMirror with the textarea

  //         if (!codeViewer.editor) {
  //           console.error('CodeMirror viewer is not initialized.');
  //           return;
  //         }

  //         // Now viewer is guaranteed to be initialized
  //         codeViewer.editor.setOption('theme', 'dracula');
  //         codeViewer.editor.setOption('lineNumbers', true);
  //         codeViewer.editor.setOption('readOnly', false);
  //         codeViewer.editor.setOption('autoCloseTags', true);
  //         codeViewer.editor.setOption('autoCloseBrackets', true);
  //         codeViewer.editor.setOption('styleActiveLine', true);
  //         codeViewer.editor.setOption('smartIndent', true);
  //         codeViewer.editor.setOption('indentUnit', 2);
  //         codeViewer.editor.setOption('tabSize', 2);
  //         codeViewer.editor.setOption('mode', 'htmlmixed');
  //       }

  //       // Get and format code
  //       const htmlContent = editor.getHtml();
  //       const cssContent = editor.getCss();
  //       const formattedContent = formatCode(htmlContent, cssContent);

  //       // Set content and open modal
  //       modal.setContent('');
  //       modal.setContent(container);
  //       codeViewer.setContent(formattedContent);
  //       modal.open();
  //       viewer?.refresh();

  // // Button handlers
  // btnEdit.onclick = () => {
  //   const code = codeViewer.editor.getValue(); // Get code from the editor

  //   // Parse the HTML and CSS from the code
  //   const htmlMatch = code.match(/^[\s\S]*(?=<style>)/); // Extract HTML before <style>
  //   const cssMatch = code.match(/<style>([\s\S]*)<\/style>/); // Extract CSS inside <style> tags

  //   const htmlContent = htmlMatch ? htmlMatch[0].trim() : '';
  //   const cssContent = cssMatch ? cssMatch[1].trim() : '';

  //   // Clear current components and styles
  //   editor.DomComponents.clear(); // Clear all components
  //   editor.CssComposer.clear(); // Clear all styles

  //   // Set new components and styles
  //   editor.setComponents(htmlContent);
  //   editor.setStyle(cssContent);

  //   modal.close(); // Close the modal
  // };


  // btnDiscard.onclick = () => {
  //   modal.close();
  // };
  //     },
  //   });
  //   // Add custom commands
  //   editor.Commands.add('save-template', {
  //     run: function (editor) {
  //       const html = editor.getHtml();
  //       const css = editor.getCss();
  //       localStorage.setItem('grapesjs-content', JSON.stringify(html));
  //       localStorage.setItem('grapesjs-styles', JSON.stringify(css));
  //     }
  //   });

  //   // Add preview command
  //   editor.Commands.add('preview', {
  //     run: function (editor) {
  //       editor.setDevice('Desktop');
  //       const preview = editor.getConfig().preview;
  //       editor.stopCommand('preview');
  //       editor.getModel().stopDefault();
  //     },
  //     stop: function (editor) {
  //       editor.setDevice('Desktop');
  //       editor.getModel().runDefault();
  //     }
  //   });
  //   // Load saved content
  //   const savedHtml = localStorage.getItem('grapesjs-content');
  //   if (savedHtml) {
  //     editor.setComponents(JSON.parse(savedHtml));
  //   }

  //   // Register components
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

    // Save button handler
    btnEdit.onclick = function () {
      const htmlCode = htmlViewer.editor?.getValue() || '';
      const cssCode = cssViewer.editor?.getValue() || '';

      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlCode, 'text/html');
      const bodyContent = doc.body.innerHTML;

      editor.setComponents(bodyContent);
      editor.setStyle(cssCode);
      modal.close();
    };

    // Discard button handler
    btnDiscard.onclick = () => modal.close();

    // HTML Edit Command
    cmdm.add('html-edit', {
      run: function (editor, sender) {
        sender?.set('active', 0);
        modal.setTitle('Code Editor');

        // Initialize viewers if not already done
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

        // Create full HTML structure
        const pageTitle = document.title || "Grape js";
        const bodyContent = editor.getHtml();
        const cssContent = editor.getCss();
        const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle}</title>
</head>
${bodyContent}
</html>`;
        const fullCss = `
        :root {
          --background: #ffffff;
          --foreground: #171717;
          --primary-color: #007bff;
          --secondary-color: #6c757d;
          --font-size: 16px;
        }
        

${cssContent}
`;

        // Set up modal content
        editorsContainer.replaceChildren(htmlSection, cssSection);
        buttonsContainer.replaceChildren(btnDiscard, btnEdit);
        container.replaceChildren(editorsContainer, buttonsContainer);
        modal.setContent(container);

        // Set content and open modal
        htmlViewer.setContent(fullHtml);
        cssViewer.setContent(fullCss);
        modal.open();

        // Refresh editors
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
    }]);

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
      <div style={{ width: '280px', padding: '15px', borderLeft: '1px solid #ccc' }}>
        <div className="layers-container"></div>
        <div className="styles-container"></div>
      </div>
    </div>
  );
};

export default Main;
