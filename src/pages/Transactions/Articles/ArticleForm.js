import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const ArticleForm = ({ data, setArticle, setSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setTitle(data.title);
    setDescription(data.description);
    setThumbnail(data.thumbnail);

    return () => {
      setLoading(false);
      setTitle("");
      setDescription("");
      setThumbnail("");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setArticle({
      title,
      description,
      thumbnail
    });
    setSubmit(true);
  };

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
        </div>
        <Form.Control value={description} as="textarea" rows={12} placeholder="Enter description" onChange={e => { setDescription(e.target.value) }} />
      </Form.Group>

      <Button id="button_submit" disabled={isLoading} type="submit" variant="primary">{isLoading ? "Loading..." : "Submit"}</Button>
    </Form>
  );
};

export default ArticleForm;
