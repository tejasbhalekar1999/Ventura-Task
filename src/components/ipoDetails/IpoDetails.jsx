"use client";

import Image from "next/image";
import {MdKeyboardArrowRight} from "react-icons/md"
import arrow from "../../../public/images/arrow.svg";
import downloadIcon from "../../../public/images/download-icon.svg";
import IPOData  from "/public/data/ipoData.json";


import Link from "next/link";
import IPOTimeline from "../stepper/Stepper";

export default function IPODetails({ id }) {
  const IPODataID = IPOData.filter((ipoData) => ipoData.id == id);

  const ipokey = IPODataID[0];

  const steps = ipokey.steps;

  const currentDate = new Date();

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split(" ");
    return new Date(`${month} ${day}, ${year}`);
  };

  // Calculate the number of completed steps
  const completedSteps = steps.filter(
    (step) => currentDate >= formatDate(step.date)
  ).length;
 
  const ipo = id;

  if (!ipo) {
    return <p>IPO not found</p>;
  }

  return (
    <div className="container">
      <div className="links">
        <Link href="/" className="primary home-link">
          Home
        </Link>
        <MdKeyboardArrowRight fontSize={15} color="gray"/>
        <Link href="#" className="primary detail-market">
          Market Watch
        </Link>
      </div>

      <div className="company-detail-wrap">
        <div className="logo_wrap">
          <Link href="/" className="back-btn">
            <Image src={arrow} alt="arrow_icon" />
          </Link>
          <div className="company-logo">
            <Image
              src={ipokey.logoImage}
              alt={ipokey.company}
              width={150}
              height={150}
            />
            <div className="logo-txt-wrap">
              <p className="secondary company-name">{ipokey.company}</p>
              <p className="primary">{ipokey.company} Private Limited</p>
            </div>
          </div>
        </div>

        <div className="btn-wrap">
          <div className="download-btn">
            <Image src={downloadIcon} alt="download_icon" />
          </div>

          <button className="apply-btn">Apply</button>
        </div>
      </div>

      <div className="ipo-detail-wrap">
        <h6 className="secondary detail-title"> Ipo details</h6>
        <div className="ipo-detail-inner-wrap">
          <div className="details-wrap">
            <div className="details res-details">
              <span className="primary">Issue size</span>
              <span className="secondary">{ipokey.issueSize}</span>
            </div>
            <div className="details">
              <span className="primary">Price range</span>
              <span className="secondary">{ipokey.priceRange}</span>
            </div>
            <div className="details">
              <span className="primary">Minimun Amount</span>
              <span className="secondary">{ipokey.minInvestment}</span>
            </div>
            <div className="details">
              <span className="primary">lost size</span>
              <span className="secondary">{ipokey.lots}</span>
            </div>
          </div>
          <div className="details-wrap res-issueDates">
            <div className="details">
              <span className="primary">Issue Dates</span>
              <span className="secondary">{ipokey.issueDates}</span>
            </div>
            <div className="details res-hidden">
              <span className="primary">Listed on</span>
              <span className="secondary">{ipokey.listedOn}</span>
            </div>
            <div className="details res-hidden">
              <span className="primary">Listed Price</span>
              <span className="secondary">{ipokey.listedPrice}</span>
            </div>
            <div className="details res-hidden">
              <span className="primary">Listing gains</span>
              <span className="secondary">
                {ipokey.listedGains} (<span>{ipokey.listedGainsValue}</span>)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="ipo-timeline-wrapper">
        <h3>IPO timeline</h3>
        <div className="ipo-timeline">
          <IPOTimeline
            currentStep={completedSteps}
            numberOfSteps={steps.length}
            stepsData={steps}
          />
        </div>
      </div>
      <div className="abt-company-wrap">
        <h3 className="secondary"> About the company</h3>
        <p className="primary abt-txt">{ipokey.abtUsTxt}</p>
        <p className="primary">{ipokey.abtUsTxt2}</p>
      </div>
    </div>
  );
}
