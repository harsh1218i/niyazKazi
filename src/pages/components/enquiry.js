export default function Enquiry() {
    return (
        <article className="enquiry-article">
                <div className="enquiry-article-text">
                    <h3>For Business Enquiries</h3>
                    {/* <p>Over 60,000 supply chain professionals trust Trademo for the latest supply chain news, articles, and industry insights. Join today!</p> */}
                    <div className="form">
                        <div className="form-inputs">
                            <input type="email" placeholder="Enter your business Email Address" />
                        </div>
                        <div className="form-submit">
                            <button type="submit">Submit Enquiry</button>
                        </div>
                    </div>
                </div>
                {/* <div className="enquiry-article-image">
                    <img src="https://res.cloudinary.com/drzta9shk/image/upload/v1708321155/website/HomePage_Feb24/newsletter_looper_1440px_dtjgl0.svg" alt="enquiry-article-image" />
                </div> */}
        </article>
    )
}