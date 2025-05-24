import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="section-padding flex flex-col sm:flex-col lg:flex-row gap-10"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What people say about us?"
          sub="🤩Client Feedback Highlights"
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {testimonials.map(({ imgPath, name, mentions, review }) => (
          <GlowCard card={{ review: review }} key={name}>
            <div className="flex items-center gap-3">
              <div>
                <img src={imgPath} alt={name} />
              </div>
              <div>
                <p className="font-bold">{name}</p>
                <div className="text-white-50">{mentions}</div>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
