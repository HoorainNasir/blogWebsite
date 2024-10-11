import Image from "next/image";

export default function Blogs() {
  return (
    <div>
      <div className="parentContainer">
        <div className="childContainer">
          <div className="imageContainer">
            <Image
              src={"/p.image.jpg"}
              alt="Python programming"
              width={300}
              height={250}
            />
          </div>
          <h1 className="title">Python Programming Language</h1>
          <p className="description">
            Python is a versatile, high-level programming language known for its
            simplicity and readability. It is widely used in web development,
            data science, AI, and automation due to its extensive libraries and
            frameworks. Python&#39;s easy-to-understand syntax makes it ideal
            for both beginners and experienced developers.
          </p>
          <label>
            <button className="readMore">
              <a href="/blogs/blog7">Read More</a>
            </button>
          </label>
        </div>

        <div className="childContainer">
          <div className="imageContainer w-auto h-auto">
            <Image
              src={"/cloud-computing.webp"}
              alt="cloud computing"
              width={300}
              height={250}
            />
          </div>

          <h1 className="title">Power of Cloud Computing</h1>
          <p className="description">
            The digital era has opened up endless opportunities for careers in
            technology, and one of the most in-demand roles is that of a web
            developer. Whether you&#39;re a creative designer or a
            problem-solving enthusiast, web development offers a diverse range
            of opportunities to build and shape the digital landscape.
          </p>
          <label>
            <button className="readMore">
              <a href="/blogs/blog8">Read More</a>
            </button>
          </label>
        </div>

        <div className="childContainer">
          <div className="imageContainer">
            <Image
              src={"/image.png"}
              alt="DevOps Engineers"
              width={300}
              height={250}
            />
          </div>
          <h1 className="title">What is a DevOps Engineer?</h1>
          <p className="description">
            Blockchain technology is one of the most transformative innovations
            of the 21st century, with the potential to change industries ranging
            from finance to healthcare. Despite being commonly associated with
            cryptocurrencies like Bitcoin, blockchain&#39;s capabilities extend
            far beyond digital money.
          </p>
          <label>
            <button className="readMore">
              <a href="/blogs/blog9">Read More</a>
            </button>
          </label>
        </div>
      </div>
    </div>
  );
}
