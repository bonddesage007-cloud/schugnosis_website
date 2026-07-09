import { pricingPlans } from "../../data/pricing";

function Pricing({ whatsappLink }) {
  return (
    <section id="pricing" className="pricing-section">
      <div className="section-heading">
        <span>Pricing</span>

        <h2>
          Choose the package that fits the school's current stage.
        </h2>

        <p>
          Exact pricing depends on school size, setup needs and support
          requirements.
        </p>
      </div>

      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`price-card ${
              plan.featured ? "featured-price" : ""
            }`}
          >
            <span className="package-label">{plan.name}</span>

            <h3>{plan.price}</h3>

            <p>{plan.text}</p>

            <ul>
              {plan.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Ask for Quote
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;