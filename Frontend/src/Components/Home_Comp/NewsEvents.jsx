import { FaRegCalendar } from "react-icons/fa6";
import Solar from "../../Images/HomeComp-Images/Solar.jpg";
import Agri from "../../Images/HomeComp-Images/Agriculture.jpg";
import VR from "../../Images/HomeComp-Images/VR.jpg";
import Factory from "../../Images/HomeComp-Images/Factory.jpg";
import { useEffect, useState } from "react";

function NewsEvents({onEventClicked}) {
  const EventInfo = [
  {
    Highlight: "Pioneers Podcasts",
    Title:
      "PIONEERS — the podcast by INNOVX that explores innovation and its impact across industries",
    Description:
      "PIONEERS is not just another podcast; it’s a deep dive into the fascinating world of innovation and the ways it influences every corner of our society. Each episode invites thought leaders, visionary entrepreneurs, and creative thinkers to share their stories and unique perspectives on the transformative power of ideas. Whether it’s a new technological breakthrough, a groundbreaking social initiative, or an inspiring entrepreneurial journey, the conversations highlight how these innovations are shaping industries like healthcare, agriculture, education, and energy. Listeners gain both practical insights and inspirational takeaways, making the podcast a go-to source for anyone passionate about progress and change.",
    Image: VR,
    Date: "22/07/2025",
  },
  {
    Highlight: "Press release",
    Title:
      "MAVA hosts the 3rd edition of the Africa Forum on Investment in Agricultural Value Chains",
    Description:
      "The 3rd edition of the Africa Forum on Investment in Agricultural Value Chains, hosted by MAVA, marked a significant step forward for the continent’s agricultural sector. This year’s event brought together policymakers, industry leaders, investors, and grassroots entrepreneurs to discuss ways of improving agricultural production and distribution while prioritizing sustainability and inclusivity. Sessions explored the role of climate-smart farming, the integration of cutting-edge technology in agriculture, and the importance of fair trade practices. Key discussions also centered on financing models for smallholder farmers, partnerships to boost market access, and strategies to build resilient supply chains. The forum’s collaborative environment provided a platform for forging strategic partnerships, identifying emerging opportunities, and sharing success stories that inspire innovation in the sector. By connecting stakeholders from diverse backgrounds, the forum reinforced Africa’s position as a vital player in the global agricultural value chain, paving the way for sustainable growth, rural development, and long-term prosperity.",
    Image: Agri,
    Date: "10/07/2025",
  },
  {
    Highlight: "Corporate",
    Title: "International Women's Day - Culture where every voice counts",
    Description:
      "On International Women’s Day, our organization took the opportunity to celebrate the women who inspire progress and contribute to a culture of inclusivity. The event featured a vibrant mix of panel discussions, interactive workshops, and storytelling sessions where women from diverse professional backgrounds shared their journeys, challenges, and triumphs. From engineers and scientists to artists and entrepreneurs, their stories reflected resilience, leadership, and creativity. A central theme was the importance of creating a workplace where everyone’s voice is heard, regardless of gender or background. Participants explored strategies to break down barriers, mentor young professionals, and champion equality in leadership roles. The celebration was more than just a single-day event — it sparked ongoing initiatives such as mentorship programs, diversity-focused training, and community outreach projects aimed at empowering women across industries. Through these efforts, we are building a future where inclusivity is not just a value, but an everyday practice that shapes our organizational culture.",
    Image: Solar,
    Date: "22/07/2025",
  },
  {
    Highlight: "Pioneers Podcasts",
    Title:
      "INNOVX launches Athar Investment Fund: A dedicated impact Investment Fund for agriculture",
    Description:
      "The Athar Investment Fund by INNOVX represents a bold vision for the future of agriculture — one that is sustainable, inclusive, and deeply impactful. This dedicated fund aims to support businesses and initiatives that address critical challenges in the agricultural sector, from improving crop yields and reducing food waste to promoting fair labor practices and environmental conservation. By investing in companies committed to measurable social and environmental outcomes, the fund serves as both a catalyst for economic growth and a driver of positive change in rural communities. The launch event featured insights from agricultural experts, impact investors, and local farmers who shared real-world stories about the transformative potential of targeted funding. In addition to providing financial support, the Athar Investment Fund offers strategic guidance, access to cutting-edge technology, and networking opportunities to help entrepreneurs thrive. It is more than just a financial instrument — it is a movement to reshape food systems, uplift marginalized communities, and create a future where agriculture is a source of opportunity, innovation, and hope for generations to come.",
    Image: Factory,
    Date: "22/07/2025",
  },
];



  const [CurrentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const Interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % EventInfo.length);
    }, 3000);
    return () => clearInterval(Interval);
  }, [EventInfo.length]);

  return (
    <div className="bg-[#F3F4F4] flex justify-center overflow-hidden flex-col items-center px-[30px] pt-20 w-full h-[600px] mt-20">
      <div className="w-full flex ScrollEvents gap-10 justify-between">
        {[...EventInfo, ...EventInfo].map((event, index) => (
          <div
            key={index} onClick={() => onEventClicked(event)}
            className="w-[280px] shrink-0 h-[400px] relative bg-white p-3 group rounded-md hover:bg-black"
          >
            <div className="w-[130px] h-[30px] text-[12px] mt-3 border-1 group-hover:border-none group-hover:bg-gray-400 group-hover:text-white border-black rounded-full items-center flex justify-center">
              {event.Highlight}
            </div>
            <h1 className="text-[16px] text-gray-600 mt-5 font-semibold group-hover:text-white">
              {event.Title}
            </h1>
            <div className="absolute w-full items-center bottom-4 flex">
              {/* date */}
              <div className="flex gap-2 items-center -ml-9 rotate-270 mt-10">
                <FaRegCalendar className="text-[14px] group-hover:text-white rotate-90" />
                <h1 className="text-[14px] text-gray-400">{event.Date}</h1>
              </div>
              <div className="w-[180px] relative left-5 h-[140px]">
                <img
                  className="w-full h-full absolute object-cover rounded-md"
                  src={event.Image}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-12">
        {EventInfo.map((_, index) => (
          <div
            key={index}
            className={`w-[20px] h-[6px] rounded-full transition-all duration-500 ${
              index === CurrentEvent ? "bg-black scale-110" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default NewsEvents;
