import React, { useState } from 'react';
import CKEditor from 'ckeditor4-react';
import './App.css';

function App() {
  const [inputText, setText] = useState('');
  const createMarkup = () => {
    return {
      __html: inputText
    };
  };
  return (
    <div className="container">
      <div className="header">Insta fontmozo</div>
      <div className="row">
        <div className="ckeditor column">
          <CKEditor
            data={inputText}
            config={{
              extraPlugins: ['emoji', 'font', 'colorbutton'],
              height: 250,
              font_defaultLabel: 'Verdana',
              toolbarGroups: [
                { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
                { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                { name: 'forms', groups: [ 'forms' ] },
                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
                { name: 'links', groups: [ 'links' ] },
                { name: 'insert', groups: [ 'insert' ] },
                { name: 'styles', groups: [ 'styles' ] },
                { name: 'colors', groups: [ 'colors' ] },
                { name: 'tools', groups: [ 'tools' ] },
                { name: 'others', groups: [ 'others' ] },
                { name: 'about', groups: [ 'about' ] }
              ],
              on: {
                change: (event) => {
                  console.log(event.editor.getData());
                  setText(event.editor.getData())
                }
              },
              resize_enabled: false,
              removePlugins: 'elementspath',
              removeButtons: 'Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Replace,Find,SelectAll,Scayt,Form,Radio,TextField,Checkbox,Textarea,Select,Button,ImageButton,HiddenField,Underline,Strike,CopyFormatting,RemoveFormat,NumberedList,Outdent,Indent,CreateDiv,Blockquote,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,Language,BidiRtl,BidiLtr,Link,Unlink,Anchor,Image,Flash,Table,HorizontalRule,PageBreak,Iframe,Format,Maximize,About,ShowBlocks'
            }}
          />
        </div>
        <div className="markupText column">
          <div className="scroll" dangerouslySetInnerHTML={createMarkup()}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
