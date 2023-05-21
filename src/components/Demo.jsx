import React, { useState } from "react";
import submitIcon from "../../public/assets/icons8-enter-32.png";
import linkIcon from "../../public/assets/icons8-link-64.png";
const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });


  const handleSubmit = async (e) => {
    alert("submitted");
  };
  return (
    <section className="container mt-16 w-full max-w-xl">
      {/* search */}
      <div className="flex flex-col w-full gap-2">
        <form
          classNam="relative flex 
					justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute my-3 ml-2.5 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
						onChange={(e) => setArticle({
							...article, url:e.target.value
						})}
            required
						className="url_input peer pl-9"
					
          />

          <button
            type="submit url_input peer"
            className="submit-btn
							peer-focus:border-gray
            peer-focus:text-gray-700"
					>
						<img
							src={submitIcon}
							className="relative submit-btn-icon
							peer-focus:border-gray
            peer-focus:text-gray-700"
						/>
					</button>
					{/* Browse URL History */}
        </form>
      </div>
    </section>
  );
};

export default Demo;
