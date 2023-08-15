// pages/about.tsx
import React from "react";
import LandingLayout from "~/pages/Landing/LandingLayout";

const AboutPage: React.FC = () => {
  return (
    <LandingLayout>
      <div className="bg-gradient-to-r from-blue-600 to-white px-8 py-20 text-center text-white md:px-32">
        <h1 className="mb-8 text-5xl">About Us</h1>
      </div>
      <div className="px-8 py-20 md:px-32">
        <h2 className="mb-8 text-4xl">Our Story</h2>
        <h3 className="mb-4 text-2xl">The Problem</h3>
        <p className="mb-6 text-lg">
          In Canada, the shortage of family doctors has reached a critical
          level, leaving over 6.5 million Canadians without a primary care
          provider. The consequences of this shortage are deeply felt by
          patients who face numerous challenges.
        </p>
        <p className="mb-6 text-lg">
          In an effort to accommodate the overwhelming demand, some patients are
          now being restricted to discussing only one medical issue per visit.
          This limitation forces individuals to prioritize their health
          concerns, potentially delaying the diagnosis or treatment of other
          important issues.
        </p>
        <p className="mb-6 text-lg">
          Adding to the frustration, patients have to contend with long wait
          times for appointments, which further hampers timely access to
          necessary healthcare services. This strain on the healthcare system
          underscores the urgent need for measures to address the shortage and
          improve accessibility to quality primary care for all Canadians.
        </p>
        <h3 className="mb-4 text-2xl">The Solution</h3>
        <p className="mb-6 text-lg">
          To address this need, our multidisciplinary team at Symptom 360 has
          been working hard to develop a clinical decision-making tool that
          helps to identify the most pertinent aspects of a patient’s presenting
          symptoms prior to their family medicine visit so that physicians can
          spend less time pinpointing issues and more time solving them.
        </p>
        <p className="mb-6 text-lg">
          Our product aims to generate a concise report for doctors on a given
          patient’s symptomology from inputs gathered on our app, which will be
          made available on computers in addition to IOS and android devices.
        </p>
        <p className="mb-6 text-lg">Our product aims to achieve three goals:</p>
        <ul className="mb-6 list-disc pl-16">
          <li>Identify the patient’s primary concern (chief complaint)</li>
          <li>Pinpoint possible diagnoses</li>
          <li>Report pertinent supportive findings</li>
        </ul>
        <p className="mb-6 text-lg">
          We understand that for our product to be successful in the fast paced
          and time-sensitive world of primary care, it needs to save physicians
          time, be user-friendly and accessible to both patients and physicians,
          and, most importantly, it must be accurate.
        </p>
      </div>
    </LandingLayout>
  );
};

export default AboutPage;
