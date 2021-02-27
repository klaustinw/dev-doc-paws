import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import ArticleForm from "./ArticleForm";

import fetchPost from "../../../App/components/fetchPost";

const EditArticle = (props) => {
  const oldArticle = props.location.article;
  const { id } = useParams();
  const history = useHistory();
  // const { data: oldArticle, status } = useFetch(`${base_url}/admin/article?article=${id}`);
  const [article, setArticle] = useState();
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (!oldArticle) history.push("/");
  }, []);

  useEffect(() => {
    if (submit) {
      async function main() {
        const result = await fetchPost("/admin/article?article=" + oldArticle._id, article, "PATCH");
        if (result) history.push("/transactions/articles", "refetch");
      }
      main();
    }
  }, [submit]);

  if (oldArticle) return (
    
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Edit Article</Card.Title>
            </Card.Header>
            <Card.Body>
              <ArticleForm
                data={{
                  id: oldArticle._id,
                  title: oldArticle.title,
                  description: oldArticle.description,
                  thumbnail: oldArticle.thumbnail
                }}
                setArticle={setArticle}
                setSubmit={setSubmit}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    
  ); else return null;
};

export default EditArticle;
