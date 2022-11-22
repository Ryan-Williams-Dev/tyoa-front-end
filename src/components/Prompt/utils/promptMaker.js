/**
 *
 * @param {[state.moods]} moods array of mood objects
 * @param {[state.selectedMoods._id]} selectedMoods array of ids corresponding to the moods selected on the previous page
 */
const promptMaker = (moods, selectedMoods) => {
  const length = selectedMoods.length;
  let result = `What would you say to someone who is struggling with ${
    length > 1 ? "feelings of" : "the feeling of"
  }`;

  for (let i = 0; i < length; i++) {
    let mood = moods.find((el) => el._id === selectedMoods[i]);
    let moodString = mood.promptFormat
      ? mood.promptFormat
      : mood.bad.toLowerCase();

    if (length === 1) {
      result += ` ${moodString}`;
    } else if (i === length - 1 && length > 1) {
      result += ` and ${moodString}`;
    } else {
      result += ` ${moodString},`;
    }
  }

  result += "?";

  return result;
};

export default promptMaker;
