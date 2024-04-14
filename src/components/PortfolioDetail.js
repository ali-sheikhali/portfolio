import React from "react";
import { Link, useParams } from "react-router-dom";
import WideScreenNavBar from "./navbar/WideScreenNavBar";
import MobileBar from "./navbar/MobileBar";
function PortfolioDetail() {
  const { id } = useParams();
  return (
    <div >
      <div className="lg:hidden w-11/12 mx-auto my-5">
        <div>
          <MobileBar />
        </div>
        <div>
          <div className="border my-10">
            <h2>Portfolio Detail</h2>
            <p>ID: {id}</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-11/12 mx-auto xl:w-9/12 gap-5">
        <div className="w-3/12">
          <Link to="/">
            <WideScreenNavBar />
          </Link>
        </div>
        <div className="w-9/12 border my-5 rounded-lg">
          <h2>Portfolio Detail</h2>
          <p>ID: {id}</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetail;
