import Frontblogs from "@/components/frontblogs";
import Blogs from "@/components/bloglist";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default function BlogsList (){
    return(
        <div>
            <Navbar/>
            <div className="parentContainer">
                <div className="mainTitle">
                    <h1><strong>Welcome to our blog archive!</strong></h1>
                    <p>Here, you will find a collection of all our insightful and informative blog posts, covering a wide range of topics. Whether you&#39;re looking for the latest trends in technology, deep dives into web development, or helpful tips on artificial intelligence, we have something for everyone. Our goal is to provide valuable content that inspires, educates, and keeps you informed. Browse through the list to explore articles that spark your interest, and feel free to share your thoughts in the comments section. Happy reading!</p>
                </div>
            </div>
            <Frontblogs/>
            <Blogs/>
            <Footer/>
        </div>
    );
}