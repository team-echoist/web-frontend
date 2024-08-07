import Image from "next/image"

function Section({ title, content, figures }) {
    return (
        <section className="py-6 border-b-2 section">
            <h2 className="mb-4 text-xl font-bold title">{title}</h2>
            {content.map((paragraph, index) =>
                typeof paragraph === "string" ? (
                    <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} className="mt-4"></div>
                ) : paragraph.type === "images" ? (
                    <div key={index} className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-6">
                        {paragraph.images.map((figure, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center figure-item">
                                <Image
                                    src={figure.src}
                                    alt={figure.alt}
                                    width={figure.width}
                                    height={figure.height}
                                    className="mb-2"
                                />
                                <p className="text-center">{figure.caption}</p>
                            </div>
                        ))}
                    </div>
                ) : null,
            )}
            {figures && (
                <div className="flex items-center justify-center py-2 border rounded-lg">
                    {figures.map((figure, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col items-center justify-center p-4 ${
                                figures.length > 1 ? "border-right" : ""
                            }`}
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
    )
}

export default Section
