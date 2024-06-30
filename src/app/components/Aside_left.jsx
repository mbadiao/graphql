// "use client";
// import { useAppContext } from '../context/appContext';
// import Chart from 'react-apexcharts'

// const Aside_left = () => {
//   const { TransactionSkills, loading } = useAppContext();

//   if (loading) {
//     return <div>loading...</div>;
//   }
//   if (!TransactionSkills || TransactionSkills.length === 0) {
//     return <div>No data available</div>;
//   }
//   // Process the data to get the sum of amounts for each skill type
//   const calculateSkillSums = (skillsArray) => {
//     return skillsArray.reduce((acc, skill) => {
//       if (acc[skill.type]) {
//         acc[skill.type] += skill.amount;
//       } else {
//         acc[skill.type] = skill.amount;
//       }
//       return acc;
//     }, {});
//   };

//   const skillSums = calculateSkillSums(TransactionSkills);

//   // Convert skillSums object to array and sort it by amount in descending order
//   const sortedSkills = Object.entries(skillSums)
//     .map(([type, amount]) => ({ type, amount }))
//     .sort((a, b) => b.amount - a.amount)
//     .slice(0, 6); // Get the top 6 skills

//   // Calculate total amount of the top 6 skills
//   const totalAmount = sortedSkills.reduce((total, skill) => total + skill.amount, 0);

//   // Convert amounts to percentages
//   const skillsWithPercentages = sortedSkills.map(skill => ({
//     type: skill.type,
//     percentage: (skill.amount / totalAmount) * 100
//   }));

//   // Prepare data for the radar chart
//   const chartOptions = {
//     chart: {
//       type: 'radar',
//       toolbar: {
//         show: false, // Remove the download option
//       },
//     },
//     title: {
//       text: 'Top 6 Skills Radar Chart'
//     },
//     xaxis: {
//       categories: skillsWithPercentages.map(skill => skill.type)
//     },
   
//   };

//   const chartSeries = [
//     {
//       name: 'Skill Percentage',
//       data: skillsWithPercentages.map(skill => skill.percentage)
//     }
//   ];

//   return (
//     <div>
//         <Chart options={chartOptions} series={chartSeries} type="radar" height={350} />
//     </div>
//   );
// };

// export default Aside_left;



import React from 'react'

const Aside_left = () => {
  return (
    <div>Aside_left</div>
  )
}

export default Aside_left