import React from "react";
import { Link } from "react-router-dom";

export const tagColors = {
  inbox: "text-green-700 bg-green-100",
  draft: "text-cyan-700 bg-cyan-100",
  spam: "text-yellow-700 bg-yellow-100",
  trash: "text-red-700 bg-red-100",
};

function MailItem({ mail, tag }) {
  return (
    <Link to={`${tag}/${mail.id}`}>
      <div className="p-4 m-3 flex flex-col gap-2 border border-gray-300 shadow-sm bg-white rounded-md hover:shadow-lg hover:scale-[1.01] transition duration-300">
        <div className="flex justify-between">
          <span className="overflow-ellipsis overflow-hidden whitespace-nowrap font-semibold">
            {mail.subject}
          </span>
          <span
            className={`py-1 px-2 text-xs font-bold rounded-md ml-1 ${
              tagColors[mail?.tag]
            }`}
          >
            {mail.tag}
          </span>
        </div>
        <span className="overflow-ellipsis overflow-hidden whitespace-nowrap text-left">
          {mail.body}
        </span>
      </div>
    </Link>
  );
}

export default MailItem;
