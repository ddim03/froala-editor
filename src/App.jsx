import "./App.css";
/* eslint-disable no-unused-vars */
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditorComponent from "react-froala-wysiwyg";

export default function Editor() {
  let config = {
    heightMin: 300,
    events: {
      contentChanged: function (e, editor) {
        console.log(this.html.get());
      },
    },
  };

  return (
    <div className="editor-wrapper">
      <h2> Froala React WYSIWYG Editor</h2>
      <FroalaEditorComponent tag="textarea" config={config} />
    </div>
  );
}
