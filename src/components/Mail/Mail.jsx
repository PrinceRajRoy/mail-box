import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMailById, selectMailsByTagAndId } from "../../store/reducers";
import { tagColors } from "../MailList/MailItem";

function Mail() {
  const { tag, id } = useParams();
  const mail = useSelector((state) => selectMailsByTagAndId(state, id, tag));

  return (
    <div className="text-left p-4 m-3 flex flex-col gap-8 items-start h-full border border-gray-300 shadow-sm bg-white rounded-md">
      {mail ? (
        <>
          <span
            className={`py-1 px-2 text-xs font-bold rounded-md ml-1 absolute right-7 ${
              tagColors[mail?.tag]
            }`}
          >
            {mail.tag}
          </span>
          <div className="text-xl font-bold sm-max:w-5/6 sm-max:text-sm">
            {mail.subject}
          </div>
          <div className="whitespace-pre-wrap">{mail.body}</div>
        </>
      ) : (
        <div className="text-red-600 font-semibold mx-auto">Mail Not Found</div>
      )}
    </div>
  );
}

export default Mail;
