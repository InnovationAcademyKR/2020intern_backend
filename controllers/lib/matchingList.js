const createMatchingList = (userType, state, matchingData) => {
  let result = {};
  let matchingList = [];
  for (let i = 0; i < matchingData.length; i++) {

    // if matching_ID of the previous element and matching_ID of the current element are the same
    if ((i > 0) && (matchingData[i].matching_ID === matchingData[i - 1].matching_ID)) {
      let matchingKeywordListElement = {};
      matchingKeywordListElement.matchingId = matchingData[i].matching_ID;
      matchingKeywordListElement.keywordName = matchingData[i].matching_keyword_name;
      matchingKeywordListElement.categoryName = matchingData[i].matching_category_name;

      matchingList[matchingList.length - 1].keywordList.push(matchingKeywordListElement);
    } else {
      let matchingListElement = {
        "matchingId": matchingData[i].matching_ID,
        "oppositeUsn": matchingData[i].USN,
        "usn": userType ? matchingData[i].mentor_USN : matchingData[i].mentee_USN,
        "oppositeName": userType ? matchingData[i].user_name : matchingData[i].user_name,
        "timeReq": matchingData[i].matching_request_time,
        "timeRes": matchingData[i].matching_response_time,
        "state": matchingData[i].matching_state,
        "reqReason": matchingData[i].request_message,
        "resReason": matchingData[i].response_message,
        "isChecked": matchingData[i].is_checked,
      }

      let matchingKeywordList = [], matchingKeywordListElement = {};
      matchingKeywordListElement.matchingId = matchingData[i].matching_ID;
      matchingKeywordListElement.keywordName = matchingData[i].matching_keyword_name;
      matchingKeywordListElement.categoryName = matchingData[i].matching_category_name;
      matchingKeywordList.push(matchingKeywordListElement);
      matchingListElement.keywordList = matchingKeywordList;

      matchingList.push(matchingListElement);
    }
  }
  result.matchingList = matchingList;
  return result;
}

module.exports = {
  createMatchingList,
}
