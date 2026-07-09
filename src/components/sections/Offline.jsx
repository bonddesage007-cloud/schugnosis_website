import { Database, ShieldCheck, BookOpen } from "lucide-react";

function Offline() {
  return (
    <section className="offline-section">
      <div>
        <span>Why Schools Trust It</span>

        <h2>Built for real Nigerian school conditions.</h2>

        <p>
          Schugnosis Lite runs on a single school computer,
          stores records locally and continues working even
          when internet is unavailable.
        </p>
      </div>

      <div className="offline-grid">

        <div>
          <Database />

          <strong>SQLite Local Database</strong>

          <p>
            Records stay on the school computer.
          </p>
        </div>

        <div>
          <ShieldCheck />

          <strong>Backup Protection</strong>

          <p>
            Export data to flash drive or external storage.
          </p>
        </div>

        <div>
          <BookOpen />

          <strong>Easy Staff Adoption</strong>

          <p>
            Simple screens for admin,
            accountant and records officers.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Offline;