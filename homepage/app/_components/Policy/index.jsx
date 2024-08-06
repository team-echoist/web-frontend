import Section from "./Section"

const Policy = ({ sections }) => {
    return (
        <main className="container mx-auto p-4">
            {sections.map((section, index) => (
                <Section key={index} {...section} />
            ))}
        </main>
    )
}

export default Policy
