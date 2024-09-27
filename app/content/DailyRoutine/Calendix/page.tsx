import Head from "@/app/components/Head";
import Hero from "@/app/components/Hero";
import { Play } from "lucide-react";
import Link from "next/link";
import React from "react";

const Calendix = () => {
  return (
    <main className="container">
      <div className="flex justify-evenly absolute left-0 top-0">
        <Link className="Link" href="/content/DailyRoutine">
          Back
        </Link>
      </div>
      <Head />
      <Hero />

      <div className="mt-4 flex gap-4 justify-center align-middle">
        <Link
          href={"/content/DailyRoutine/Calendix"}
          className="flex self-center bg-black text-white py-3 px-4 rounded-full"
        >
          Get Started Now
        </Link>
        <Link
          href={"/content/DailyRoutine/Calendix"}
          className="flex self-center gap-2 border border-gray-300 rounded-full py-3 px-4"
        >
          <Play />
          Watch a Video
        </Link>
      </div>

      <section className="text-center mt-24">
        <p>Trusted By</p>
        <div className="flex gap-12 *:h-8 mt-4 justify-center text-green-600" >
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/7dsuPwH4V8KJvCexSZueZc/272b2ef619de8ae4b443758413a19733/Unbounce_Logo.svg" alt=""></img>
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/1FA2gEsWeu2MyGSy6Qp6ao/859833105cdd6ed5cc75eb5e4bd9cff7/HelloFresh.svg" alt=""></img>
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/4Y87kRrhSPSYgUbSWYxP1z/a13177cf43f99e7a79c691c54e271a98/Hubspot.svg" alt=""></img>
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/vHHaKAaEeQuNcucdWM50V/23351da3b1ad9d7483ddf11aed64b4b7/Mixpanel.svg" alt=""></img>
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/7dsuPwH4V8KJvCexSZueZc/272b2ef619de8ae4b443758413a19733/Unbounce_Logo.svg" alt=""></img>
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/1FA2gEsWeu2MyGSy6Qp6ao/859833105cdd6ed5cc75eb5e4bd9cff7/HelloFresh.svg" alt=""></img>
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/4Y87kRrhSPSYgUbSWYxP1z/a13177cf43f99e7a79c691c54e271a98/Hubspot.svg" alt=""></img>
          <img src="https://images.ctfassets.net/lh3zuq09vnm2/vHHaKAaEeQuNcucdWM50V/23351da3b1ad9d7483ddf11aed64b4b7/Mixpanel.svg" alt=""></img>
        </div>
      </section>
    </main>
  );
};

export default Calendix;
