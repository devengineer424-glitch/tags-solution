// Minimal, dependency-free markdown renderer for the content blocks stored in
// the TAGS data (## / ### headings, **bold**, - and 1. lists, paragraphs).
// Styled to sit inside the ITSulu ".mil-*" article typography.

function renderInline(text) {
  // Split on **bold** while preserving the delimiters' content.
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="mil-dark">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function Markdown({ content, className = "" }) {
  if (!content) return null;

  const lines = content.split("\n");
  const blocks = [];
  let list = null; // { type: 'ul' | 'ol', items: [] }

  const flushList = () => {
    if (list) {
      blocks.push(list);
      list = null;
    }
  };

  lines.forEach((raw) => {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flushList();
      return;
    }
    if (line.startsWith("### ")) {
      flushList();
      blocks.push({ type: "h3", text: line.slice(4) });
    } else if (line.startsWith("## ")) {
      flushList();
      blocks.push({ type: "h2", text: line.slice(3) });
    } else if (/^-\s+/.test(line)) {
      if (!list || list.type !== "ul") {
        flushList();
        list = { type: "ul", items: [] };
      }
      list.items.push(line.replace(/^-\s+/, ""));
    } else if (/^\d+\.\s+/.test(line)) {
      if (!list || list.type !== "ol") {
        flushList();
        list = { type: "ol", items: [] };
      }
      list.items.push(line.replace(/^\d+\.\s+/, ""));
    } else {
      flushList();
      blocks.push({ type: "p", text: line });
    }
  });
  flushList();

  return (
    <div className={`mil-article-content ${className}`}>
      {blocks.map((b, i) => {
        if (b.type === "h2") return <h3 key={i} className="mil-mb-30">{renderInline(b.text)}</h3>;
        if (b.type === "h3") return <h5 key={i} className="mil-mb-15 mil-mt-30">{renderInline(b.text)}</h5>;
        if (b.type === "p") return <p key={i} className="mil-mb-30">{renderInline(b.text)}</p>;
        if (b.type === "ul")
          return (
            <ul key={i} className="mil-list-2 mil-mb-30">
              {b.items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
            </ul>
          );
        if (b.type === "ol")
          return (
            <ol key={i} className="mil-list-2 mil-mb-30" style={{ listStyle: "decimal", paddingLeft: "20px" }}>
              {b.items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
            </ol>
          );
        return null;
      })}
    </div>
  );
}
