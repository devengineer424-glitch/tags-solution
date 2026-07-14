// Branded global loading state. Shows the TAG Solutions mark gently pulsing
// above an orange indeterminate progress bar. Used by app/loading.jsx for
// route transitions, and can be dropped anywhere a section is loading.
export default function Loader({ label = "Loading", fullscreen = true }) {
  return (
    <div
      className={`tag-loader${fullscreen ? " tag-loader--fullscreen" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`${label}…`}
    >
      <div className="tag-loader__inner">
        <img
          src="/tags/favicon-192.png"
          alt=""
          aria-hidden="true"
          width={72}
          height={72}
          className="tag-loader__mark"
        />
        <div className="tag-loader__bar" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}
