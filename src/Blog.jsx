import "./Blog.css";

export default function Blog() {
  return (
    <main className="blog-container">
      <div className="blog-inner-container">
        <div className="blog-list">
          <img src="/public/bill-board.jpg" alt="image1" />
          <div className="blog-content">
            <h2>Billboard</h2>
            <p>
              Best known for the Hot 100 and Billboard 200, which list the most
              popular songs and albums each week in the industry. Offers
              industry news, events, podcasts, and music streaming.
            </p>
          </div>
        </div>
        <div className="blog-list">
          <img src="/public/business-insider.jpg" alt="image2" />
          <div>
            <h2>Business Insider</h2>
            <p>
              High-end business journalism keeping readers up-to-date on
              economic news as well as interviews with top entrepreneurs.
              There’s also educated predictions, trend analyses, and tips.
            </p>
          </div>
        </div>
        <div className="blog-list">
          <img src="/public/people.jpg" alt="image3" />
          <div>
            <h2>People</h2>
            <p>
              Covers all things showbusiness, including celebrity gossip,
              entertainment news, and the latest on new shows, movies, and
              popular books.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
