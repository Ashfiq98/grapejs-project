'use client';
import { useEffect, useRef } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs, { Editor } from 'grapesjs';
import 'grapesjs-preset-webpage';
import 'grapesjs-blocks-basic';

const First: React.FC = () => {
    useEffect(() => {
        const editor = grapesjs.init({
            container: "#editor",
            fromElement: true,
            width: "auto",
            height: "100vh",
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
                                    <img src="/placeholder.png" alt="Logo"/>
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
                    }
                ]
            },
            layerManager: {
                appendTo: '.layers-container'
            },
            styleManager: {
                appendTo: '.styles-container',
                sectors: [
                    {
                        name: 'Dimension',
                        open: false,
                        properties: [
                            'width',
                            'height',
                            'padding',
                            'margin'
                        ]
                    },
                    {
                        name: 'Typography',
                        open: false,
                        properties: [
                            'font-family',
                            'font-size',
                            'font-weight',
                            'color',
                            'text-align'
                        ]
                    },
                    {
                        name: 'Decorations',
                        open: false,
                        properties: [
                            'background-color',
                            'border',
                            'border-radius',
                            'box-shadow'
                        ]
                    }
                ]
            },
            panels: {
                defaults: [
                    {
                        id: 'panel-switcher',
                        el: '.panel__switcher',
                        buttons: [
                            {
                                id: 'show-layers',
                                active: true,
                                label: 'Layers',
                                command: 'show-layers',
                            },
                            {
                                id: 'show-style',
                                active: true,
                                label: 'Styles',
                                command: 'show-styles',
                            },
                            {
                                id: 'show-blocks',
                                active: true,
                                label: 'Blocks',
                                command: 'show-blocks',
                            },
                        ],
                    }
                ]
            },
            plugins: ['gjs-preset-webpage'],
            pluginsOpts: {
                'gjs-preset-webpage': {}
            },
        });

        // Add default styles
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