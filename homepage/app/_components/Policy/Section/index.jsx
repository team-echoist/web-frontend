import Image from "next/image"

function Section({ title, content, figures }) {
    return (
        <section className="section border-b-2 py-6">
            <h2 className="title text-xl font-bold mb-4">{title}</h2>
            {content.map((paragraph, index) => (
                <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} className="mt-4"></div>
            ))}
            {figures && (
                <div className="figure-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4">
                    {figures.map((figure, index) => (
                        <div key={index} className="figure-item policies-item flex flex-col items-center">
                            <Image src={figure.imageSrc} alt={figure.alt} width={100} height={100} />
                            <p className="mt-2 text-center">{figure.caption}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Section
