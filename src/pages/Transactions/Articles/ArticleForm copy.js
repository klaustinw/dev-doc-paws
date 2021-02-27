import { useEffect, useState } from "react";
import { Button, Form, Dropdown } from "react-bootstrap";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const ArticleForm = ({ data, setArticle, setSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgURLInvalid, setImgURLInvalid] = useState(false);

  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    setTitle(data.title);
    setThumbnail(data.thumbnail);

    return () => {
      setTitle("");
      setDescription("");
      setThumbnail("");
    };
  }, []);

  function checkURL(url) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    if (!!pattern.test(url)) {
      return (url.match(/\.(jpeg|jpg|gif|png)$/i) != null);
    } else {
      return false;
    }
  }

  const editorOnFill = (_, editor) => {
    setDescription(editor.getData());
  };

  const editorInsertImg = (e) => {
    if (e.key === "Enter") {
      const url = e.target.value;
      if (checkURL(url)) {
        setImgURLInvalid(false);
        setDescription(description + `<img src="${url}"></img>`);
      } else {
        setImgURLInvalid(true);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArticle({
      title,
      description,
      thumbnail
    });
    setSubmit(true);
  };

  const URLDropdown = React.forwardRef(({ style, className, "aria-labelledby": labeledBy }, ref) => {
    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Insert URL here..."
          onKeyPress={e => editorInsertImg(e)}
          type="url"
          isInvalid={imgURLInvalid}
        />
        <Form.Control.Feedback className="ml-3" type="invalid">
          Please insert URL of an image.
        </Form.Control.Feedback>
      </div>
    )
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          onChange={(e) => { setTitle(e.target.value) }}
          type="text"
          placeholder="Enter Title"
          value={title}
        />
      </Form.Group>

      <Form.Group controlId="img">
        <Form.Label>Thumbnail</Form.Label>
        <Form.Control
          onChange={(e) => { setThumbnail(e.target.value) }}
          type="url"
          placeholder="Enter URL"
          value={thumbnail}
        />
      </Form.Group>

      <Form.Group controlId="description">
        <div className="mb-2">
          <Form.Label className="d-inline mr-3">Description</Form.Label>
          <Dropdown className="d-inline">
            <Dropdown.Toggle variant="link">
              Insert Image URL
            </Dropdown.Toggle>
            <Dropdown.Menu as={URLDropdown} />
          </Dropdown>
        </div>
        <CKEditor
          editor={ClassicEditor}
          onChange={editorOnFill}
          onReady={editor => editor.setData(data.description)}
          data={description}
        />
      </Form.Group>

      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  );
};

export default ArticleForm;
