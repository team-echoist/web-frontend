import Image from "next/image"

function Section({ title, content, figures }) {
    return (
        <section className="border-b-2 py-6">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            {content.map((paragraph, index) => (
                <p key={index} className="mt-4">
                    {paragraph}
                </p>
            ))}
            {figures && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4">
                    {figures.map((figure, index) => (
                        <div key={index} className="flex flex-col items-center">
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
