import moment from "moment";

export const formatDateTime = (datetimeString: string) => {
  return moment(datetimeString).format("lll");
};

export const formatDate = (datetimeString: string) => {
  return moment(datetimeString).format("ll");
};

export const formatTime = (datetimeString: string) => {
  return moment(datetimeString).format("LT");
};

export const timeDiffFromNow = (datetimeString: number) => {
  return moment(datetimeString).fromNow();
};
