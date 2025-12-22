// src/pages/AboutPage.tsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import AboutHero from '../sections/AboutHero';
import MissionVisionValues from '../sections/MissionVisionValues';
import StoryTimeline from '../sections/StoryTimeline';
import TeamSection from '../sections/TeamSection';
import AboutStats from '../sections/AboutStats';
import CTASection from '../sections/CTASection';

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <AboutHero />
      <MissionVisionValues />
      <StoryTimeline />
      <TeamSection />
      <AboutStats />
      <CTASection />
    </MainLayout>
  );
};

export default AboutPage;