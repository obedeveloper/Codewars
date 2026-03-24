function printerError(s) {
  const {length} = s;
  const charCodeM = "m".charCodeAt();
  
  const errors = s.split('').reduce((errs, char) => {
    const charCode = char.charCodeAt();
    errs += !!(charCode > charCodeM);
    return errs;
  } , 0)
    
  
  return `${errors}/${length}`;
}