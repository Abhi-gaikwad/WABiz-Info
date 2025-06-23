import './ComparisonTable.css';

function ComparisonTable() {
  const rows = [
    ['Cost', 'High ad spend (Meta, SMS, cold email platforms)', 'Affordable one-time investment with excellent ROI'],
    ['ROI', 'Low ROI; hard to measure effectiveness', 'High ROI; direct, impactful engagement'],
    ['Message Delivery', 'SMS often ignored, email may go to spam', 'Direct inbox delivery with high visibility'],
    ['Opt-Out Rates', 'High opt-out for emails/SMS', 'Lower opt-out; personalized messaging'],
    ['Engagement', 'Low engagement; cold formats', 'High engagement; 2-way interactions'],
    ['Verification', 'Delayed verifications & code issues', 'Instant, secure delivery'],
    ['Integration', 'Limited tools, hard API access', 'Seamless CRM/Zapier/Woo integration'],
    ['Flexibility', 'Rigid, costly to test or scale', 'Automation, flows, chatbots supported'],
    ['Response Time', 'Slow or delayed responses', 'Real-time replies via WhatsApp'],
  ];

  return (
    <div className="comparison-section">
      <h2 className="section-title">
        How is WhatsApp Better <br />
        <span>Than Other Marketing Channels?</span>
      </h2>

      <div className="card-grid">
        {rows.map(([point, traditional, whatsapp], i) => (
          <div className="compare-card" key={i}>
            <h3 className="card-title">{point}</h3>
            <div className="card-block teal">
              <h4>Traditional</h4>
              <p>{traditional}</p>
            </div>
            <div className="card-block green">
              <h4>WhatsApp (WAPiz)</h4>
              <p>{whatsapp}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="footer-stats">
        <div className="stat-box green">80%+ WhatsApp open rates 🚀</div>
        <div className="stat-box blue">90%+ manual effort saved 🔧</div>
        <div className="stat-box teal">500%+ lead boost with bots 📈</div>
      </div>
    </div>
  );
}

export default ComparisonTable;
