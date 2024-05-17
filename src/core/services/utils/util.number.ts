export const numberToByte = (bytes: number): string => {
  if (-1000 < bytes && bytes < 1000) {
    return bytes + ' B'
  }
  const ci = 'kMGTPE'
  let index = 0
  while (bytes <= -999_950 || bytes >= 999_950) {
    bytes /= 1000
    index++
  }
  return `${(bytes / 1000.0).toFixed(1)} ${ci[index]}B`
}

const isNumericInput = (event: KeyboardEvent) => {
  const key = event.keyCode;
  return ((key >= 48 && key <= 57) || // Allow number line
      (key >= 96 && key <= 105) // Allow number pad
  );
};

const isModifierKey = (event: KeyboardEvent) => {
  const key = event.keyCode;
  return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
      (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
      (key > 36 && key < 41) || // Allow left, up, right, down
      (
          // Allow Ctrl/Command + A,C,V,X,Z
          (event.ctrlKey === true || event.metaKey === true) &&
          (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
      )
};

export const enforceFormat = (event: KeyboardEvent) => {
  // Input must be of a valid number format or a modifier key, and not longer than ten digits
  if(!isNumericInput(event) && !isModifierKey(event)){
      event.preventDefault();
  }
};

export const formatToPhone = (event: any) => {
  if(isModifierKey(event)) {return;}

  const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
  const areaCode = input.substring(0,3);
  const middle = input.substring(3,6);
  const last = input.substring(6,10);

  if(input.length > 6){event.target.value = `(${areaCode}) ${middle} - ${last}`;}
  else if(input.length > 3){event.target.value = `(${areaCode}) ${middle}`;}
  else if(input.length > 0){event.target.value = `(${areaCode}`;}
};

export const currency = (number: number) => {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VNĐ',
  });

  return formatter.format(number)
}