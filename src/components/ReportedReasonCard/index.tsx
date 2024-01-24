import moment from "moment";
import React from "react";
const ReportedReasonCard = ({ report, children }: { report: any, children: any }) => {
  return (
    <div className="bg-[#1B1C21] p-2 pb-6 rounded-md relative">
      <div className="flex gap-1 justify-between items-start">
        <div className="w-[66%]">
          <h4 className="text-lightGray">Reporting Details</h4>
          <p className="text-secondary1 mt-2 text-xs">
            {report?.text ?? "‎"}
          </p>
          <div className="flex gap-4">
            <div>
              <p className="text-lightGray text-xs mt-5 font-semibold">
                Reporting Reason
              </p>
              <p className="text-secondary1">{report?.reason}</p>
            </div>
            {/* <div>
              <p className="text-lightGray text-xs mt-5 font-semibold">
                Report Count
              </p>
              <p className="text-secondary1">24</p>
            </div> */}
          </div>
        </div>
        <p className="text-lightGray flex items-center gap-1 text-xs flex-shrink-0">
          <i className="icon-time"></i>{moment(report.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
        </p>
      </div>
      {children}
    </div>
  );
};

export default ReportedReasonCard;
