import { BadgeCheck } from "lucide-react";
import { financeCards } from "../../data/finance";

function Finance({ screenshots }) {
  return (
    <section id="finance" className="finance-section">
      <div className="finance-copy">
        <span>Accountant Friendly</span>

        <h2>
          A finance module that schools can actually understand.
        </h2>

        <p>
          Track expected fees, payments, balances, cashbook entries,
          receipts, student statements and debtors from one clean
          finance dashboard.
        </p>

        <div className="finance-tags">
          {financeCards.map((item) => (
            <span key={item}>
              <BadgeCheck size={15} />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="finance-display">
        <div className="market-card">
          <div className="market-header">
            <span>Monthly Revenue</span>
            <strong>Finance Analytics</strong>
          </div>

          <div className="market-bars">
            {[35, 62, 48, 78, 44, 92, 70, 84, 55, 96, 74, 88].map(
              (height, index) => (
                <i
                  key={index}
                  style={{ height: `${height}%` }}
                ></i>
              )
            )}
          </div>

          <div className="market-stats">
            <div>
              <span>Total Paid</span>
              <strong>₦2,450,000</strong>
            </div>

            <div>
              <span>Outstanding</span>
              <strong>₦320,000</strong>
            </div>
          </div>
        </div>

        <div className="browser-frame small-frame">
          <div className="browser-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <img
            src={screenshots.finance}
            alt="Finance Dashboard"
          />
        </div>
      </div>
    </section>
  );
}

export default Finance;