import { FC } from "react";
import Section from "./Section";
import NeoButton from "./NeoButton";

const DRIVE_LINK =
  "https://drive.google.com/drive/folders/1QKNwrMs3wSuRlhhlkCN0vJ0dKqjbeCn7?usp=sharing";

const stats = [
  { value: "99.38%", label: "Test Accuracy" },
  { value: "8,047", label: "Daily Records" },
  { value: "8", label: "Retail Branches" },
  { value: "40", label: "Months of Data" },
];

const highlights = [
  {
    title: "The Problem",
    body: "Every branch files a daily cash report in Excel, and the owner reviews hundreds of numbers by hand. Fatigue means shortfalls and unusual revenue drops are often spotted too late.",
  },
  {
    title: "The Model",
    body: "A Random Forest classifier with 200 decision trees, trained on 8,047 records from January 2023 to April 2026. Labels come from a business rule: a deposit is flagged when it falls more than Rp5,000 short of net revenue, or exceeds it by more than Rp10,000.",
  },
  {
    title: "The Results",
    body: "99.38% accuracy, 99.82% precision, 99.28% recall and 99.55% F1-score on unseen data, holding at 99.13% ± 0.27% across 10-fold cross-validation. The deposit-to-revenue ratio alone drives 79.5% of the decisions.",
  },
  {
    title: "The Automation",
    body: "A Flask API on an Ubuntu VPS plus a five-node n8n workflow (form → HTTP → IF → code → SMTP) emails the owner a per-branch anomaly report within seconds. Verified with three black-box test scenarios.",
  },
];

const Thesis: FC = () => {
  return (
    <Section id="thesis" title="Final Project — Thesis" className="bg-orange-300">
      <div className="bg-white border-4 border-black p-8 md:p-10 shadow-[8px_8px_0px_#000] mb-8">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-3">
          Politeknik Negeri Sriwijaya · 2026
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-snug">
          Klasifikasi Anomali Laporan Harian dengan Algoritma Random Forest
          Terintegrasi Pipeline Automasi n8n pada Gerai Ritel Bobil Cell
        </h3>
        <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-4">
          Bobil Cell runs eight telecom branches, and every day the owner
          checked hundreds of cash figures by hand. This system learns each
          branch's normal pattern and emails an alert the moment a report looks
          wrong — no more scanning rows manually.
        </p>
        <p className="text-base leading-relaxed text-gray-600">
          Built with CRISP-DM: a Random Forest model served through a Flask API
          and wrapped in an n8n automation pipeline that turns a spreadsheet
          upload into an instant email notification.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-yellow-300 border-4 border-black p-5 text-center shadow-[4px_4px_0px_#000]"
          >
            <p className="text-3xl md:text-4xl font-extrabold text-black">
              {stat.value}
            </p>
            <p className="text-sm font-bold text-black mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {highlights.map((highlight) => (
          <div
            key={highlight.title}
            className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_#000]"
          >
            <h4 className="text-xl font-bold text-black mb-2">
              {highlight.title}
            </h4>
            <p className="text-gray-700 leading-relaxed">{highlight.body}</p>
          </div>
        ))}
      </div>

      <NeoButton href={DRIVE_LINK}>Scripts, Raw Data & Dataset</NeoButton>
    </Section>
  );
};

export default Thesis;
