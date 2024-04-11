import React from "react";
import { useParams } from "react-router-dom";
function PortfolioDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>Portfolio Detail</h2>
      <p>ID: {id}</p>
      <figure>
      </figure>
    </div>
  );
}

export default PortfolioDetail;
