"use client";
import Image from "next/image";

function Policy({ title, content, figures }) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
  };

  return (
    <section className="border-b-2 section">
      <h2 className="mt-8 mb-8 text-xl font-bold title">{title}</h2>
      {content.map((paragraph, index) =>
        typeof paragraph === "string" ? (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: paragraph }}
            className="mt-4"
          ></div>
        ) : paragraph.type === "images" ? (
          <div
            key={index}
            className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-6"
          >
            {paragraph.images.map((figure, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center figure-item"
              >
                <Image
                  src={figure.src}
                  alt={figure.alt}
                  width={100}
                  height={100}
                  className="mx-auto mb-2"
                />
                <p className="font-bold text-center">{figure.caption}</p>
              </div>
            ))}
          </div>
        ) : null
      )}
      {figures && (
        <div
          className={`grid ${
            gridCols[figures.length]
          } gap-4 py-2 border rounded-lg mb-12 figure-grid`}
        >
          {figures.map((figure, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 figure-item"
            >
              {Array.isArray(figure.imageSrc) ? (
                <div className="flex items-center justify-center">
                  {figure.imageSrc.map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt={figure.alt}
                      width={100}
                      height={100}
                      className="mx-2 mb-4"
                    />
                  ))}
                </div>
              ) : (
                <Image
                  src={figure.imageSrc}
                  alt={figure.alt}
                  width={100}
                  height={100}
                  className="mb-2"
                />
              )}
              <p className="mb-4 font-bold text-center">{figure.caption}</p>
              <p className="text-center">{figure.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Policy;
