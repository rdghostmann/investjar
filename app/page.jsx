import About from "@/components/About/About";
import AmazingFeatures from "@/components/AmazingFeatures/AmazingFeatures";
import CallToAction  from "@/components/CallToAction/CallToAction";
import CoinPriceMarqueeWidget from "@/components/CoinPriceMarqueeWidget/CoinPriceMarqueeWidget";
import FAQ from "@/components/FAQ/Faq";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import InvestorsActivity  from "@/components/InvestorActivity/InvestorActivity";
import Jumbotron from "@/components/Jumbotron/Jumbotron";
import LogoClouds from "@/components/LogoClouds/LogoClouds";
import MotionCard from "@/components/MotionCard/MotionCard";
import MyHeader from "@/components/MyHeader/MyHeader";
import OurMission  from "@/components/OurMission/OurMission";
import ROIPlan from "@/components/ROIPlan/ROIPlan";
import SafeReliable from "@/components/SafeReliable/SafeReliable";
import StartEarning from "@/components/StartEarning/StartEarning";
import Statistics from "@/components/Statistics/Statistics";
import Stats from "@/components/Statistics/Stats";

 

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      {/* <Navbar1 /> */}
      <CoinPriceMarqueeWidget />
      {/* <Banner /> */}
      {/* <MyHeader /> */}
      <Jumbotron />
      <Stats />
      <LogoClouds />
      <About />
      {/* <WatchList /> */}
      <AmazingFeatures />
      <HowItWorks />
      {/* <OurMission /> */}
      <ROIPlan />
      <CallToAction />
      <InvestorsActivity />
      <FAQ />
      <SafeReliable />
      {/* <StartEarning /> */}
      <Footer />
      {/* <Testimonials /> */}
      {/* <Plans /> */}

    </main >
  );
}
