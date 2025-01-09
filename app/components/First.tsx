'use client';
import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs, { Editor } from 'grapesjs';
import 'grapesjs-preset-webpage';
import 'grapesjs-blocks-basic';
import { BlockProperties } from 'grapesjs';
import MyComponent from './MyComponent';

interface CustomBlockProperties extends BlockProperties {
  script?: string | Function;
}
const First: React.FC = () => {
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
                    // {
                    //     id: 'react-component',
                    //     label: '<b>React Component</b>',
                    //     attributes: { class: 'gjs-block-section' },
                    //     content: `<div id="react-component-container"></div>`,
                    //     script: function () {
                    //       const container = document.getElementById('react-component-container');
                    //       if (container) {
                    //         const root = createRoot(container);
                    //         root.render(<MyComponent />);
                    //       }
                    //     } as string | Function, // Type assertion to satisfy the custom type
                    //   } as CustomBlockProperties, // Use the custom type
                ]
            },
            plugins: ["gjs-preset-webpage"],
            pluginsOpts: {
                "gjs-preset-webpage": {},
            },
        });
        // editor.on('load', () => {
        //     const devicesPanelElement = document.querySelector('.gjs-pn-devices-c');

        //     if (devicesPanelElement) {
        //         const inputContainer = document.createElement('div');
        //         inputContainer.className = 'gjs-field gjs-input-size';
        //         inputContainer.innerHTML = `
        //             <label for="width-input">Width:</label>
        //             <input type="number" id="width-input" placeholder="Width (px)" style="width: 80px; margin-right: 10px;">
        //             <label for="height-input">Height:</label>
        //             <input type="number" id="height-input" placeholder="Height (px)" style="width: 80px; margin-right: 10px;">
        //         `;

        //         devicesPanelElement.appendChild(inputContainer);

        //         const widthInput = document.getElementById('width-input') as HTMLInputElement;
        //         const heightInput = document.getElementById('height-input') as HTMLInputElement;
        //         const deviceSelect = document.querySelector('.gjs-devices') as HTMLSelectElement;

        //         // Device dimensions mapping
        //         const deviceDimensions = {
        //             desktop: { width: 1200, height: 800 },
        //             tablet: { width: 768, height: 1024 },
        //             mobileLandscape: { width: 480, height: 320 },
        //             mobilePortrait: { width: 320, height: 480 }
        //         };

        //         const updateInputs = () => {
        //             const selectedComponent = editor.getSelected();
        //             if (selectedComponent) {
        //                 const { width, height } = selectedComponent.getStyle();
        //                 widthInput.value = typeof width === 'string' ? parseInt(width, 10).toString() : '';
        //                 heightInput.value = typeof height === 'string' ? parseInt(height, 10).toString() : '';
        //             }
        //         };

        //         const updateDimensions = () => {
        //             const width = widthInput.value;
        //             const height = heightInput.value;
        //             const selectedComponent = editor.getSelected();

        //             if (selectedComponent) {
        //                 selectedComponent.setStyle({
        //                     width: width ? `${width}px` : 'auto',
        //                     height: height ? `${height}px` : 'auto'
        //                 });
        //             }
        //         };

        //         // Update inputs when a new component is selected
        //         editor.on('component:selected', updateInputs);

        //         // Update dimensions on input change
        //         widthInput.addEventListener('input', updateDimensions);
        //         heightInput.addEventListener('input', updateDimensions);

        //         // Update width and height inputs based on device selection
        //         deviceSelect.addEventListener('change', (event) => {
        //             const selectedDevice = event.target?.value;
        //             const dimensions = deviceDimensions[selectedDevice];

        //             if (dimensions) {
        //                 // Only set the device dimensions if the inputs are empty
        //                 if (!widthInput.value && !heightInput.value) {
        //                     widthInput.value = dimensions.width.toString();
        //                     heightInput.value = dimensions.height.toString();

        //                     // Update the selected component's dimensions
        //                     const selectedComponent = editor.getSelected();
        //                     if (selectedComponent) {
        //                         selectedComponent.setStyle({
        //                             width: `${dimensions.width}px`,
        //                             height: `${dimensions.height}px`
        //                         });
        //                     }
        //                 }
        //             }
        //         });
        //     }
        // });

        // Load data from localStorage when the editor is initialized
        const savedData = localStorage.getItem('gjs-project');
        if (savedData) {
            editor.setComponents(JSON.parse(savedData));
        }

        // Save data to localStorage on change
        editor.on('change', () => {
            const components = editor.getComponents();
            localStorage.setItem('gjs-project', JSON.stringify(components));
        });
        // // Add default styles
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
                .logo img{
                height:30px;
                width:60px;
                border-radius:5px;
                padding: 0px
        `);
        return () => {
            editor.destroy();
        }
    }, []);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Left sidebar for blocks */}
            <div id="blocks" style={{ width: '200px', padding: '15px', borderRight: '1px solid #ccc' }}></div>

            {/* Main editor area */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div id="editor"></div>
            </div>

            {/* Right sidebar for styles and layers */}
            <div style={{ width: '280px', padding: '15px', borderLeft: '1px solid #ccc' }}>
                <div className="layers-container"></div>
                <div className="styles-container"></div>
            </div>
        </div>
    );
};

export default First;