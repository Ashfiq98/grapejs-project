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

const Main = () => {
  useEffect(() => {
    const editor = grapesjs.init(grapeObj);

    // Initialize the HTML Edit Command
    const pfx = editor.getConfig()?.stylePrefix || ' ';
    const modal = editor.Modal;
    const cmdm = editor.Commands;
    const codeViewer = editor.CodeManager.getViewer('CodeMirror')?.clone();
    const pnm = editor.Panels;

    if (!codeViewer || !modal || !cmdm || !pnm) {
      console.error('Required GrapesJS components are not available.');
      return;
    }

    const container = document.createElement('div');
    const btnEdit = document.createElement('button');
    const btnDiscard = document.createElement('button'); // Create discard button

    // Configure CodeViewer
    codeViewer.set({
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
    });

    // Configure Edit Button
    btnEdit.innerHTML = 'Edit';
    btnEdit.className = `${pfx}btn-prim ${pfx}btn-import`;
    btnEdit.onclick = function () {
      const code = codeViewer.editor?.getValue() || '';
      const wrapper = editor.DomComponents.getWrapper();
      if (wrapper) {
        wrapper.set('content', '');
      }
      editor.setComponents(code.trim());
      modal.close();
    };

    // Configure Discard Button
    btnDiscard.innerHTML = 'Discard';
    btnDiscard.className = `${pfx}btn-prim ${pfx}btn-import`;
    btnDiscard.onclick = function () {
      modal.close(); // Close modal without saving
    };

    // Add Command to edit HTML
    cmdm.add('html-edit', {
      run: function (editor, sender) {
        sender?.set('active', 0);
        const viewer = codeViewer.editor;

        modal.setTitle('Edit code');
        if (!viewer) {
          const txtarea = document.createElement('textarea');
          container.appendChild(txtarea);
          container.appendChild(btnEdit);
          container.appendChild(btnDiscard); // Add discard button to modal
          codeViewer.init(txtarea);
        }

        const InnerHtml = editor.getHtml();
        const Css = editor.getCss();

        modal.setContent('');
        modal.setContent(container);
        codeViewer.setContent(`${InnerHtml}<style>${Css}</style>`);
        modal.open();

        viewer?.refresh();
      },
    });

    // Add Button to Panel
    pnm.addButton('options', [
      {
        id: 'edit',
        className: 'fa fa-edit',
        command: 'html-edit',
        attributes: {
          title: 'Edit',
        },
      },
    ]);

    const savedHtml = localStorage.getItem('grapesjs-content');
    if (savedHtml) {
      editor.setComponents(JSON.parse(savedHtml)); // Parse the JSON string
    }

    // Custom Components Registration
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
