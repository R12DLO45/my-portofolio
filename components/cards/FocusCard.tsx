import { portfolioData } from "@/data/portfolioData";

export default function FocusCard() {
  const { education, experience } = portfolioData;
  const latestExp = experience[0];

  return (
    <div className="md:col-span-1 lg:col-span-1 p-8 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
      <div className="space-y-6">
        {/* Education Section */}
        <div>
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">🎓 Pendidikan</span>
          <h3 className="text-lg font-bold text-neutral-100 mt-3">{education.degree}</h3>
          <p className="text-sm text-neutral-400 mt-1">
            {education.university}
          </p>
          <p className="text-sm text-neutral-500 mt-1">
            {education.period} • IPK {education.gpa}
          </p>
        </div>

        {/* Experience Section */}
        <div className="pt-6 border-t border-neutral-800">
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">💼 Pengalaman</span>
          <h3 className="text-lg font-bold text-neutral-100 mt-3">{latestExp.role}</h3>
          <p className="text-sm text-neutral-400 mt-1">
            {latestExp.company}
          </p>
          <p className="text-sm text-neutral-500 mt-1">
            {latestExp.period}
          </p>
        </div>
      </div>

      {/* Location Footer */}
      <div className="mt-6 pt-6 border-t border-neutral-800 text-sm text-neutral-500">
        {portfolioData.personal.location}
      </div>
    </div>
  );
}