import React, { useState, useRef, useEffect } from 'react';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import FroalaEditor from 'react-froala-wysiwyg';

const FroalaTextEditor = () => {
    const [content, setContent] = useState('');

    return (
        <div>
            <FroalaEditor
                tag='textarea'
                config={{
                    toolbarInline: true,
                    placeholderText: 'Edit Me',
                    events: {
                        initialized: () => {
                            console.log('Editor initialized');
                        },
                        contentChanged: (e: any, editor: any) => {
                            setContent(editor.html.get());
                        }
                    }
                }}
            />
        </div>
    );
};

export default FroalaTextEditor;
