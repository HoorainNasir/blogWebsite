import Navbar from "@/components/navbar";
import Title from "@/components/title";
import Frontblogs from "@/components/frontblogs";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Title/>
      <Frontblogs/>
      
      <Footer/>
    </div>
  );
}
