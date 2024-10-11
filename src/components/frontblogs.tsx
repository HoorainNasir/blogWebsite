import Image from "next/image";

export default function Frontblogs() {
  return (
    <div>
      <div className="parentContainer">
        <div className="childContainer">
          <div className="imageContainer">
            <Image
              src={"/technology.webp"}
              alt="technology"
              width={300}
              height={250}
            />
          </div>
          <h1 className="title">Technology & its Impact</h1>
          <p className="description">
            Technology has become an integral part of our daily lives,
            revolutionizing industries, economies, and even our social fabric.
            From communication to healthcare, the impact of technology is felt
            everywhere. In this blog, we will explore the different aspects of
            technology, its evolution, and how it continues to shape our future.
          </p>
          <label>
            <button className="readMore">
              <a href="/blogs/blog1">Read More</a>
            </button>
          </label>
        </div>

        <div className="childContainer">
          <div className="imageContainer">
            <Image
              src={"/web-dev.jpg "}
              alt="web development"
              width={300}
              height={250}
            />
          </div>
          <h1 className="title">Becoming a WebDeveloper</h1>
          <p className="description">
            The digital era has opened up endless opportunities for careers in
            technology, and one of the most in-demand roles is that of a web
            developer. Whether you&#39;re a creative designer or a
            problem-solving enthusiast, web development offers a diverse range
            of opportunities to build and shape the digital landscape.
          </p>
          <label>
            <button className="readMore">
              <a href="/blogs/blog2">Read More</a>
            </button>
          </label>
        </div>

        <div className="childContainer">
          <div className="imageContainer">
            <Image
              src={"/blockchain1.webp"}
              alt="blockchain"
              width={300}
              height={250}
            />
          </div>
          <h1 className="title">Introduction to Blockchain</h1>
          <p className="description">
            Blockchain technology is one of the most transformative innovations
            of the 21st century, with the potential to change industries ranging
            from finance to healthcare. Despite being commonly associated with
            cryptocurrencies like Bitcoin, blockchain&#39;s capabilities extend
            far beyond digital money.
          </p>
          <label>
            <button className="readMore">
              <a href="/blogs/blog3">Read More</a>
            </button>
          </label>
        </div>

        <div className="childContainer">
          <div className="imageContainer ">
            <Image
              src={"/cSecurity.jpg"}
              alt="cyber security"
              width={300}
              height={250}
            />
          </div>
          <h1 className="title">
            Cybersecurity: The Shield of the Digital World
          </h1>
          <p className="description">
            Cybersecurity has become a crucial component of our everyday digital
            experience. As we embrace digital innovation, the need to secure our
            personal information, financial data, and digital assets is more
            critical than ever. Let&#39;s explore what cybersecurity is?
          </p>
          <label>
            <button className="readMore">
              <a href="/blogs/blog4">Read More</a>
            </button>
          </label>
        </div>

        <div className="childContainer">
          <div className="imageContainer ">
            <Image
              src={"/softdev.jpg"}
              alt="Software Development"
              width={300}
              height={250}
            />
          </div>
          <h1 className="title">
            Software Development: A Beginner&#39;s Guide
          </h1>
          <p className="description">
            The art & science of creating computer programs, applications, &
            systems that solve problems, automate processes, or enhance user
            experiences. It forms the backbone of the modern digital world. This
            blog will explore what software development is?
          </p>
          <label>
            <button className="readMore">
              <a href="/blogs/blog5">Read More</a>
            </button>
          </label>
        </div>

        <div className="childContainer">
          <div className="imageContainer ">
            <Image
              src={"/analysis.jpg"}
              alt="data analyst"
              width={300}
              height={250}
            />
          </div>
          <h1 className="title">Data Analyst Career Guide</h1>
          <p className="description">
            Data is everywhere. From the clicks we make on websites to the
            purchases we complete online, data is constantly being generated,
            and businesses are eager to make sense of it all. This is where a
            Data Analyst comes in. But what exactly does a data analyst do, and
            what does it take to become one?
          </p>
          <label>
            <button className="readMore">
              <a href="/blogs/blog6">Read More</a>
            </button>
          </label>
        </div>
      </div>
    </div>
  );
}
