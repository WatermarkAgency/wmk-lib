export const wmkClass = (name, group, append = "", prefix = "wmk") => {
  const classes = [prefix+"-"+group,prefix+"-"+group+'-'+name,append];
  return classes.join(" ").trim();
};
