import Content from "./Content";
import FigureGrid from "./FigureGrid";

function Section({ title, content, figures }) {
  return (
    <section className="border-b-2 section">
      <h2 className="mt-8 mb-8 text-xl font-bold title">{title}</h2>
      <Content content={content} />
      {figures && <FigureGrid figures={figures} />}
    </section>
  );
}

export default Section;
