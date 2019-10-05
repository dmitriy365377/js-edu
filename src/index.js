/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
   focus = 'family',
   knowsProgramming = true,
   config = { family: 4 }) {

   let hoursToMaster = 800;
   let hoursToBasic = 500;

   const totalHours = {}
   if (knowsProgramming === true) {
      fullHours = hoursToMaster;
   } else if (knowsProgramming === false) {
      fullHours = hoursToMaster + hoursToBasic;
   }

   // for (let hours of Object.values(config)) {
   //    totalHours[focus] = fullHours / hours
   // }

   totalHours[focus] = fullHours / config[focus]

   let iii = Math.ceil(totalHours[focus])
   console.log('числа:', iii)
   return iii;
};
