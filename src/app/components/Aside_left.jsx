"use client";
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,PolarRadiusAxis } from 'recharts';
import { useAppContext } from '../context/appContext';

const Aside_left = () => {
  const { TransactionSkills, loading } = useAppContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!TransactionSkills || TransactionSkills.length === 0) {
    return <div>No data available</div>;
  }

  // Function to calculate sums of amounts for each skill type
  const calculateSkillSums = (skillsArray) => {
    return skillsArray.reduce((acc, skill) => {
      if (acc[skill.type]) {
        acc[skill.type] += skill.amount;
      } else {
        acc[skill.type] = skill.amount;
      }
      return acc;
    }, {});
  };

  // Calculate sums and sort them by amount in descending order
  const skillSums = calculateSkillSums(TransactionSkills);
  const sortedSkills = Object.entries(skillSums)
    .map(([type, amount]) => ({ type, amount }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 6); // Get the top 6 skills

  // Calculate total amount of the top 6 skills
  const totalAmount = sortedSkills.reduce((total, skill) => total + skill.amount, 0);

  // Calculate percentages for each skill
  const skillsWithPercentages = sortedSkills.map(skill => ({
    type: skill.type,
    percentage: (skill.amount / totalAmount) * 100
  }));

  // Prepare data for recharts RadarChart
  const data = skillsWithPercentages.map(skill => ({
    subject: skill.type.replace("skill_","").replace('-',''),
    percentage: skill.percentage,
  }));

  const chartOptions = {
    title: {
      text: 'Top 6 Skills Radar Chart'
    },
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Skill Percentage" dataKey="percentage" stroke="#5e37ff" fill="#5e37ff" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Aside_left;
