import "./Blog.css";

export default function Blog() {
  const blogPosts = [
    {
      imgSrc: "../public/bill-board.jpg",
      altText: "Billboard Image",
      title: "Billboard",
      description:
        "Best known for the Hot 100 and Billboard 200, which list the most popular songs and albums each week in the industry. Offers industry news, events, podcasts, and music streaming.",
    },
    {
      imgSrc: "/public/business-insider.jpg",
      altText: "Business Insider Image",
      title: "Business Insider",
      description:
        "High-end business journalism keeping readers up-to-date on economic news as well as interviews with top entrepreneurs. There’s also educated predictions, trend analyses, and tips.",
    },
    {
      imgSrc: "/public/people.jpg",
      altText: "People Magazine Image",
      title: "People",
      description:
        "Covers all things showbusiness, including celebrity gossip, entertainment news, and the latest on new shows, movies, and popular books.",
    },
  ];
  return (
    <main className="blog-container">
      <div className="blog-inner-container">
        {blogPosts.map((post, index) => (
          <div className="blog-list" key={index}>
            <img src={post.imgSrc} alt={post.altText} />
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
