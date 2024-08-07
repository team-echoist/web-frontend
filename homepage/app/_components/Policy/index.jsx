import Section from "./Section"

const Policy = ({ sections }) => {
    return (
        <>
            <main className="container p-4 mx-auto">
                {sections.map((section, index) => (
                    <Section key={index} {...section} />
                ))}
            </main>
        </>
    )
}

export default Policy
