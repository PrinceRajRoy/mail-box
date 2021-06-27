import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectMailsByQuery } from "../../store/reducers";
import { useHistory, useLocation, useParams } from "react-router-dom";
import MailItem from "./MailItem";
import useQuery from "../../hooks/useQuery";
import tags from "../../utilities/tags";

function MailList() {
  const { tag } = useParams();
  const histoy = useHistory();
  const query = useQuery("search");
  const data = useSelector((state) =>
    selectMailsByQuery(state, { tag, query })
  );

  useEffect(() => {
    if (!tags.includes(tag)) {
      histoy.push("/inbox");
    }
  }, []);

  return (
    <div className="mb-2">
      {data ? (
        <>
          {data.map((mail) => (
            <MailItem key={mail.id} mail={mail} tag={tag} />
          ))}
        </>
      ) : null}
    </div>
  );
}

export default MailList;
