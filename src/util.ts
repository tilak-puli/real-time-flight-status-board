import moment from "moment";

export const formatDateTime = (datetimeString: string) => {
  return moment(datetimeString).format("lll");
};
