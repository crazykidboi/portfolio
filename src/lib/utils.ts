// export function formatDate(date: Date){
   // return new Intl.DateTimeFormat("en-US", {
     //   weekday: "long",
       // year: "numeric",
        //month: "long",
        //day: "numeric",
      //}).format(date)
//}

export const formatDate = (date: Date | string | null | undefined) => {
  if (!date) return "Invalid Date";
  const d = new Date(date);
  if (isNaN(d.getTime())) return "Invalid Date";
  return d.toLocaleDateString();
};
