import Link from "next/link";
import React from "react";
import  IPOData  from "/public/data/ipoData.json";

const IPOList = () => {

  return (
    <div className="container ipo-list">
      <div className="table-wrap">
        <table className="ipo-table">
          <thead>
            <tr>
              <th className="primary">Company/issue date</th>
              <th className="primary">Issue Size</th>
              <th className="primary">Price Range</th>
              <th className="primary">Min Investment</th>
            </tr>
          </thead>
          <tbody>
            {IPOData.map((ipo) => (
              <Link href={`/${ipo.id}`} key={ipo.id} legacyBehavior>
                <tr style={{ cursor: "pointer" }}>
                  <td>
                    <div className="company-wrap">
                      <div className="ipo-logo">
                        <img src={ipo.logoImage} alt={ipo.company} />
                      </div>
                      <div className="ipo-company-text">
                        <p className="secondary">{ipo.company}</p>
                        <p className="issue-date primary">{ipo.ipoIssueDate}</p>
                      </div>
                    </div>
                  </td>
                  <td className="secondary">{ipo.listingIssueSize}</td>
                  <td className="secondary">{ipo.priceRange}</td>
                  <td>
                    <div className="invest-qty-wrap">
                      <p className="secondary minInvestment">
                        {ipo.minInvestment}
                      </p>
                      <p className="primary">{ipo.lots}</p>
                    </div>
                  </td>
                </tr>
              </Link>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IPOList;
