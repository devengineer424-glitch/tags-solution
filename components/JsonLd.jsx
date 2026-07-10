// Renders one or more JSON-LD structured-data blocks into the document.
// Accepts a single schema object or an array of them.
export default function JsonLd({ data }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.filter(Boolean).map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
