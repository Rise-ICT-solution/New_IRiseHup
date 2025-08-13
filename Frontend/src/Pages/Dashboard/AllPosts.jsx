import SinglePost from "../../Components/Dashboard/SinglePost";
import Sidebar from "../../Components//Dashboard/Sidebar";
import Solar from "../../Images/HomeComp-Images/Solar.jpg";
import Agri from "../../Images/HomeComp-Images/Agriculture.jpg";
import VR from "../../Images/HomeComp-Images/VR.jpg";
import Factory from "../../Images/HomeComp-Images/Factory.jpg";

function AllPosts (){
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
    return <div className="w-full min-h-screen bg-gray-200   flex ">
      <div className=" w-[18%] h-screen fixed left-0 top-0 ">
        <Sidebar />
      </div>
        <div className="ml-[18%] flex flex-col items-center overflow-y-auto min-h-screen pt-10 pb-10 w-[82%] p-5">
          <h1 className="font-semibold text-[25px] mb-5"> All Posts </h1>
          <div className="flex flex-wrap gap-y-10 gap-8">
              <SinglePost />
              <SinglePost />
              <SinglePost />
              <SinglePost />
              <SinglePost />
              <SinglePost />
              <SinglePost />
              <SinglePost />
          </div>
        </div>

    </div>
}
export default AllPosts;