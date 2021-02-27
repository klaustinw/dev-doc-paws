import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import ArticleForm from "./ArticleForm";

import { base_url, config } from "../../../variables";
import { useHistory } from "react-router-dom";
import fetchPost from "../../../App/components/fetchPost";

const NewArticle = () => {
  const history = useHistory();
  const [article, setArticle] = useState();
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (submit) {
      async function main() {
        const result = await fetchPost("/admin/article", article);
        if (result) history.push("/transactions/articles", "refetch");
      }
      main();
    }
  }, [submit]);

  return (
    
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Create New Article</Card.Title>
            </Card.Header>
            <Card.Body>
              <ArticleForm
                data={{
                  id: null,
                  title: "",
                  description: "",
                  thumbnail: ""
                }}
                setArticle={setArticle}
                setSubmit={setSubmit}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    
  );
};

export default NewArticle;
