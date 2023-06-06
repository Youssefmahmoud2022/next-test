import Footer from "./components/Footer/Footer";
import AboutSharek from "./components/Home/AboutSharek";
import ProjectRules from "./components/Home/ProjectRules";
import SharekBlogs from "./components/Home/SharekBlogs";
import SharekProjectsList from "./components/Home/SharekProjectsList";
import StartInvest from "./components/Home/StartInvest";
import WeAreSpecial from "./components/Home/WeAreSpecial";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";

export default function Home() {


  return (
    <>
    
      <NavBar />
      <main className="pt-[100px]">
        <HeroSection />
        <AboutSharek />
        <StartInvest />
        <SharekProjectsList />
        <ProjectRules />
        <WeAreSpecial />
        <SharekBlogs />
      </main>
      <Footer/>
    </>
  );
}
